"use client";

import { useIsMobile } from "@/hooks";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import styles from "../home/styles.module.css";

export const OscarTitle = ({
  text,
  center,
}: {
  text: string;
  center?: boolean;
}) => {
  const mobile = useIsMobile();

  return (
    <h2
      id="agenda"
      className={`font-bold text-oscarActive font-['Inter'] text-[20px] md:text-[32px] ${
        center ? "text-center md:text-left" : "text-left"
      }`}
      style={{
        lineHeight: mobile ? "150%" : "41.6px",
        letterSpacing: "-1%",
      }}
    >
      {text}
    </h2>
  );
};

export const SummitInto = () => {
  const ref = useIntersectionObserver<HTMLDivElement>(styles.moveFromBottom);

  return (
    <div ref={ref} className="w-full md:w-content m-auto px-6 md:px-0">
      <OscarTitle
        text="Sustainable Innovation Summit: The 17 SDGs Challenge"
        center
      />
      <div
        className="text-[#b6b6be] font-normal font-['Inter'] text-sm md:text-[16px] text-center md:text-left mt-2"
        style={{ lineHeight: "24px" }}
      >
        In a world guided by the United Nations' 17 Sustainable Development
        Goals, we stand on the brink of a new era. Blockchain technology, with
        its transformative power, offers us the chance to tackle global
        challenges like never before. This hackathon is not just a
        competition—it's a journey where innovators from around the world unite
        to create solutions that could reshape our future. Join us as we explore
        the untapped potential of blockchain to drive sustainable change.
      </div>
    </div>
  );
};
