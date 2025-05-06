import { cn } from "~/lib/utils";

function Skeleton({ className, ...properties }: React.ComponentProps<"div">) {
  return <div data-slot="skeleton" className={cn("animate-pulse rounded-md bg-accent", className)} {...properties} />;
}

export { Skeleton };
