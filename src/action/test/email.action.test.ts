import { beforeEach, describe, expect, it, vi } from "vitest";

import { mockResponse } from "~/test/utils";
import { submitNewsletterForm } from "../email.action";

globalThis.fetch = vi.fn();

describe("Newsletter Form Submission", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("should handle successful form submission", async () => {
    // Mock a successful API response
    const successMessage = "Successfully subscribed!";
    (fetch as any).mockResolvedValueOnce(
      mockResponse(200, { message: successMessage }),
    );

    const response = await submitNewsletterForm({ email: "test@example.com" });

    expect(response).toEqual({ success: successMessage });

    expect(fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/external/newsletter`,
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: "test@example.com" }),
      }),
    );
  });

  it("should handle failed form submission", async () => {
    // Mock a failed API response
    const errorMessage = "Failed to subscribe!";
    (fetch as any).mockResolvedValueOnce(
      mockResponse(400, { message: errorMessage }),
    );

    const response = await submitNewsletterForm({ email: "invalid-email" });

    expect(response).toEqual({ error: errorMessage });

    // Ensure fetch was called
    expect(fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/external/newsletter`,
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: "invalid-email" }),
      }),
    );
  });

  it("should handle unexpected errors during submission", async () => {
    // Mock an unexpected error
    const unexpectedError = new Error("Network Error");
    (fetch as any).mockRejectedValueOnce(unexpectedError);

    const response = await submitNewsletterForm({ email: "test@example.com" });

    expect(response).toEqual({ error: unexpectedError.message });

    // Ensure fetch was called
    expect(fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/external/newsletter`,
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: "test@example.com" }),
      }),
    );
  });
});
