"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@strategic-dot/components";
import clsx from "clsx";
import Link from "next/link";

// import { useRouter } from "next/router";

export const PaginationComp = () => {
  // const router = useRouter();
  const currentPage = 2; // Assuming the current page is 2, you can dynamically set this based on your app logic

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" size={undefined} />
        </PaginationItem>
        {[1, 2, 3, 4].map((page) => (
          <PaginationItem key={page}>
            <Link
              href={`/${page}`}
              className={clsx(
                "rounded px-2 py-1",
                currentPage === page
                  ? "bg-blue-900 text-white"
                  : "text-gray-500",
              )}
            >
              {page}
            </Link>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href="#" size={undefined} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
