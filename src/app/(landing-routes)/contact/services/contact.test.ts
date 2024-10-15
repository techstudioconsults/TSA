import { useContactFormStore, useSubmitContactForm } from ".";
import { act } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { ContactFormData } from "~/schemas";
import { mockResponse, renderHook } from "~/test/utils";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
const API_URL = `${BASE_URL}/mailing/contactus`;

globalThis.fetch = vi.fn();

describe("Contact Form test", () => {
  beforeEach(() => {
    // Reset store state before each test
    useContactFormStore.setState({
      isSubmitting: false,
      responseMessage: null,
    });
    vi.resetAllMocks();
  });

  it("should submit contact form successfully", async () => {
    const mockResponseData = { message: "Message sent successfully!" };

    (fetch as any).mockResolvedValueOnce(mockResponse(200, mockResponseData));

    const formData: ContactFormData = {
      fullName: "Alice",
      email: "alice@example.com",
      message: "Hello, this is a test message.",
    };

    const { result } = renderHook(() => useSubmitContactForm());

    await act(async () => {
      const response = await result.current(formData);
      expect(response).toEqual(mockResponseData);
    });

    const store = useContactFormStore.getState();

    expect(store.isSubmitting).toBe(false);
    expect(store.responseMessage).toBe("Message sent successfully!");
    expect(fetch).toHaveBeenCalledWith(
      API_URL,
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }),
    );
  });

  it("should handle contact form submission error correctly", async () => {
    (fetch as any).mockResolvedValueOnce(
      mockResponse(500, { message: "Error sending message." }),
    );

    const formData: ContactFormData = {
      fullName: "Bob",
      email: "bob@example.com",
      message: "This is another test message.",
    };

    const { result } = renderHook(() => useSubmitContactForm());

    await act(async () => {
      const error = await result.current(formData);
      expect(error).toBeInstanceOf(Error);
    });

    const store = useContactFormStore.getState();

    expect(store.isSubmitting).toBe(false);
    expect(store.responseMessage).toBe(
      "Failed to send your message. Please try again later.",
    );
  });
});
