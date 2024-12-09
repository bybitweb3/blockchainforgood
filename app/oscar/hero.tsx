"use client";

import { cn } from "@/lib";
import styles from "../oscar-ceremony/index.module.css";
import Image from "next/image";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import OscarImage1 from "@/assets/oscar/oscar1.png";
import OscarImage2 from "@/assets/oscar/oscar2.png";
import OscarImage3 from "@/assets/oscar/oscar3.png";
import OscarImage4 from "@/assets/oscar/oscar4.png";
import OscarImage5 from "@/assets/oscar/oscar5.png";
import OscarImage6 from "@/assets/oscar/oscar6.png";
import OscarImage7 from "@/assets/oscar/oscar7.png";
import OscarImage8 from "@/assets/oscar/oscar8.png";
import OscarImage9 from "@/assets/oscar/oscar9.png";
import OscarImage10 from "@/assets/oscar/oscar10.png";
import OscarImage11 from "@/assets/oscar/oscar11.png";
import OscarImage12 from "@/assets/oscar/oscar12.png";
import OscarImage13 from "@/assets/oscar/oscar13.png";
import OscarImage14 from "@/assets/oscar/oscar14.png";
import OscarImage15 from "@/assets/oscar/oscar15.png";
import OscarImage16 from "@/assets/oscar/oscar16.png";
import OscarImage17 from "@/assets/oscar/oscar17.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import GlobeStaticImage from "@/assets/oscar/BGA Oscar Globe Only.png";
import Link from "next/link";
import {
  OSCAR_EVENT_ID,
  OSCAR_HACKTHON_EVENT_ID,
  ROUTER_PATH,
} from "@/constants";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useIsSafari } from "@/hooks/useIsSafari";

const bannerList = [
  {
    cover: OscarImage1,
    title: "NO POVERTY",
  },
  {
    cover: OscarImage2,
    title: "Zero Hunger",
  },
  {
    cover: OscarImage3,
    title: "Good Health And Well-Being",
  },
  {
    cover: OscarImage4,
    title: "Quality Education",
  },
  {
    cover: OscarImage5,
    title: "Gender Equality",
  },
  {
    cover: OscarImage6,
    title: "Clean Water And Sanitation",
  },
  {
    cover: OscarImage7,
    title: "Affordable And Clean Energy",
  },
  {
    cover: OscarImage8,
    title: "Decent Work And Economic Growth",
  },
  {
    cover: OscarImage9,
    title: "Industry And Infrastructure",
  },
  {
    cover: OscarImage10,
    title: "Reduced Inequalities",
  },
  {
    cover: OscarImage11,
    title: "Sustainable Cities And Communities",
  },
  {
    cover: OscarImage12,
    title: "Responsible Consumption And Production",
  },
  {
    cover: OscarImage13,
    title: "Climate Action",
  },
  {
    cover: OscarImage14,
    title: "Life Below Water",
  },
  {
    cover: OscarImage15,
    title: "Life On Land",
  },
  {
    cover: OscarImage16,
    title: "Peace, Justice And Strong Institutions",
  },
  {
    cover: OscarImage17,
    title: "Partnerships For The Goals",
  },
];

export function Hero({
  onChange,
}: {
  onChange: Dispatch<SetStateAction<boolean>>;
}) {
  const [isHover, setIsHover] = useState(true);

  const videoRef = useRef<HTMLVideoElement>();

  const onHoverLeft = () => {
    setIsHover(true);
    onChange(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const onHoverRight = () => {
    setIsHover(false);
    onChange(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const isMobile = useIsMobile();
  const isSafari = useIsSafari();

  const hiddenGlobe = isMobile || isSafari;
  return (
    <div
      className="relative flex flex-col md:flex-row -mt-20"
      style={{
        height: "calc(100vh - 80px)",
      }}
    >
      {/*left  */}
      <div
        className={cn(
          "flex flex-none w-full md:h-full relative z-10 transition-all duration-200",
          styles["hero-left"],
          isHover ? "md:w-[70%] h-[80%]" : "md:w-[40%] h-[40%]"
        )}
        onMouseEnter={onHoverLeft}
        onClick={onHoverLeft}
      >
        <div className="w-full h-full">
          <Carousel
            opts={{
              loop: true,
              duration: 60,
              containScroll: false,
              watchDrag: false,
              watchFocus: false,
              watchResize: true,
              watchSlides: false,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="h-full"
          >
            <CarouselContent className="h-full">
              {bannerList.map((banner) => (
                <CarouselItem key={banner.title} className="w-full h-full pl-0">
                  <Image
                    className="w-full h-full object-center md:object-left-top object-cover"
                    src={banner.cover}
                    width={2240}
                    height={1496}
                    alt={banner.title}
                    priority
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div
          className={cn(
            "absolute z-10 w-full md:w-auto bottom-48 md:bottom-1/2 translate-y-1/2 transition-all duration-200",
            isHover ? "md:left-32" : "md:right-64 opacity-80"
          )}
        >
          <div
            className={cn(
              "flex justify-center gap-1 md:block font-extrabold",
              isHover ? "text-[32px] md:text-5xl" : "text-base md:text-4xl"
            )}
          >
            <p className={cn(styles["hero-title"])}>17 SDGs</p>
            <p className={cn("leading-tight", styles["hero-title"])}>
              Challenge
            </p>
          </div>
          <p
            className={cn(
              "md:text-xl text-center md:text-left",
              styles["hero-description"],
              isHover ? "text-sm" : "text-xs"
            )}
          >
            Sustainable Innovation Summit
          </p>
          <div
            className={cn(
              "w-full px-8 md:px-0 md:mt-14",
              isHover && "mt-4",
              !isHover && "hidden md:block"
            )}
          >
            <Link
              target="__blank"
              href={`${ROUTER_PATH.FORM.PERSON}/${OSCAR_HACKTHON_EVENT_ID}`}
            >
              <div
                className={cn(
                  "inline-flex justify-center items-center w-full font-bold cursor-pointer py-1 md:py-2 relative overflow-hidden",
                  styles["hero-button"]
                )}
              >
                REGISTER HERE
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* right */}
      <div
        className={cn(
          "w-full h-full -mt-32 md:mt-0 md:-ml-64 relative transition-all duration-200"
        )}
        onMouseEnter={onHoverRight}
        onClick={onHoverRight}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className={cn(
            "w-full h-full object-cover",
            isHover
              ? "object-right-bottom md:object-left-top"
              : "object-left-top md:object-right-bottom"
          )}
          preload="auto"
        >
          <source
            src="https://api.moledao.io/assets/other/BGA Ceremony Animation-Background blur.webm"
            type="video/webm"
          />
        </video>

        <div
          className={cn(
            "absolute z-10 top-0 left-1/2 md:left-0 md:top-1/2 -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 transition-all duration-200",
            isHover
              ? "w-32 h-32 md:w-64 md:h-64"
              : "-top-4 w-64 h-64 md:w-96 md:h-96"
          )}
        >
          {hiddenGlobe && <Image src={GlobeStaticImage} alt="globe" />}
          {!hiddenGlobe && (
            <video
              ref={videoRef}
              loop
              muted
              playsInline
              className={cn(
                "absolute z-10 top-0 left-1/2 md:left-0 md:top-1/2 -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 transition-all duration-200",
                isHover
                  ? "w-32 h-32 md:w-64 md:h-64"
                  : "-top-4 w-64 h-64 md:w-96 md:h-96"
              )}
              preload="auto"
              poster={GlobeStaticImage.src}
            >
              <source
                src="https://api.moledao.io/assets/other/BGA-Oscar-Static-Globe-Text-Animated.webm"
                type="video/webm"
              />
            </video>
          )}
        </div>

        <div
          className={cn(
            "absolute right-0 bottom-1/3 md:bottom-1/2  md:translate-y-1/2 text-right",
            isHover
              ? "w-full md:w-auto md:right-10 opacity-70"
              : "w-auto md:right-64"
          )}
        >
          <div
            className={cn(
              "w-full flex gap-1 justify-center md:block font-extrabold",
              isHover ? "text-base md:text-4xl" : "text-3xl md:text-5xl"
            )}
          >
            <p className={cn("leading-tight", styles["hero-title"])}>
              The Chains
            </p>
            <p className={cn("leading-tight", styles["hero-title"])}>
              of Change
            </p>
          </div>

          <div
            className={cn(
              "flex justify-center md:justify-between md:text-sm mt-2 leading-none divide-x divide-oscarActive",
              styles["hero-description"],
              isHover && "text-xs"
            )}
          >
            <span className="px-2 leading-none">November 11th, 2024</span>
            <span className="px-2 leading-none">Bangkok, Thailand</span>
          </div>
          <div
            className={cn(
              "w-screen md:w-full px-4 md:px-0 md:mt-14",
              isHover && "hidden md:block",
              !isHover && "mt-4"
            )}
          >
            <Link
              target="__blank"
              href={`${ROUTER_PATH.FORM.PERSON}/${OSCAR_EVENT_ID}`}
            >
              <div
                className={cn(
                  "inline-flex justify-center items-center w-full font-bold cursor-pointer py-1 md:py-2 relative overflow-hidden",
                  styles["hero-button"]
                )}
              >
                REGISTER HERE
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
