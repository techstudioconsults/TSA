import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import useCohortStore from "~/stores/cohort.store";
import { fetchCohortsByCourseId, fetchUpcomingCohorts } from "../cohort.action";
import type { Cohort } from "../services.type";

// Mock global fetch and store
const mockStore = () => {
  const setCohorts = vi.fn();
  const setUpcomingCohorts = vi.fn();
  const setPagination = vi.fn();
  const setLoading = vi.fn();
  const setError = vi.fn();

  vi.spyOn(useCohortStore, "getState").mockReturnValue({
    cohorts: [],
    upcomingCohorts: [],
    pagination: {
      total: 0,
      page: 1,
      limit: 1,
      totalPages: 1,
      hasNextPage: false,
      hasPreviousPage: false,
    },
    loading: false,
    error: null,
    setCohorts,
    setUpcomingCohorts,
    setPagination,
    setLoading,
    setError,
  });

  return {
    setCohorts,
    setUpcomingCohorts,
    setPagination,
    setLoading,
    setError,
  };
};

describe("Cohort Actions", () => {
  beforeEach(() => {
    vi.useFakeTimers().setSystemTime(new Date("2025-04-08"));
    vi.stubEnv("NEXT_PUBLIC_API_URL", "http://localhost:3000");
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  describe("fetchCohortsByCourseId", () => {
    const mockCohorts: Cohort[] = [
      {
        id: "1",
        courseId: "course-1",
        startDate: "2024-01-01",
        duration: "16 weeks",
        title: "Cohort 1",
        about: "",
        fee: 1000,
        type: "online",
      },
    ];

    it("should fetch cohorts and update store", async () => {
      const { setCohorts, setLoading, setError } = mockStore();
      vi.spyOn(global, "fetch").mockResolvedValueOnce({
        ok: true,
        json: async () => ({ data: { items: mockCohorts } }),
      } as Response);

      await fetchCohortsByCourseId("course-1");

      expect(setLoading).toHaveBeenCalledWith(true);
      expect(fetch).toHaveBeenCalledWith(
        "http://localhost:3000/cohorts?courseId=course-1",
        expect.objectContaining({ method: "GET" }),
      );
      expect(setCohorts).toHaveBeenCalledWith(mockCohorts);
      expect(setError).toHaveBeenCalledWith(null);
      expect(setLoading).toHaveBeenCalledWith(false);
    });

    it("should handle API errors", async () => {
      const { setError } = mockStore();
      vi.spyOn(global, "fetch").mockResolvedValueOnce({
        ok: false,
        statusText: "Not Found",
      } as Response);

      await fetchCohortsByCourseId("course-1");

      expect(setError).toHaveBeenCalledWith("Error: Not Found");
    });

    it("should handle network errors", async () => {
      const { setError } = mockStore();
      vi.spyOn(global, "fetch").mockRejectedValueOnce(
        new Error("Network error"),
      );

      await fetchCohortsByCourseId("course-1");

      expect(setError).toHaveBeenCalledWith("Network error");
    });
  });

  describe("fetchUpcomingCohorts", () => {
    const mockResponse = {
      data: {
        items: [
          {
            id: "1",
            courseId: "course-1",
            startDate: "2024-02-01",
            duration: 8,
            fee: 1000,
            type: "online",
          },
        ],
        metadata: {
          total: "10",
          page: "1",
          limit: "1",
          totalPages: "10",
          hasNextPage: true,
          hasPreviousPage: false,
        },
      },
    };

    it("should fetch upcoming cohorts with pagination", async () => {
      const { setUpcomingCohorts, setPagination } = mockStore();
      vi.spyOn(global, "fetch").mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      } as Response);

      await fetchUpcomingCohorts(2, 1);

      expect(fetch).toHaveBeenCalledWith(
        "http://localhost:3000/courses?startDate=08-04-2025&endDate=&page=2&limit=1",
      );
      expect(setUpcomingCohorts).toHaveBeenCalledWith(mockResponse.data.items);
      expect(setPagination).toHaveBeenCalledWith({
        total: 10,
        page: 1,
        limit: 1,
        totalPages: 10,
        hasNextPage: true,
        hasPreviousPage: false,
      });
    });

    it("should handle pagination metadata conversion", async () => {
      const { setPagination } = mockStore();
      vi.spyOn(global, "fetch").mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      } as Response);

      await fetchUpcomingCohorts(1, 1);

      expect(setPagination).toHaveBeenCalledWith(
        expect.objectContaining({
          total: 10,
          page: 1,
          limit: 1,
        }),
      );
    });
  });
});
