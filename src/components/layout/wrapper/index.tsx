import { ReactNode } from "react";

import { cn } from "~/lib/utils";

export const Wrapper = ({
  width = `max-w-[1240px]`,
  height = `h-full`,
  children,
}: {
  width?: string;
  height?: string;
  children?: ReactNode;
}) => {
  return (
    <section className={cn(`mx-auto ${width} ${height} p-[1rem] lg:p-0`)}>
      {children}
    </section>
  );
};
