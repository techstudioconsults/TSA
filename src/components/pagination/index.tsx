"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@strategic-dot/components";
import clsx from "clsx";

import useFAQStore from "~/app/(landing-routes)/faq/action";

export const PaginationComp = () => {
  const { currentPage, totalPages, getFAQ } = useFAQStore();

  const handlePageChange = (event: React.MouseEvent, page: number) => {
    event.preventDefault();
    getFAQ(page);
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          {currentPage > 1 && (
            <PaginationPrevious
              href="#"
              onClick={(event) => handlePageChange(event, currentPage - 1)}
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
                onClick={(event) => handlePageChange(event, page)}
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
              onClick={(event) => handlePageChange(event, currentPage + 1)}
              size={undefined}
            />
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
