"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@strategic-dot/components";
import clsx from "clsx";

import useFAQStore from "~/app/(landing-routes)/faq/services";

export const PaginationComp = () => {
  const { currentPage, totalPages, getFAQ } = useFAQStore();

  const handlePageChange = (page: number) => {
    getFAQ(page); // Fetch the FAQ data for the selected page
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          {currentPage > 1 && (
            <PaginationPrevious
              href="#"
              onClick={() => handlePageChange(currentPage - 1)}
              size={undefined}
            />
          )}
        </PaginationItem>

        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <PaginationItem key={page}>
              <a
                href="#"
                className={clsx(
                  "rounded px-2 py-1",
                  currentPage === page
                    ? "bg-blue-900 text-white"
                    : "text-gray-500",
                )}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </a>
            </PaginationItem>
          ),
        )}

        <PaginationItem>
          {currentPage < totalPages && (
            <PaginationNext
              href="#"
              onClick={() => handlePageChange(currentPage + 1)}
              size={undefined}
            />
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
