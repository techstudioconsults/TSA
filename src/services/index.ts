import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { Course } from "./services.type";

type globalState = {
  allCourses: Course[];
  loading: boolean;
  error: string | null;
  activeCourse: Course | null;
  getAllCourses: () => Promise<void>;
  setActiveCourse: (course: Course) => void;
};

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"; // Fallback in case env is not set

const useGlobalStore = create<globalState>()(
  devtools((set) => ({
    allCourses: [],
    loading: true,
    error: null,
    activeCourse: null,
    // activeCourse: JSON.parse(localStorage.getItem("activeCourse") || "null"),

    getAllCourses: async () => {
      set({ loading: true, error: null });

      try {
        const response = await fetch(`${BASE_URL}/external/courses`, {
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

        set({
          allCourses: data.data,
          loading: false,
        });
      } catch (error: unknown) {
        if (error instanceof Error) {
          set({ error: error.message, loading: false });
        } else {
          set({ error: "An unknown error occurred", loading: false });
        }
      }
    },
    setActiveCourse: (course: Course) => {
      set({ activeCourse: course });
      // localStorage.setItem("activeCourse", JSON.stringify(course)); // Save to localStorage
    },
  })),
);

export default useGlobalStore;
