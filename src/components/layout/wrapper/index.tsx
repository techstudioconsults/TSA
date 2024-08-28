import { FC, HtmlHTMLAttributes, ReactNode } from "react";

import { cn } from "~/lib/utils";

interface WrapperProps extends HtmlHTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
  children?: ReactNode;
}

export const Wrapper: FC<WrapperProps> = ({
  width = `max-w-[1240px]`,
  height = `h-full`,
  children,
  className,
  ...rest
}) => {
  return (
    <section
      {...rest}
      className={cn(`mx-auto ${width} ${height} px-[1rem] lg:px-0`, className)}
    >
      {children}
    </section>
  );
};
