"use client";

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

import OscarIcon1 from "@/assets/oscar/oscar-icon1.png";
import OscarIcon2 from "@/assets/oscar/oscar-icon2.png";
import OscarIcon3 from "@/assets/oscar/oscar-icon3.png";
import OscarIcon4 from "@/assets/oscar/oscar-icon4.png";
import OscarIcon5 from "@/assets/oscar/oscar-icon5.png";
import OscarIcon6 from "@/assets/oscar/oscar-icon6.png";
import OscarIcon7 from "@/assets/oscar/oscar-icon7.png";
import OscarIcon8 from "@/assets/oscar/oscar-icon8.png";
import OscarIcon9 from "@/assets/oscar/oscar-icon9.png";
import OscarIcon10 from "@/assets/oscar/oscar-icon10.png";
import OscarIcon11 from "@/assets/oscar/oscar-icon11.png";
import OscarIcon12 from "@/assets/oscar/oscar-icon12.png";
import OscarIcon13 from "@/assets/oscar/oscar-icon13.png";
import OscarIcon14 from "@/assets/oscar/oscar-icon14.png";
import OscarIcon15 from "@/assets/oscar/oscar-icon15.png";
import OscarIcon16 from "@/assets/oscar/oscar-icon16.png";
import OscarIcon17 from "@/assets/oscar/oscar-icon17.png";

import { cn } from "@/lib";
import styles from "./styles.module.css";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { useRouter } from "next-nprogress-bar";
import { OSCAR_HACKTHON_EVENT_ID, ROUTER_PATH } from "@/constants";
import { useIsMobile } from "@/hooks/useIsMobile";
import TitleDesktopImage from "@/assets/oscar/title-desktop.png";
import TitleMobileImage from "@/assets/oscar/title-mobile.png";

const bannerList = [
  {
    cover: OscarImage1,
    icon: OscarIcon1,
    title: "NO POVERTY",
  },
  {
    cover: OscarImage2,
    icon: OscarIcon2,
    title: "Zero Hunger",
  },
  {
    cover: OscarImage3,
    icon: OscarIcon3,
    title: "Good Health And Well-Being",
  },
  {
    cover: OscarImage4,
    icon: OscarIcon4,
    title: "Quality Education",
  },
  {
    cover: OscarImage5,
    icon: OscarIcon5,
    title: "Gender Equality",
  },
  {
    cover: OscarImage6,
    icon: OscarIcon6,
    title: "Clean Water And Sanitation",
  },
  {
    cover: OscarImage7,
    icon: OscarIcon7,
    title: "Affordable And Clean Energy",
  },
  {
    cover: OscarImage8,
    icon: OscarIcon8,
    title: "Decent Work And Economic Growth",
  },
  {
    cover: OscarImage9,
    icon: OscarIcon9,
    title: "Industry And Infrastructure",
  },
  {
    cover: OscarImage10,
    icon: OscarIcon10,
    title: "Reduced Inequalities",
  },
  {
    cover: OscarImage11,
    icon: OscarIcon11,
    title: "Sustainable Cities And Communities",
  },
  {
    cover: OscarImage12,
    icon: OscarIcon12,
    title: "Responsible Consumption And Production",
  },
  {
    cover: OscarImage13,
    icon: OscarIcon13,
    title: "Climate Action",
  },
  {
    cover: OscarImage14,
    icon: OscarIcon14,
    title: "Life Below Water",
  },
  {
    cover: OscarImage15,
    icon: OscarIcon15,
    title: "Life On Land",
  },
  {
    cover: OscarImage16,
    icon: OscarIcon16,
    title: "Peace, Justice And Strong Institutions",
  },
  {
    cover: OscarImage17,
    icon: OscarIcon17,
    title: "Partnerships For The Goals",
  },
];

export function Banner() {
  return (
    <div className="flex flex-col md:flex-row -mt-20 -mb-9 md:mb-0 md:mx-auto overflow-hidden w-screen">
      <BannerImpl />
      <Ceremony />
    </div>
  );
}

function BannerImpl() {
  const router = useRouter();

  const isMobile = useIsMobile();

  return (
    <div className={cn("flex-none relative z-10", styles.banner)}>
      <div className="absolute left-0 top-0 w-full h-full">
        <Carousel
          opts={{
            loop: true,
            duration: 40,
            watchDrag: false,
            watchFocus: false,
            watchResize: false,
            watchSlides: false,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            {bannerList.map((banner) => (
              <CarouselItem
                key={banner.title}
                className="w-full h-[100vw] md:h-full pl-0"
              >
                <Image
                  className="w-full h-full object-cover"
                  src={banner.cover}
                  width={2240}
                  height={1496}
                  alt={banner.title}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div
        className={cn(
          "absolute left-0 top-0 w-full h-full",
          styles["banner-carousel"]
        )}
      />
      <div className="w-screen md:w-content md:max-w-full h-min z-10 text-center md:text-start absolute bottom-4 left-0 md:left-[50vw] md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 space-y-2 md:space-y-6">
        {isMobile ? (
          <Image
            className="w-auto mx-auto"
            src={TitleMobileImage}
            alt="BGA Oscar"
          />
        ) : (
          <Image className="w-auto" src={TitleDesktopImage} alt="BGA Oscar" />
        )}

        <p className="text-sm md:text-2xl font-bold px-4 md:px-0 text-[#b6b6be]">
          Sustainable Innovation Summit: <br className="hidden md:block" />
          The 17 SDGs Challenge
        </p>
        <div className="w-screen md:w-64 px-4 md:px-0">
          <div
            className={cn(
              "inline-flex justify-center items-center w-full font-bold cursor-pointer py-1 md:py-2 relative overflow-hidden",
              styles["banner-button"]
            )}
            onClick={() => {
              router.push(
                `${ROUTER_PATH.FORM.ORGANIZATION}/${OSCAR_HACKTHON_EVENT_ID}`
              );
            }}
          >
            Submit Your Project
          </div>
        </div>

        <Carousel
          opts={{
            loop: true,
            duration: 60,
            containScroll: false,
            watchDrag: false,
            watchFocus: false,
            watchResize: false,
            watchSlides: false,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
            Fade(),
          ]}
        >
          <CarouselContent>
            {bannerList.map((banner) => (
              <CarouselItem key={banner.title} className="w-full h-10">
                <p className="text-xs md:text-sm text-[#b6b6be] font-semibold flex justify-center md:justify-start items-center gap-2">
                  <Image
                    className="w-6 h-6 md:w-10 md:h-10"
                    src={banner.icon}
                    width={40}
                    height={40}
                    alt={banner.title}
                  />
                  {banner.title.toUpperCase()}
                </p>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

function Ceremony() {
  const isMobile = useIsMobile();
  const videoSrc = isMobile
    ? "https://api.moledao.io/assets/other/BGACeremonyBannerMobile.webm"
    : "https://api.moledao.io/assets/other/BGACeremonyBannerDesktop.webm";
  return (
    <div
      className={cn(
        "flex-none flex flex-col justify-center items-center h-40 md:h-auto relative -translate-y-9 md:translate-y-0 md:-translate-x-24",
        styles.ceremony
      )}
    >
      <div className="absolute inset-0 z-[-1]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/webm" />
        </video>
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-center mt-4 md:mt-0">
        The Chains of Change
      </h3>
      <p className="text-xs md:text-base">Stay Tuned</p>
    </div>
  );
}
