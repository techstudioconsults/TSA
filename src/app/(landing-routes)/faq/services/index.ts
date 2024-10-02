/* eslint-disable unicorn/no-null */
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type FAQData = {
  id: number;
  question: string;
  answer: string;
  bullets?: string[];
};

type FAQState = {
  faq: FAQData[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  getFAQ: (page?: number) => Promise<void>;
};

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

const useFAQStore = create<FAQState>()(
  devtools((set) => ({
    faq: [],
    loading: false,
    error: null,
    currentPage: 1,
    totalPages: 1,

    getFAQ: async (page = 1) => {
      set({ loading: true, error: null });

      try {
        const response = await fetch(`${BASE_URL}/external/faq?page=${page}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-store", // Prevents caching
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();

        // Assuming the API returns pagination data: `pages` and `pageNumber`
        set({
          faq: data.data.data, // The actual FAQ data
          currentPage: data.data.pageNumber,
          totalPages: data.data.pages,
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
  })),
);

export default useFAQStore;
