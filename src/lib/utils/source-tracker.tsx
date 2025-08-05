"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function SourceTracker() {
  const searchParameters = useSearchParams();

  useEffect(() => {
    const source = searchParameters.get("utm_source");

    if (source) {
      // Store the UTM source if present
      localStorage.setItem("traffic_source", source);
    } else {
      // Clear existing source if no UTM parameter exists
      localStorage.removeItem("traffic_source");
    }
  }, [searchParameters]);

  return null;
}
