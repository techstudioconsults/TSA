import { Sheet, SheetContent, SheetTrigger } from "@strategic-dot/components";
import { motion, stagger, useAnimate } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";

import { cn } from "~/lib/utils";
import { NAV_LINKS } from "./links";

function MobileNav() {
  const [open, setOpen] = useState(false);
  // const [scope, animate] = useAnimate();

  // the stagger effect
  // const staggerList = useCallback(() => stagger(0.1, { startDelay: 0.25 }), []);

  // const handleAnimation = useCallback(() => {
  //   animate(
  //     "ul",
  //     {
  //       width: open ? 180 : 0,
  //       height: open ? 250 : 0,
  //       opacity: open ? 1 : 0,
  //     },
  //     {
  //       type: "spring",
  //       bounce: 0,
  //       duration: 0.4,
  //     },
  //   );
  //   animate(
  //     "li",
  //     open
  //       ? { opacity: 1, scale: 1, x: 0 }
  //       : { opacity: 0, scale: 0.3, x: -50 },
  //     {
  //       duration: 0.2,
  //       delay: open ? staggerList() : 0,
  //     },
  //   );
  // }, [animate, open, staggerList]);

  // useEffect(() => {
  //   handleAnimation();
  // }, [handleAnimation]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <motion.button
          id="menu-button"
          className={cn("flex flex-col justify-center gap-y-1")}
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.95 }}
          data-menu-open={open}
        >
          <Menu />
        </motion.button>
      </SheetTrigger>
      <SheetContent side="left">
        <ul
          className="absolute left-0 top-10 overflow-hidden bg-white/90 pl-8 pt-1 backdrop-blur-lg"
          data-menu-ul
        >
          {NAV_LINKS.map((link, index) => (
            <motion.li key={index}>
              <Link
                href={link.link}
                key={link.route}
                onClick={() => setOpen(false)}
                className={cn(
                  "hover:text-accent-color relative w-fit text-sm font-medium text-neutral-dark-1 transition-colors duration-300",
                )}
              >
                {link.route}
                <span
                  tabIndex={-1}
                  aria-hidden
                  className={cn(
                    "absolute -bottom-2 left-1/2 h-[2px] w-full -translate-x-1/2 translate-y-2 transform rounded-tl-lg rounded-tr-lg border-none bg-white opacity-0 outline-none transition-all duration-300 md:w-[120%]",
                  )}
                />
              </Link>
            </motion.li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}

export default React.memo(MobileNav);
