import { HTMLAttributes, useEffect, useRef, useState } from "react";
import { CustomVideoPlayer, IVideo } from "@/components/Video";
import playicon from "@/assets/play.svg";
import posterYH from "@/assets/video/YH.webp";
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
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
// 导入 Splide 的样式文件（根据你的项目配置可能会有所不同）
import "@splidejs/splide/css";
import { DialogsWithFooterAndTitle } from "@/components/Dialog";

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
  {
    src: "/video/2_YH.mp4",
    from: "Web3 Lead of Moledao",
    name: "YH",
    poster: posterYH,
  },
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
  ...props
}: {
  project: {
    logo: StaticImageData;
    video?: IVideo;
    link?: string;
    name: string;
  };
} & HTMLAttributes<HTMLImageElement>) => {
  const { logo, video, link, name } = project;
  const [isOpen, setIsOpen] = useState(false);
  const mobile = useIsMobile();
  const w = 1000;

  return (
    <>
      <div className="relative splide__slide cursor-pointer" style={{ width: 240, height: 135 }} onClick={() => {
        if (video) {
          setIsOpen(true);
        } else {
          window.open(link, "_blank");
        }
      }}>
        <div className="absolute top-0 left-0 right-0 z-20 pt-3 px-4 text-white">
          <div className="font-bold font-['Inter']">
            {video?.name}
          </div>
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
        css={{ height: video?.width ? (video?.width / 9) * 18 : "auto" }}
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
        >
        </CustomVideoPlayer>
      </DialogsWithFooterAndTitle>
    </>
  );
};

export const Videos = () => {
  const ref = useRef<any>();
  const mobile = useIsMobile();

  const videoStyle = {
    width: 240,
    height: 135,
  };

  useEffect(() => {
    if (ref.current) return;
    ref.current = new Splide(".splide", {
      type: "loop",
      drag: "free",
      focus: "center",
      fixedWidth: videoStyle.width,
      fixedHeight: videoStyle.height,
      arrows: false,
      pagination: false,
      autoScroll: {
        speed: 1,
      },
    }).mount({ AutoScroll });
  }, [mobile]); // 通过空数组作为依赖项，确保只在组件挂载时执行一次初始化

  return (
    <div className="relative">
      <div
        className="w-screen relative splide"
        style={{ height: videoStyle.height, }}
      >
        <div className="splide__track">
          <div
            className="flex items-center m-auto gap-2 flex-nowrap splide__list"
            style={{ height: videoStyle.height, }}
          >
            {videos.map((video, index) => {
              const { poster, name } = video;
              return (<VideoItem key={index} project={{ video, logo: poster, name }} />)
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
