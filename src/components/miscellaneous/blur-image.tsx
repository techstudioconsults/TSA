// "use client";

// import Image from "next/image";
// import { FC, useState, type ComponentProps } from "react";

// import { cn } from "~/lib/utils";

// interface BlurImageProperties extends ComponentProps<typeof Image> {
//   _width: number;
//   _height: number;
// }

// export const BlurImage: FC<BlurImageProperties> = ({
//   _width,
//   _height,
//   ...properties
// }) => {
//   const [isLoading, setLoading] = useState(true);

//   return (
//     <Image
//       {...properties}
//       style={{
//         width: properties.alt === `icon` ? `${_width}px` : `100%`,
//         // height: properties.alt === `icon` ? `auto` : `${_height}px`,
//         height: "auto",
//       }}
//       width={_width}
//       height={_height}
//       alt={properties.alt}
//       className={cn(
//         "duration-700 ease-in-out",
//         isLoading ? "scale-105 blur-lg" : "scale-100 blur-0",
//         properties.className,
//       )}
//       onLoad={() => {
//         setTimeout(() => {
//           setLoading(false);
//         }, 500);
//       }}
//     />
//   );
// };

"use client";

import Image from "next/image";
import { FC, useState, type ComponentProps } from "react";

import { cn } from "~/lib/utils";

interface BlurImageProperties extends ComponentProps<typeof Image> {
  _width?: number;
  _height?: number;
}

export const BlurImage: FC<BlurImageProperties> = ({
  _width = 300, // Default width
  _height = 200, // Default height
  className,
  alt,
  ...properties
}) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{
        paddingBottom: `${(_height / _width) * 100}%`, // Maintain aspect ratio
        maxWidth: "100%",
      }}
    >
      <Image
        {...properties}
        width={_width}
        height={_height}
        alt={alt || "image"}
        className={cn(
          "absolute inset-0 h-full w-full object-cover duration-700 ease-in-out",
          isLoading ? "blur-lg" : "blur-0",
        )}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};
