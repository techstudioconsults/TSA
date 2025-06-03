"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function SourceTracker() {
  const searchParameters = useSearchParams();

  useEffect(() => {
    const source = searchParameters.get("source");
    if (source) {
      localStorage.setItem("traffic_source", source);
    }
  }, [searchParameters]);

  return null;
}
