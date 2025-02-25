"use client";
import { usePathname } from "next/navigation";
import { ROUTER_PATH } from "@/constants";
import { trackSensors } from "@/lib/sensors";
import { cn } from "@/lib";

import { LogoSvg, LogoPNG } from "./LogoSvg";
import { useRef } from "react";
import { ArrowDownToLine, Download } from "lucide-react";


export const Footer = () => {
  const pathname = usePathname();

  const shouldHidden = pathname?.startsWith(ROUTER_PATH.FORM.ROOT);
  if (shouldHidden) {
    return null;
  }

  const isIncubation = isIncubationPage(pathname);
  const isJointFund = isJointFundPage(pathname);
  const isHackathon = isHackathonPage(pathname);
  const isScreenBG = isIncubation || isHackathon || isJointFund;

  const iconSvgFillColor = isScreenBG ? "#7D8CA3" : "black";

  const onDownloadLogo = async () => {
    fetch("/api/download-images")
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "bga.zip";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => console.error("Error downloading images:", error));
  };
  return (
    <footer
      className={cn(
        "w-full h-[197px] py-8 bg-zinc-300 flex justify-center items-center",
        isScreenBG && "bg-incubation"
      )}
    >
      <div className="w-full md:w-content flex-col justify-start items-start gap-8 inline-flex px-4 md:px-0">
        <div className="flex-col justify-start items-start gap-4 flex w-full">
          <LogoPNG
            style={{
              transform: "translateX(35%) scale(1.7)",
            }}
            className="scale-[1.7] translate-x-2"
            isDark={isIncubationPage}
            // fill={iconSvgFillColor}
          />

          <div
            className={cn(
              "justify-center items-center gap-2 inline-flex cursor-pointer"
            )}
            onClick={() => {
              // window.open(
              //   "https://drive.google.com/drive/folders/1YbdwZWnbVCwsUN_YKq9XiZlhOPeJDCpw",
              //   "_blank"
              // );
              onDownloadLogo();

              trackSensors("ButtonClicked", {
                buttonName: `Media Kit Button`,
              });
            }}
          >
            <h3
              className={cn(
                "flex gap-1 text-black text-base font-bold font-['Inter'] leading-normal cursor-pointer",
                isScreenBG && "text-description"
              )}
            >
              Media Kit
              <ArrowDownToLine className="w-5 h-5" />
            </h3>
          </div>
        </div>
        <div className="w-full md:w-[604px] justify-center items-center gap-2 inline-flex">
          <p
            className={cn(
              "grow shrink basis-0 text-text text-xs font-normal font-['Inter'] leading-[18px]",
              isScreenBG && "text-description"
            )}
          >
            © 2024 Blockchain For Good Alliance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
