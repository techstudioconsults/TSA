"use client";

import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { FC, forwardRef, useEffect, useState } from "react";

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import { cn } from "~/lib/utils";
import { TsaNavbarProperties } from "~/types/index.types";
import Logo from "../../atoms/logo";
import TsaButton from "../../atoms/tsa-button";
import { FullStackComingSoonBanner } from "./banner";
import { MobileNavbar } from "./mobile-nav";

export const TsaNavbar: FC<TsaNavbarProperties> = ({
  logopath = "",
  navLinks,
  children,
  bgScrollColor,
  linkClassName,
  className,
  showBanner = false,
}) => {
  const [scrolling, setIsScrolling] = useState<boolean>(false);
  const pathname = usePathname();

  const handleScrollEvent = () => {
    setIsScrolling(window.scrollY > 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  const isActiveLink = (link: string) => pathname === link;

  return (
    <section
      className={cn(
        scrolling ? `shadow-md ${bgScrollColor}` : "shadow-none",
        "fixed left-0 right-0 top-0 z-40",
        className,
      )}
    >
      {showBanner && <FullStackComingSoonBanner />}
      <nav>
        <div
          className={cn(
            "relative mx-auto flex w-full max-w-[1240px] items-center justify-between gap-x-4 px-4 transition-all duration-500 xl:px-0",
            "py-4 md:py-6",
          )}
        >
          <Logo logo={logopath} />
          <NavigationMenu className={cn("hidden w-full items-center justify-center gap-x-4 lg:flex lg:gap-x-6")}>
            {navLinks?.map((item, index) =>
              item?.dropdown ? (
                <DropdownMenu key={index}>
                  <DropdownMenuTrigger
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "flex gap-1",
                      "bg-transparent active:bg-transparent",
                      isActiveLink(item.link) ? "text-blue-500 underline" : "text-white hover:text-mid-danger",
                      linkClassName,
                    )}
                  >
                    <p>{item.route}</p>
                    <div className="mt-1">
                      <ChevronDown className="text-current" size={`.8rem`} />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <ul className={cn("grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]")}>
                      {item?.dropdown?.map((link) => (
                        <ListItem
                          key={link.title}
                          title={link.title}
                          href={link.href}
                          className={cn(isActiveLink(link.href) && "bg-gray-200 text-black")}
                        >
                          {link.description}
                        </ListItem>
                      ))}
                    </ul>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <NavigationMenuList key={index}>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href={item.link}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent text-sm",
                        isActiveLink(item.link) ? "text-blue-500 underline" : "text-white hover:text-mid-danger",
                        linkClassName,
                      )}
                    >
                      {item.route}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              ),
            )}
          </NavigationMenu>
          <div className={cn("hidden w-fit items-center justify-end gap-x-2 justify-self-end lg:flex lg:gap-x-4")}>
            {children ?? (
              <TsaButton href="/signin" variant="primary" className="h-[47px] w-[97px] rounded-lg bg-mid-blue">
                Sign In
              </TsaButton>
            )}
          </div>
          <section className="lg:hidden">
            <MobileNavbar linkClassName={linkClassName} navLinks={navLinks} logopath={logopath}>
              {children}
            </MobileNavbar>
          </section>
        </div>
      </nav>
    </section>
  );
};

export const ListItem = forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...properties }, reference) => {
    const pathname = usePathname(); // Get the current path
    const isActive = pathname === properties.href;

    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={reference}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
              isActive ? "bg-gray-200 text-black" : "hover:bg-accent hover:text-accent-foreground",
              className,
            )}
            {...properties}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = "ListItem";
