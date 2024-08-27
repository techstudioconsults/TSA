"use client";

import { TsaInput } from "@strategic-dot/components";
import React, { useEffect } from "react";

import { HeroCanvas } from "~/components/canvas/hero-canvas";
import useWindowWidth from "~/hooks/util-hooks/use-window-width";

function Home() {
  const canvaReference = React.useRef<HTMLCanvasElement>(null);
  const { winWidth } = useWindowWidth();

  useEffect(() => {
    setTimeout(() => {
      if (!canvaReference.current) return;
      HeroCanvas(canvaReference.current);
    }, 100);
  }, [winWidth]);
  return (
    <main>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed commodi
        rem quos animi quas itaque facilis laborum, maxime odit alias velit qui
        quibusdam doloribus omnis nam? Ab consequuntur beatae unde.
      </p>
      <div className="h-[50vh] w-full overflow-hidden bg-primary">
        <canvas
          ref={canvaReference}
          id="particles_404"
          className="h-[100%] w-full"
        />
      </div>
      <TsaInput type={`email`} placeholder={"type name here"} />
    </main>
  );
}
export default Home;
