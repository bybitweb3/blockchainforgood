"use client";

import homeStyles from "@/app/home/styles.module.css";
import YouTube from "react-youtube";

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

import { InfiniteMovingCards } from "./inifinite-moveing-card";
import React, { useCallback } from "react";
import { HTMLAttributes, useEffect, useState } from "react";
import { useIsMobile } from "@/hooks";
import { DialogsWithFooterAndTitle } from "@/components/Dialog";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const videos: any[] = [
  {
    name: "",
    id: "oAW_0JhcUL8",
  },
  {
    name: "",
    id: "neM00nSTFW8",
  },
  {
    name: "",
    id: "5DwK8gmCk8g",
  },
];

const VideoItem = ({
  project,
  onItemChange,
  active,
  index,
}: {
  project: any;
  index: number;
  active: number | null;
  onItemChange: (isOpen: boolean) => void;
} & HTMLAttributes<HTMLImageElement>) => {
  const [isOpen, setIsOpen] = useState(false);
  const mobile = useIsMobile();
  const w = 720;

  useEffect(() => {
    if (index === active) {
      setIsOpen(true);
    }
  }, [index, active]);

  const click = useCallback(() => {
    if (project) {
      setIsOpen(true);
      onItemChange(true);
    }
  }, []);

  return (
    <>
      <div
        className="relative cursor-pointer w-full"
        style={{ height: 238 }}
        data-click2={click}
        onClick={click}
      >
        <div className="absolute top-0 left-0 right-0 z-20 pt-3 px-4 text-white">
          <div className="font-bold font-['Inter']">{project?.name}</div>
        </div>
        <YouTube
          className={`absolute w-full cursor-pointer`}
          opts={{ width: "100%", height: "238" }}
          videoId={project.id}
        />
      </div>
      <DialogsWithFooterAndTitle
        open={isOpen}
        setOpen={() => {
          setIsOpen(false);
        }}
        css={{
          height: project?.width ? (project?.width / 9) * 18 : "auto",
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
        <YouTube
          opts={{ width: "100%", height: "100%" }}
          videoId={project.id}
        />
      </DialogsWithFooterAndTitle>
    </>
  );
};

const Videos = () => {
  const [isOpen, setSetIsOpen] = useState<boolean>(false);
  const [active, setActive] = useState(null);

  return (
    <div className="h-[238px] md:w-content flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        direction="left"
        speed="slow"
        isPause={true}
        className="w-full"
        wrapClassName="grid grid-cols-3 gap-6"
      >
        {videos.map((video, index) => {
          return (
            <VideoItem
              key={index}
              index={index}
              active={active}
              project={video}
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
