import { beforeEach, describe, expect, it, vi } from "vitest";

import type { RegisterFormData } from "~/schemas";
import { submitRegisterForm } from "../register.action";

// Mock global fetch
const mockFetch = vi.fn();
globalThis.fetch = mockFetch;

describe("Registration Action Tests", () => {
  const mockFormData: RegisterFormData = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phoneNumber: "1234567890",
    course: "test-course-id",
    schedule: "weekly",
  };

  const API_URL = "http://localhost:3000/auth/register";

  beforeEach(() => {
    vi.resetAllMocks();
    process.env.NEXT_PUBLIC_API_URL = "http://localhost:3000";
  });

  it("should successfully submit registration form", async () => {
    // Mock successful response
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: "Registration successful!" }),
    } as Response);

    const result = await submitRegisterForm(mockFormData);

    expect(result).toEqual({
      success: "Registration successful!",
    });

    expect(fetch).toHaveBeenCalledWith(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(mockFormData),
    });
  });

  it("should handle API error response", async () => {
    // Mock error response
    mockFetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ message: "Email already exists" }),
    } as Response);

    const result = await submitRegisterForm(mockFormData);

    expect(result).toEqual({
      error: "Email already exists",
    });
  });

  it("should handle generic error when API fails without message", async () => {
    // Mock error response without message
    mockFetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({}),
    } as Response);

    const result = await submitRegisterForm(mockFormData);

    expect(result).toEqual({
      error: "Failed to register course.",
    });
  });

  it("should handle network errors", async () => {
    // Mock network failure
    mockFetch.mockRejectedValueOnce(new Error("Network error"));

    const result = await submitRegisterForm(mockFormData);

    expect(result).toEqual({
      error: "Network error",
    });
  });

  it("should handle unexpected error format", async () => {
    // Mock non-Error rejection
    mockFetch.mockRejectedValueOnce("Unexpected error format");

    const result = await submitRegisterForm(mockFormData);

    expect(result).toEqual({
      error: "An unknown error occurred",
    });
  });
});
