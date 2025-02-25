"use client";

import homeStyles from "@/app/home/styles.module.css";

export function Spotlight() {
  const ref = useIntersectionObserver<HTMLDivElement>(
    homeStyles.moveFromBottom
  );
  return (
    <div ref={ref}>
      <h3 className="text-oscarActive text-3xl font-semibold pb-10 text-center">
        Live spotlight
      </h3>
      <Videos />
    </div>
  );
}

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React, { useCallback } from "react";
import { HTMLAttributes, useEffect, useRef, useState } from "react";
import { CustomVideoPlayer, IVideo } from "@/components/Video";
import playicon from "@/assets/play.svg";
import solana from "@/assets/video/solana.jpeg";
import posterHelen from "@/assets/video/Helen.jpg";
import posterJaden from "@/assets/video/Jaden.webp";
import posterJennifer from "@/assets/video/Jennifer.webp";
import posterMax from "@/assets/video/Max.webp";
import posterSaed from "@/assets/video/Saed.webp";
import posterKaskyrbek from "@/assets/video/Kaskyrbek.webp";
import posterJasonDou from "@/assets/video/JasonDou.jpeg";
import posterBGA from "@/assets/video/BGA.jpg";
import Image, { StaticImageData } from "next/image";
import { useIsMobile } from "@/hooks";
import { DialogsWithFooterAndTitle } from "@/components/Dialog";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const videos: IVideo[] = [
  {
    src: "/video/BGA3.webm",
    srcmb: "/video/BGA3.mp4",
    poster: posterBGA,
    format: "video/webm",
  },
  {
    src: "/video/7_Helen_COO_of_Bybit.mp4",
    from: "COO of Bybit",
    name: "Helen",
    poster: posterHelen,
  },
  {
    src: "/video/1_Aidana_Kaskyrbek_Founder_of_Hayya_Venture_Studio.webm",
    srcmb: "/video/1_Aidana_Kaskyrbek_Founder_of_Hayya_Venture_Studio.mp4",
    from: "Founder of Hayya Venture Studio",
    name: "Aidana Kaskyrbek",
    poster: posterKaskyrbek,
    format: "video/webm",
  },
  {
    src: "/video/1_Jason_Dou_Harvard_Blockchain_Club.mp4",
    from: "Harvard Blockchain",
    name: "Jason Dou",
    poster: posterJasonDou,
  },
  {
    src: "/video/3_Jennifer_Co_founder_of_XueDAO.mp4",
    from: "Co-founder of XueDAO",
    name: "Jennifer",
    poster: posterJennifer,
  },
  // {
  //   src: "/video/2_YH.mp4",
  //   from: "Web3 Lead of Moledao",
  //   name: "YH",
  //   poster: posterYH,
  // },
  {
    src: "/video/5_Saed_Co_founder_of_ICPHub_UAE.mp4",
    from: "Co-founder of ICP.Hub UAE",
    name: "Saed",
    poster: posterSaed,
  },
  {
    src: "/video/6_Max_Ward_CEO_of_Libera.mp4",
    from: "CEO of Libera",
    name: "Max",
    poster: posterMax,
  },
  {
    src: "/video/4_Jaden_Co_founder_of_Coineasy.mp4",
    from: "Co-founder of Coineasy",
    name: "Jaden",
    poster: posterJaden,
  },
  {
    src: "/video/8_solana_lilyliu.mp4",
    srcmb: "/video/8_solana_lilyliu.webm",
    from: "President at Solana foundation",
    name: "Lily Liu",
    poster: solana,
    format: "video/webm",
  },
];

const VideoItem = ({
  project,
  onItemChange,
  active,
  index,
  ...props
}: {
  project: {
    logo: StaticImageData;
    video?: IVideo;
    link?: string;
    name: string;
  };
  index: number;
  active: number | null;
  onItemChange: (isOpen: boolean) => void;
} & HTMLAttributes<HTMLImageElement>) => {
  const { logo, video, link, name } = project;
  const [isOpen, setIsOpen] = useState(false);
  const mobile = useIsMobile();
  const w = 720;

  useEffect(() => {
    if (index === active) {
      setIsOpen(true);
    }
  }, [index, active]);

  const click = useCallback(() => {
    if (video) {
      setIsOpen(true);
      onItemChange(true);
    } else {
      window.open(link, "_blank");
    }
  }, []);

  return (
    <>
      <div
        className="relative cursor-pointer"
        style={{ width: 240, height: 135 }}
        data-click2={click}
        onClick={click}
      >
        <div className="absolute top-0 left-0 right-0 z-20 pt-3 px-4 text-white">
          <div className="font-bold font-['Inter']">{video?.name}</div>
          <div className="text-xs">{video?.from}</div>
        </div>
        <Image
          {...props}
          src={logo}
          alt=""
          className={`absolute w-[240px] h-[135px] cursor-pointer ${props?.className}`}
        />
        <div
          className={`absolute w-full h-full z-10 top-0 bg-video flex justify-center items-center`}
        >
          <Image
            src={playicon}
            alt=""
            className="w-10 h-10 cursor-pointer z-[100000]"
          />
        </div>
      </div>
      <DialogsWithFooterAndTitle
        open={isOpen}
        setOpen={() => {
          setIsOpen(false);
        }}
        css={{
          height: video?.width ? (video?.width / 9) * 18 : "auto",
          background: "rgba(0,0,0,0.6)",
          borderRadius: mobile ? 10 : 20,
          padding: mobile ? "8px 10px 0px 10px" : "16px 40px 20px 40px",
          border: `${mobile ? "2px" : "4px"} solid rgba(225,225,225,0.4)`,
        }}
        width={w + 300}
        close={() => {
          setIsOpen(false);
          onItemChange(false);
        }}
      >
        <CustomVideoPlayer
          src={video?.src}
          poster={video?.poster}
          width={video?.width}
          name={name}
          style={{
            width: mobile ? "88vw" : w,
            height: mobile ? `${(88 / 16) * 9}vw` : (w / 16) * 9,
            margin: "-10px auto 20px auto",
          }}
        ></CustomVideoPlayer>
      </DialogsWithFooterAndTitle>
    </>
  );
};

const Videos = () => {
  const [isOpen, setSetIsOpen] = useState<boolean>(false);
  const [active, setActive] = useState(null);

  return (
    <div className="h-[135px] flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards direction="left" speed="slow" isPause={isOpen}>
        {videos.map((video, index) => {
          const { poster, name } = video;
          return (
            <VideoItem
              key={index}
              index={index}
              active={active}
              project={{ video, logo: poster, name }}
              onItemChange={(isOpen) => {
                setSetIsOpen(isOpen);
                setActive(index);
              }}
            />
          );
        })}
      </InfiniteMovingCards>
    </div>
  );
};
