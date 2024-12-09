"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import BGAIconGreen from "@/assets/BGA Icon Green.png";
import Image from "next/image";
import CountUp from "react-countup";
import { useAPIGetList } from "./api";
import { IMAGE_URL } from "@/constants";
import { Skeleton } from "@/components/ui/skeleton";
import { useIsMobile } from "@/hooks";
import { CustomVideoPlayer, IVideo } from "@/components/Video";
import { DialogsWithFooterAndTitle } from "@/components/Dialog";
import playicon from "@/assets/play.svg";
import { HTMLAttributes, useCallback, useEffect, useState } from "react";
import HackathonVideo from "@/assets/hackathon-video.png";
import { cn } from "@/lib";

function VideoCard() {
  return (
    <div className="row-span-3 md:row-span-1 min-h-40 hover:shadow-lg rounded-none">
      <VideoItem
        className="w-full h-full overflow-hidden"
        project={{
          video: {
            src: "https://api.moledao.io/assets/other/bgahackathon.mp4",
            poster: HackathonVideo,
            width: 1920,
            name: "BGA Hackathon",
            format: "video/mp4",
          },
          name: "BGA Hackathon",
        }}
      />
    </div>
  );
}

const VideoItem = ({
  project,
  className,
  ...props
}: {
  project: {
    video?: IVideo;
    link?: string;
    name: string;
  };
} & HTMLAttributes<HTMLImageElement>) => {
  const { video, link, name } = project;
  const { poster } = video;
  const [isOpen, setIsOpen] = useState(false);
  const mobile = useIsMobile();
  const w = 720;

  const click = useCallback(() => {
    if (video) {
      setIsOpen(true);
    } else {
      window.open(link, "_blank");
    }
  }, []);

  return (
    <>
      <div
        className={cn("relative cursor-pointer", className)}
        data-click2={click}
        onClick={click}
        {...props}
      >
        <Image
          {...props}
          src={poster}
          alt=""
          className={`absolute cursor-pointer w-full object-cover`}
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
          background: "rgba(0,0,0,0.6)",
          borderRadius: mobile ? 10 : 20,
          padding: mobile ? "8px 10px 0px 10px" : "16px 40px 20px 40px",
          border: `${mobile ? "2px" : "4px"} solid rgba(225,225,225,0.4)`,
        }}
        width={w + 300}
        close={() => {
          setIsOpen(false);
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

const BG_LINEAR_GRADIENT =
  "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)";

const KeyDataList = [
  {
    label: "BGA Hackathon",
    value: 40,
  },
  {
    label: "BGA Tracks",
    value: 12,
  },
  { label: "BGA Hackathon projects", value: 70 },
];
function KeyData() {
  const isMobile = useIsMobile();
  return (
    <>
      {KeyDataList.map((item) => (
        <Card
          style={{
            background: isMobile ? "white" : BG_LINEAR_GRADIENT,
          }}
          key={item.label}
          className="row-span-2 md:row-span-1 flex flex-col justify-end hover:shadow-lg rounded-none"
        >
          <CardContent className="pt-6">
            <CardTitle className="text-5xl font-black">
              <CountUp start={1} end={item.value} /> +
            </CardTitle>
            <p className="text-xl font-semibold"> {item.label}</p>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

function Collaborate() {
  return (
    <Card
      className="row-span-2 text-white hidden md:block rounded-none hover:shadow-lg"
      style={{
        background:
          "linear-gradient(52.16deg, #02CCB7 19.41%, #47E6D6 74.15%, #8DF7EC 97.6%)",
      }}
    >
      <CardContent className="h-full pt-6">
        <div className="text-[40px] leading-[44px] flex flex-col justify-between font-extrabold h-full">
          <div>
            <p>Collaborate</p>
            <p>with</p>
            <p>BGA</p>
          </div>
          <Image
            className="flex-shrink-0 flex-grow-0 w-24 h-24"
            src={BGAIconGreen}
            alt="BGA Icon Green"
            width={107}
            height={107}
          />
        </div>
      </CardContent>
    </Card>
  );
}

function Nations() {
  const isMobile = useIsMobile();

  return (
    <Card
      style={{
        background: isMobile ? "white" : BG_LINEAR_GRADIENT,
      }}
      className="row-span-2 flex flex-col justify-end hover:shadow-lg rounded-none"
    >
      <CardContent className="pt-6">
        <CardTitle className="text-5xl font-black">
          <CountUp start={1} end={6} />
        </CardTitle>
        <p className="text-2xl font-semibold">Illuminated Nations</p>
      </CardContent>
    </Card>
  );
}

function LatestHackathon() {
  const {
    data: { list } = {
      total: 0,
      list: [],
    },
    error,
    isLoading,
  } = useAPIGetList();
  if (isLoading || list.length === 0) {
    return <Skeleton className="xs:col-span-2 row-span-3 md:row-span-2" />;
  }
  const latestHackathon = list[0];
  return (
    <Card className="xs:col-span-2 row-span-3 md:row-span-2 rounded-none hover:shadow-lg">
      <img
        src={`${IMAGE_URL}${latestHackathon.cover}`}
        alt={latestHackathon.name}
        className="w-full aspect-video object-cover"
      />
    </Card>
  );
}

export function Focus() {
  return (
    <div className="w-full md:w-content mx-auto space-y-6 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 grid-rows-14 md:grid-rows-3 mx-4 md:mx-0">
        <VideoCard />
        <KeyData />
        <Collaborate />
        <Nations />
        <LatestHackathon />
      </div>
    </div>
  );
}
