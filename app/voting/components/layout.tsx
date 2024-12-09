import { cn } from "@/lib";
import styles from "../styles.module.css";
import { TopThree } from "./top-three";
import { QRCode } from "./qr-code";
import { Title } from "./title";
import { ReactNode } from "react";
import Image from "next/image";
import { IMAGE_URL } from "@/constants";
import { IVotingResult } from "@/app/vote/[id]/[code]/types";

export function Layout({
  children,
  title,
  dataSource,
}: {
  children: ReactNode;
  title: string;
  dataSource: IVotingResult[];
}) {
  return (
    <div className={cn("-mt-20 pt-20 w-full h-screen relative", styles.voting)}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className={cn("absolute inset-0 w-full h-full object-cover")}
        preload="auto"
      >
        <source
          src="https://api.moledao.io/assets/other/BGA Ceremony Animation-Background blur.webm"
          type="video/webm"
        />
      </video>
      <div className="relative w-full px-16 z-10">
        <Title>{title}</Title>

        <div className="flex gap-16 mt-10">
          <div className="flex flex-col justify-between gap-6 w-[600px]">
            <TopThree dataSource={dataSource} />
            <QRCode />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
