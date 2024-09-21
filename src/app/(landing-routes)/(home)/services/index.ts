/* eslint-disable unicorn/no-null */
import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { ClassData } from "./services.types";

type HomePageState = {
  upcomingClasses: ClassData[];
  loading: boolean;
  error: string | null;
  getUpcomingClasses: () => Promise<void>;
};

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"; // Fallback in case env is not set

const useHomePageStore = create<HomePageState>()(
  devtools((set) => ({
    upcomingClasses: [],
    loading: true,
    error: null,

    getUpcomingClasses: async () => {
      set({ loading: true, error: null });

      try {
        const response = await fetch(`${BASE_URL}/external/classes`, {
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

        // Assuming the data contains an array of classes
        set({ upcomingClasses: data.data, loading: false });
      } catch (error: unknown) {
        // Narrow down the type of error
        if (error instanceof Error) {
          set({ error: error.message, loading: false });
        } else {
          set({ error: "An unknown error occurred", loading: false });
        }
      }
    },
  })),
);

export default useHomePageStore;
