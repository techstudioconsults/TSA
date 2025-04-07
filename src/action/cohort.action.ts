import useCohortStore from "~/stores/cohort.store";

// import { Cohort } from "./services.type";

/* eslint-disable unicorn/no-null */
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

// Format date as DD-MM-YYYY
const formatDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

export const fetchCohortsByCourseId = async (courseId: string) => {
  const { setCohorts, setLoading, setError } = useCohortStore.getState();

  setLoading(true);
  setError(null);
  try {
    const response = await fetch(`${BASE_URL}/cohorts?courseId=${courseId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    setCohorts(data.data.items);
  } catch (error: unknown) {
    if (error instanceof Error) {
      setError(error.message);
    } else {
      setError("An unknown error occurred");
    }
  } finally {
    setLoading(false);
  }
};

export const fetchUpcomingCohorts = async (
  page: number = 1,
  limit: number = 1,
) => {
  const { setUpcomingCohorts, setLoading, setError, setPagination } =
    useCohortStore.getState();

  setLoading(true);
  setError(null);
  try {
    const today = new Date();
    const startDate = formatDate(today);
    const response = await fetch(
      `${BASE_URL}/courses?startDate=${startDate}&endDate=&page=${page}&limit=${limit}`,
    );

    if (!response.ok) throw new Error(`Error: ${response.statusText}`);
    const { data } = await response.json();
    const pagination = {
      total: Number(data.metadata.total),
      page: Number(data.metadata.page),
      limit: Number(data.metadata.limit),
      totalPages: Number(data.metadata.totalPages),
      hasNextPage: data.metadata.hasNextPage,
      hasPreviousPage: data.metadata.hasPreviousPage,
    };
    setUpcomingCohorts(data.items);
    setPagination(pagination);
  } catch (error) {
    setError(error instanceof Error ? error.message : "Unknown error");
  } finally {
    setLoading(false);
  }
};
