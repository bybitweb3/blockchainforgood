"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import homeStyles from "../home/styles.module.css";
import { cn } from "@/lib";
import styles from "./styles.module.css";
import HemereImage from "@/assets/oscar/herera-logo.png";
import PingoImage from "@/assets/oscar/PinGo.png";
import SendingLabsImage from "@/assets/oscar/Sending Labs.png";
import Image from "next/image";
import AttGlobalImage from "@/assets/oscar/ATT Global.png";

const list = [
  {
    name: "Hemera",
    link: "https://www.thehemera.com/",
    image: HemereImage,
    style: { filter: "grayscale(1)", height: "4rem" },
  },
  {
    name: "Sending Labs",
    link: "",
    image: SendingLabsImage,
  },
  {
    name: "PinGo",
    link: "",
    image: PingoImage,
  },
  {
    name: "",
    // type: 4,
    image: AttGlobalImage,
    link: "http://attglobal.io/",
    // partnersType: 5,
    // style: '{"height":"34px"}',
    // mobileStyle: '{"height":"20px"}',
  },
];

export const Sponsors = () => {
  const ref = useIntersectionObserver<HTMLDivElement>(
    homeStyles.moveFromBottom
  );
  return (
    <div
      id="partner"
      className="hash-section w-full md:w-content mx-auto mb-2 md:mb-8"
      ref={ref}
    >
      <div className="text-center">
        <h2
          className={cn(
            styles["award-title"],
            "font-bold text-oscarActive font-['Inter'] inline-block mx-auto text-[20px] md:text-[32px] text-center md:mb-4"
          )}
        >
          Sponsors
        </h2>
      </div>
      <div
        className={`my-2 md:my-8 grid grid-cols-1 md:grid-cols-4 gap-2 relative`}
      >
        {list.map((item, index) => (
          <a
            target={item.link ? "_blank" : "_self"}
            href={item.link || undefined}
            className={cn(
              "flex justify-center border border-white/10 px-5 py-8"
            )}
          >
            <div
              className="text-description mr-4 md:mr-8 flex items-center gap-2 font-['Inter'] text-sm md:text-base"
              key={item.name}
            >
              <Image
                src={item.image}
                alt={item.name}
                className="h-12 w-auto object-contain"
                style={item.style}
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
