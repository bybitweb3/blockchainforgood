"use client";

import {
  CSSProperties,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import * as THREE from "three";
import langGeoJson from "./custom.geo.json";
import { type GlobeMethods } from "react-globe.gl";
import { useIsMobile } from "@/hooks";
import Image from "next/image";
import styles from "./earth.module.css";
import { cn } from "@/lib";
import dynamic from "next/dynamic";
import {
  HoverCard,
  HoverCardContent,
  HoverCardPortal,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { createRoot } from "react-dom/client";
import { Impact } from "../impact";
import { useAPIGetList } from "./api";
import { BGAEarthEnum, IEvent } from "./types";
import { IMAGE_URL } from "@/constants";
import PartnersImage from "@/assets/earth/Collab.png";
import IncubationImage from "@/assets/earth/Incubation.png";
import HackathonImage from "@/assets/earth/Hackathon.png";
import EventImage from "@/assets/earth/Event.png";
import { useUpdateEffect } from "@/hooks/useUpdateEffect";
import { COUNTRIES, SPECIAL_AREA } from "./const";

const Globe = dynamic(() => import("./globe-wrapper"), {
  ssr: false,
});

const HEIGHT = 80 + 40 + 40;
const CONTENT_WIDTH = 1232;

const polygonsMaterial = new THREE.MeshLambertMaterial({
  color: "#00d5bf",
  side: THREE.DoubleSide,
});

const GLOBE_RADIUS = 100; // 地球半径
const LINE_RADIUS = 0.15; // 线条半径

// 生成经纬度线数据
const generateGridLines = () => {
  const lines = [];
  for (let lat = -80; lat <= 80; lat += 20) {
    lines.push({ type: "latitude", value: lat });
  }
  for (let lng = -180; lng < 180; lng += 20) {
    lines.push({ type: "longitude", value: lng });
  }
  return lines;
};

// 创建经纬度线对象
const createGridLineObject = (line: any) => {
  const material = new THREE.LineBasicMaterial({
    color: "0xffffff",
    opacity: 0.6,
  });

  const points = [];

  if (line.type === "latitude") {
    const lat = (line.value * Math.PI) / 180;
    for (let lng = 0; lng <= 360; lng += 5) {
      const phi = ((90 - lng) * Math.PI) / 180;
      const x = GLOBE_RADIUS * Math.cos(lat) * Math.cos(phi);
      const y = GLOBE_RADIUS * Math.sin(lat);
      const z = GLOBE_RADIUS * Math.cos(lat) * Math.sin(phi);
      points.push(new THREE.Vector3(x, y, z));
    }
  } else {
    const lng = (line.value * Math.PI) / 180;
    for (let lat = -90; lat <= 90; lat += 5) {
      const phi = (lat * Math.PI) / 180;
      const x = GLOBE_RADIUS * Math.cos(phi) * Math.cos(lng);
      const y = GLOBE_RADIUS * Math.sin(phi);
      const z = GLOBE_RADIUS * Math.cos(phi) * Math.sin(lng);
      points.push(new THREE.Vector3(x, y, z));
    }
  }

  const curve = new THREE.CatmullRomCurve3(points);
  const geometry = new THREE.TubeGeometry(curve, 64, LINE_RADIUS, 8, false);
  return new THREE.Line(geometry, material);
};

const layoutData = generateGridLines();

export function Earth({ children }: { children: React.ReactNode }) {
  const { data = [] } = useAPIGetList();

  const globeEl = useRef<GlobeMethods>();

  const earthRef = useRef<HTMLDivElement>(null);
  const lefthandRef = useRef<HTMLDivElement>(null);
  const righthandRef = useRef<HTMLDivElement>(null);

  const initialGlobe = () => {
    const globe = globeEl.current;
    if (!globe) return;

    const camera = globe.camera();
    const controls = globe.controls();

    // 设置目标位置（地球中心）
    controls.target.set(0, 0, 0);
    // 设置相机位置
    // 新加坡的坐标
    const latitude = 1.18;
    const longitude = 103.51;
    const distance = 250; // 调整这个值以改变视角距离
    const phi = (90 - latitude) * (Math.PI / 180);
    const theta = (longitude + 180) * (Math.PI / 180);
    const x = distance * Math.sin(phi) * Math.cos(theta);
    const y = distance * Math.cos(phi);
    const z = distance * Math.sin(phi) * Math.sin(theta);
    camera.position.set(x, y, distance);

    // 设置地球旋转
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.4; // 设置自动旋转速度

    // 监听相机变更事件：包括旋转、缩放、拖拽等
    // controls.addEventListener("change", (e) => {
    //   const zoomLevel = controls.getDistance(); // 获取当前缩放距离
    //   console.log("Zoom level changed:", zoomLevel);
    // });

    // 更新控制器
    controls.update();
  };

  const isMobile = useIsMobile();

  const [globeWidth, setGlobeWidth] = useState<number>(CONTENT_WIDTH);
  const [globeHeight, setGlobeHeight] = useState<number>(CONTENT_WIDTH);

  useEffect(() => {
    const maxWidth = window.innerWidth * 0.65;
    setGlobeWidth(maxWidth > CONTENT_WIDTH ? CONTENT_WIDTH : maxWidth);
    setGlobeHeight(isMobile ? maxWidth : window.innerHeight - HEIGHT);
  }, [isMobile]);

  const [earthIsReady, setEarthIsReady] = useState(false);
  const onAddClassName = () => {
    earthRef.current.classList.add(styles["earth"]);
    lefthandRef.current.classList.add(styles["left-hand"]);
    righthandRef.current.classList.add(styles["right-hand"]);
    setEarthIsReady(true);
  };

  const onGlobeReady = () => {
    initialGlobe();
    onAddClassName();
  };

  // 重新进入路由时再次触发动画
  useEffect(() => {
    if (globeEl.current) {
      onGlobeReady();
    }
  }, []);

  return (
    <div className={cn("w-full", styles.container)}>
      <div className="w-full md:w-content mx-auto flex justify-center relative">
        <div
          ref={lefthandRef}
          className={cn("w-2/5 absolute left-[30%] top-[20%] opacity-0")}
        >
          <img
            src="https://api.moledao.io/assets/other/left-hand.webp"
            alt="left-hand"
            width={4000}
            height={3000}
          />
        </div>
        <div
          ref={righthandRef}
          className={cn("w-2/5 absolute right-[30%] top-[20%] opacity-0")}
        >
          <img
            src="https://api.moledao.io/assets/other/right-hand.webp"
            alt="right-hand"
            width={4000}
            height={3000}
          />
        </div>
        <div style={{ width: "100%", minHeight: globeHeight }}>
          <div ref={earthRef}>
            <Globe
              rendererConfig={{
                antialias: false,
                premultipliedAlpha: false,
                alpha: true,
                preserveDrawingBuffer: true,
                precision: "lowp",
                powerPreference: "high-performance",
              }}
              globeRef={globeEl}
              width={globeWidth}
              height={globeHeight}
              backgroundColor="rgba(0,0,0,0)"
              // custom
              customLayerData={layoutData}
              customThreeObject={createGridLineObject}
              showGlobe={false}
              showGraticules={false}
              showAtmosphere={false}
              polygonsData={langGeoJson.features}
              polygonCapMaterial={polygonsMaterial}
              polygonSideColor={() => "rgba(0, 0, 0, 0)"}
              polygonCapColor={() => "rgba(200, 0, 0, 0.6)"}
              polygonStrokeColor={() => "rgba(255,255,255, 0.35)"}
              polygonAltitude={0.01}
              // HTML marks
              htmlElementsData={data}
              htmlLat={((item: IEvent) => item.location.latlng[1]) as any}
              htmlLng={((item: IEvent) => item.location.latlng[0]) as any}
              htmlAltitude={0}
              htmlElement={
                ((item: IEvent) => {
                  const wrapper = document.createElement("div");
                  wrapper.classList.add("!select-auto");
                  wrapper.classList.add("pointer-events-auto");

                  const root = createRoot(wrapper);
                  root.render(
                    <Marker item={item} globeRef={globeEl} data={data} />
                  );

                  return wrapper;
                }) as any
              }
              onGlobeReady={onGlobeReady}
            />
            {earthIsReady && children}
          </div>
        </div>
      </div>
      <Impact />
    </div>
  );
}

const EVENT_TYPE_MAP = {
  [BGAEarthEnum.PARTNER]: {
    icon: PartnersImage,
    name: "Partner",
  },
  [BGAEarthEnum.INCUBATION]: {
    icon: IncubationImage,
    name: "Incubation Project",
  },
  [BGAEarthEnum.ADVISOR]: {
    icon: HackathonImage,
    name: "Hackathon",
  },
  [BGAEarthEnum.EVENT]: {
    icon: EventImage,
    name: "Event",
  },
};

function Marker({
  item,
  data,
  globeRef,
}: {
  item: IEvent;
  data: IEvent[];
  globeRef: MutableRefObject<GlobeMethods>;
}) {
  const [open, setOpen] = useState(false);

  const onEnter = () => {
    const controls = globeRef.current.controls();
    controls.autoRotate = false;
    controls.update();
  };

  const onLeave = () => {
    const controls = globeRef.current.controls();
    controls.autoRotate = true;
    controls.update();
  };

  useUpdateEffect(() => {
    if (!open) {
      onLeave();
    }
  }, [open]);

  const onChange = (val: boolean) => {
    setOpen(val);
  };

  const clickToOpenHoverCard = () => {
    // setOpen(true);
  };

  const circleAnimationDuringTime = 1 + Math.random() * 2;

  return (
    <div
      className={cn(
        styles["hover-root"],
        "cursor-pointer !pointer-events-auto !select-auto"
      )}
    >
      <HoverCard open={open} onOpenChange={onChange} openDelay={300}>
        <HoverCardTrigger asChild>
          <div
            className={styles.marker}
            onMouseEnter={onEnter}
            onClick={clickToOpenHoverCard}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className={styles.circle}
                style={{
                  animationDuration: `${circleAnimationDuringTime}s`,
                }}
                opacity="0.25"
                cx="14"
                cy="14"
                r="14"
                fill="#FDFFB8"
              />
              <circle
                className={styles.circle}
                style={{
                  animationDuration: `${circleAnimationDuringTime}s`,
                }}
                opacity="0.25"
                cx="14"
                cy="14"
                r="9.8"
                fill="#FDFFAE"
              />
              <circle cx="14" cy="14" r="5.51515" fill="#EEF500" />
            </svg>
          </div>
        </HoverCardTrigger>
        <HoverCardPortal>
          <HoverCardContent className="min-w-52 z-[999] relative bg-white/75 shadow-lg rounded-none p-0 !pointer-events-auto !select-auto">
            <MarkerLayout item={item} data={data} />
          </HoverCardContent>
        </HoverCardPortal>
      </HoverCard>
    </div>
  );
}

interface MarkerProps {
  item: IEvent;
}

interface MarkerDataProps {
  item: IEvent;
  data: IEvent[];
}

function MarkerItem({ item }: MarkerProps) {
  let imgSrc = item.image;
  let imgStyle = {};
  if (item.diyimage) {
    imgSrc = item.diyimage.url;
    imgStyle = item.diyimage.style;
  }

  const openLink = () => {
    window.open(item.link, "_blank");
  };
  return (
    <>
      <p className="text-xs font-bold p-2">
        {COUNTRIES[item.location.country] ?? "Unknown"}
      </p>
      <div className="px-2 py-4 space-y-2 border-t border-active">
        <h3 className="text-sm font-bold text-main flex items-center">
          <Image
            width={24}
            height={24}
            className="w-6 h-6"
            src={EVENT_TYPE_MAP[item.type].icon}
            alt={EVENT_TYPE_MAP[item.type].name}
          />
          {EVENT_TYPE_MAP[item.type].name}
        </h3>
        <div className="flex gap-2">
          <ImageCard src={imgSrc} alt={item.name} style={imgStyle} />
          <div>
            <p className="text-xs">{item.name}</p>
            <p className="text-xs cursor-pointer" onClick={openLink}>
              {item.link}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function MakrerList({ item, data }: MarkerDataProps) {
  const filteredData = data.filter(
    (d) => d.location.country === item.location.country
  );
  // 然后再根据type分类
  const groupedData = filteredData.reduce((acc, d) => {
    const key = d.type;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(d);
    return acc;
  }, {} as Record<string, IEvent[]>);

  return (
    <>
      <p className="text-xs font-bold px-2 py-4 border-b border-description border-dashed">
        {COUNTRIES[item.location.country] ?? "Unknown"}
      </p>
      <div className="max-h-96 overflow-y-auto">
        {Object.entries(groupedData).map(([type, list], index) => (
          <div
            key={type}
            className={cn(
              index !== 0 && "border-t border-description border-dashed",
              "mb-4"
            )}
          >
            <h3 className="text-sm font-bold text-main flex items-center px-2 my-4">
              <Image
                width={24}
                height={24}
                className="w-6 h-6"
                src={(EVENT_TYPE_MAP as any)[type].icon}
                alt={(EVENT_TYPE_MAP as any)[type].name}
              />
              {(EVENT_TYPE_MAP as any)[type].name}
            </h3>
            <div className="space-y-4 px-2">
              {list.map((item: IEvent) => {
                let imgSrc = item.image;
                let imgStyle = {};
                if (item.diyimage) {
                  imgSrc = item.diyimage.url;
                  imgStyle = item.diyimage.style;
                }
                return (
                  <div className="flex items-center gap-2">
                    <ImageCard src={imgSrc} alt={item.name} style={imgStyle} />
                    <p className="text-xs">{item.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function MarkerLayout({ item, data }: MarkerDataProps) {
  if (SPECIAL_AREA[item.location.country]) {
    return <MakrerList item={item} data={data} />;
  }
  return <MarkerItem item={item} />;
}

function ImageCard({
  alt,
  src,
  style,
}: {
  alt: string;
  src: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className="overflow-hidden"
      style={{ backgroundColor: style?.backgroundColor || "#ffffff" }}
    >
      {/* 用了Nextjs自带的Image后，打开图片就会出问题。可能是配置不正确，暂时先用img元素代替 */}
      <img
        src={`${IMAGE_URL}${src}`}
        alt={alt}
        className="w-8 h-8 transition-transform duration-300 object-contain"
        width={185}
        height={185}
        style={style}
      />
    </div>
  );
}
