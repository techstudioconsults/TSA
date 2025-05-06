import Link from "next/link";
import { cloneElement, forwardRef, ReactElement } from "react";
import { LuLoader, LuPlus } from "react-icons/lu";

import { Button } from "~/components/ui/button";
import { TsaButtonProperties } from "~/types/index.types";

/**
 * CustomButton component to render a button with various styles and states.
 *
 * @param {ButtonProps} props - Properties to configure the button.
 * @returns {JSX.Element} The rendered button component.
 */
const TsaButton = forwardRef<HTMLButtonElement, TsaButtonProperties>(
  (
    {
      type = "button",
      variant,
      size = "xl",
      children,
      isLoading = false,
      isLeftIconVisible = false,
      isRightIconVisible = false,
      icon,
      isDisabled = false,
      isIconOnly = false,
      ariaLabel,
      href,
      className,
      onClick,
    },
    reference,
  ) => {
    const modifiedIcon = icon ? (
      cloneElement(
        icon as ReactElement,
        {
          className: "w-[1rem] h-[1rem] dark:invert dark:filter",
          "data-testid": "icon",
        } as React.HTMLAttributes<HTMLElement>,
      )
    ) : (
      <LuPlus className="h-[1rem] w-[1rem]" data-testid="icon" />
    );

    const buttonContent = (
      <>
        {isLeftIconVisible && !isLoading && modifiedIcon}
        {isLoading && <LuLoader className="h-[1rem] w-[1rem] animate-spin" data-testid="loading-spinner" />}
        {isIconOnly && !isLoading && modifiedIcon}
        {!isIconOnly && children}
        {!isIconOnly && !children && isLoading && "Loading"}
        {isRightIconVisible && !isLoading && modifiedIcon}
      </>
    );

    const buttonClasses = `transition-all duration-300 ease-in-out  ${
      isDisabled ? "opacity-50 cursor-not-allowed" : "hover:shadow-sneob dark:hover:shadow-sneobw focus:shadow-none"
    } ${className}`;

    if (href) {
      const isExternal = /^https?:\/\//.test(href);

      if (isExternal) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
            <Button
              type={type}
              variant={variant}
              size={size}
              disabled={isDisabled}
              aria-label={ariaLabel}
              className={buttonClasses}
              onClick={onClick}
              role="button"
              ref={reference}
            >
              {buttonContent}
            </Button>
          </a>
        );
      }

      return (
        <Link href={isDisabled ? "" : href} passHref aria-label={ariaLabel}>
          <Button
            variant={variant}
            size={size}
            disabled={isDisabled}
            aria-label={ariaLabel}
            className={buttonClasses}
            onClick={onClick}
            role="button"
            ref={reference}
          >
            {buttonContent}
          </Button>
        </Link>
      );
    }

    return (
      <Button
        variant={variant}
        size={size}
        disabled={isDisabled}
        aria-label={ariaLabel}
        className={buttonClasses}
        onClick={onClick}
        role="button"
        ref={reference}
      >
        {buttonContent}
      </Button>
    );
  },
);
TsaButton.displayName = "CustomButton"; // This is useful for debugging in React DevTools

export default TsaButton;
