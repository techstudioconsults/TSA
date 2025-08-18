"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function SourceTracker() {
  const searchParameters = useSearchParams();

  useEffect(() => {
    const source = searchParameters.get("utm_source");

    if (source) {
      // Store the UTM source if present
      localStorage.setItem("utm_source", source);
    } else {
      // Clear existing source if no UTM parameter exists
      localStorage.removeItem("utm_source");
    }
  }, [searchParameters]);

  return null;
}
