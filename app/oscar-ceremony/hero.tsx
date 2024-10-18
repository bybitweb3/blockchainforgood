"use client";

import { cn } from "@/lib";
import styles from "./index.module.css";
import Image from "next/image";
import HeroLeftFullImage from "@/assets/oscar-ceremony/hero-left-full1.png";
// import HeroRightFullImage from "@/assets/oscar-ceremony/hero-right-full1.png";
import { useState } from "react";

export function Hero() {
  const [isHover, setIsHover] = useState(false);

  const onHover = () => {
    setIsHover(true);
  };

  const onHoverOut = () => {
    setIsHover(false);
  };
  return (
    <div className="relative flex -mt-20 h-[40vw]">
      {/*left  */}
      <div
        className={cn(
          "flex flex-none relative z-10 transition-all duration-200",
          styles["hero-left"],
          isHover ? "w-[70%]" : "w-[30%]"
        )}
        onMouseEnter={onHover}
        onMouseLeave={onHoverOut}
      >
        <Image
          className={cn("w-full h-full object-left-top object-cover")}
          src={HeroLeftFullImage}
          alt="17 SDGS"
        />
        <div className="absolute z-10 top-1/2 left-40 -translate-y-1/2">
          <p className={cn("text-xl", styles["hero-description"])}>
            WEB3.0 Oscar
          </p>
          <p className={cn("text-4xl font-extrabold", styles["hero-title"])}>
            17 SDGS
          </p>
          <p className={cn("text-4xl font-extrabold", styles["hero-title"])}>
            Challenge
          </p>
        </div>
      </div>
      {/* right */}
      <div
        className={cn(
          "w-full -ml-32 relative transition-all duration-200",
          styles["hero-right"]
        )}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className={cn(
            "w-full h-full object-cover",
            isHover ? "object-left-top" : "object-right-bottom"
          )}
        >
          <source src="/hero-right-full.webm" type="video/webm" />
        </video>
        <div className="absolute top-1/2 left-32 -translate-y-1/2">
          <p
            className={cn(
              "text-4xl leading-snug font-extrabold",
              styles["hero-title"]
            )}
          >
            The Chains
          </p>
          <p
            className={cn(
              "text-4xl leading-snug font-extrabold",
              styles["hero-title"]
            )}
          >
            of Change
          </p>
          <div
            className={cn(
              "flex justify-between gap-8 text-sm leading-normal",
              styles["hero-description"]
            )}
          >
            <span>November 11th, 2024</span>
            <span>Bangkok, Thailand</span>
          </div>
          <div className="w-screen md:w-64 px-4 md:px-0 mt-14">
            <div
              className={cn(
                "inline-flex justify-center items-center w-full font-bold cursor-pointer py-1 md:py-2 relative overflow-hidden",
                styles["hero-button"]
              )}
            >
              REGISTER HERE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
