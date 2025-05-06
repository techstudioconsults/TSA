"use client";

import Autoplay from "embla-carousel-autoplay";
import { CircleX } from "lucide-react";
import Image from "next/image";
import { FC, useCallback, useEffect, useRef, useState } from "react";

import { Card, CardContent } from "~/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { Dialog, DialogClose, DialogContent } from "~/components/ui/dialog";
import { TsaCarouselProperties } from "~/types/index.types";
import TsaButton from "../../atoms/tsa-button";
import { Thumb } from "./embla-thumbs";

export const TsaCarousel: FC<TsaCarouselProperties> = ({
  courseContent,
  galleryContent,
  facilityContent,
  showIndicator = false,
  bgColor = "primary",
  variant = "course",
  stopZoom = false,
  itemsPerView = 3,
  facilityCaroselFlatMaxWidth = "1240px",
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi | null>(null);
  const thumbsContainerReference = useRef<HTMLDivElement>(null);
  const [selectedItem, setSelectedItem] = useState("");
  const [visibleItems, setVisibleItems] = useState(1);

  const handleThumbClick = useCallback(
    (index: number) => {
      if (api) {
        api.scrollTo(index);
        setActiveIndex(index);
      }
    },
    [api],
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateVisibleItems = () => {
        if (window.innerWidth >= 1024) {
          setVisibleItems(itemsPerView);
        } else if (window.innerWidth >= 768) {
          setVisibleItems(Math.min(2, itemsPerView));
        } else {
          setVisibleItems(Math.min(1, itemsPerView));
        }
      };

      updateVisibleItems();
      window.addEventListener("resize", updateVisibleItems);
      return () => window.removeEventListener("resize", updateVisibleItems);
    }
  }, [itemsPerView]);

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  // useEffect(() => {
  //   const activeThumb = thumbsContainerReference.current?.children[activeIndex] as HTMLElement;
  //   if (activeThumb) {
  //     activeThumb.scrollIntoView({
  //       behavior: "smooth",
  //       block: "nearest",
  //       inline: "center",
  //     });
  //   }
  // }, [activeIndex]);

  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  if (variant === "facility") {
    const carouselHeight = stopZoom ? "480px" : "350px";
    const carouselWidth = stopZoom ? "372px" : "100%";

    return (
      <>
        <Carousel
          plugins={[plugin.current]}
          className={`w-full max-w-[${facilityCaroselFlatMaxWidth}] mx-auto`}
          setApi={setApi}
        >
          <CarouselContent>
            {facilityContent?.map((item, index) => {
              const isCenterItem =
                index === Math.floor(activeIndex - (visibleItems / 2 - 0.5)) ||
                index === Math.floor(activeIndex + (visibleItems / 2 - 0.5));

              return (
                <CarouselItem
                  key={index}
                  className={`md:basis-1/2 ${
                    stopZoom ? "lg:basis-1/4" : "lg:basis-1/3"
                  } transition-transform duration-300 ${isCenterItem && !stopZoom ? "scale-100" : "scale-90"}`}
                  onClick={() => setSelectedItem(item)}
                >
                  <Card style={{ width: carouselWidth, height: carouselHeight }}>
                    <CardContent className="flex items-center justify-center overflow-hidden rounded-[8px] p-0">
                      <Image
                        src={item}
                        alt={`carousel-image-${index}`}
                        layout="fill"
                        objectFit="cover"
                        className="w-[100%] rounded-[8px]"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          {/* Custom Indicator */}
          <div className={`mt-[47px] flex justify-center ${stopZoom ? "hidden" : "flex"}`}>
            {facilityContent?.map((_, index) => (
              <div
                key={index}
                className={`mx-[3px] h-[10px] w-[10px] rounded-full ${
                  index === activeIndex ? "scale-125 bg-blue-500" : "bg-blue-200"
                } transition-all duration-300`}
              />
            ))}
          </div>
        </Carousel>

        {/* Modal for displaying the selected item */}
        {selectedItem && (
          <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem("")}>
            <DialogContent className="bg-transparent sm:max-w-[900px]">
              <DialogClose className="absolute right-2 top-2">
                <CircleX size={24} className="border border-white text-white" />
              </DialogClose>
              {selectedItem && (
                <Image
                  src={selectedItem}
                  alt="Selected Carousel Item"
                  layout="responsive"
                  width={500}
                  height={350}
                  className="rounded"
                />
              )}
            </DialogContent>
          </Dialog>
        )}
      </>
    );
  }

  if (variant === "gallery") {
    return (
      <div>
        <Carousel plugins={[plugin.current]} className="relative mx-auto max-w-[892px]">
          <CarouselContent>
            {galleryContent?.map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="overflow-hidden rounded-[30px]">
                    <CardContent className="max-w-[892px] p-0 lg:h-[664px]">{_}</CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <Image
            className="absolute left-[12rem] top-[10rem] z-10 hidden scale-[200%] lg:block"
            width={525}
            height={100}
            src="/images/Polygon.png"
            alt="line"
          />
        </Carousel>
      </div>
    );
  }

  return (
    <Carousel plugins={[plugin.current]} className="mx-auto w-full max-w-[655px]" setApi={setApi}>
      <CarouselContent className="h-[270px]">
        {courseContent?.map((content, index) => (
          <CarouselItem className="h-full" key={index}>
            <div className="h-full overflow-hidden rounded-t-[1rem] p-1">
              <Card className="relative h-full overflow-hidden rounded-t-[1rem]">
                <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-[23px] bg-gray-900 bg-opacity-70 p-2">
                  <p className="text-center text-4xl font-[700] text-white">{content.name}</p>
                  <TsaButton href={content.link} className="w-[160px] border-mid-blue bg-background text-mid-blue">
                    View Course
                  </TsaButton>
                </div>
                <Image width={200} height={200} src={content.image} alt="logo" className="h-full w-full object-cover" />
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {showIndicator && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}

      <section
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        className={`mx-[4px] overflow-auto rounded-b-[1rem] border p-[10px] bg-${bgColor}`}
        ref={thumbsContainerReference}
      >
        <div className="flex w-fit justify-between gap-[10px]">
          {courseContent?.map((content, index) => (
            <Thumb
              key={index}
              index={content.image}
              title={content.name}
              selected={index === activeIndex}
              onClick={() => handleThumbClick(index)}
            />
          ))}
        </div>
      </section>
    </Carousel>
  );
};
