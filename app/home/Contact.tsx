"use client";

import { useState } from "react";
import { trackSensors } from "@/lib/sensors";
import LinkedIn from "@/assets/LinkedIn.svg";
import X from "@/assets/X.svg";
import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import styles from "./styles.module.css";
import { BGA_EMAIL } from "@/constants";

export const Contact = () => {
  const [subject, setSubject] = useState("");
  const [bodytext, setBodyText] = useState("");
  const email = BGA_EMAIL;

  const ref = useIntersectionObserver<HTMLDivElement>(styles.moveFromBottom);

  return (
    <div
      id="contact"
      ref={ref}
      className="items-start justify-between gap-6 inline-flex w-full md:w-content m-auto flex-wrap px-4 md:px-0 mb-4"
    >
      <div className="flex-col justify-start items-start gap-2 md:gap-8 inline-flex">
        <div className="flex-col justify-start items-start flex">
          <div className="self-stretch justify-center items-center gap-2 inline-flex">
            <h2 className="grow shrink basis-0 text-text text-[32px] font-bold font-['Inter'] leading-[41.60px]">
              Contact Us
            </h2>
          </div>
          <div className="self-stretch justify-center items-center gap-2 inline-flex">
            <p className="grow shrink basis-0 text-[#576172] text-base font-normal font-['Inter'] leading-normal">
              Join us to drive meaningful change together.
            </p>
          </div>
        </div>
        <div className="self-stretch flex-col justify-start items-start flex">
          <div className="self-stretch justify-center items-center gap-2 inline-flex">
            <h3 className="grow shrink basis-0 text-black text-base font-bold font-['Inter'] leading-normal">
              Chat with us
            </h3>
          </div>
          <div className="self-stretch justify-center items-center gap-2 inline-flex">
            <a
              className="grow shrink basis-0 text-[#576172] text-base font-normal font-['Inter'] leading-normal"
              href={`mailto:${email}`}
              rel="noopener noreferrer"
            >
              {email}
            </a>
          </div>
        </div>
        <div className="self-stretch h-6 justify-start items-start flex gap-4">
          <Image
            src={X}
            width={24}
            height={24}
            alt="X"
            className="cursor-pointer"
            onClick={() => {
              window.open("https://twitter.com/chainforgood", "_blank");
              trackSensors("ButtonClicked", {
                buttonName: `Twitter Button`,
                // 其他自定义属性
              });
            }}
          />
          <Image
            src={LinkedIn}
            width={24}
            height={24}
            alt="Linkedin"
            className="cursor-pointer"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/company/blockchainforgoodalliance",
                "_blank"
              );
              trackSensors("ButtonClicked", {
                buttonName: `Linkedin Button`,
                // 其他自定义属性
              });
            }}
          />
        </div>
      </div>
      <div className="w-[604px] p-6 bg-white shadow flex-col justify-start items-start gap-4 inline-flex z-20">
        <div className="self-stretch h-6 flex-col justify-start items-start flex">
          <div className="self-stretch justify-center items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 text-black text-base font-bold font-['Inter'] leading-normal">
              Send Us a Message
            </div>
          </div>
        </div>
        <div className="self-stretch flex-col justify-start items-start gap-2 flex">
          {/* <div className="self-stretch h-[62px] flex-col justify-start items-start gap-1 flex">
                        <div className="self-stretch justify-center items-center gap-2 inline-flex">
                            <div className="grow shrink basis-0 text-neutral-400 text-xs font-normal font-['Inter'] leading-[18px]">Name*</div>
                        </div>
                        <div className="self-stretch h-10 bg-white shadow-inner border border-neutral-400 flex-col justify-center items-start gap-2.5 flex">
                            <input maxLength={100} className="text-xs font-normal font-['Inter'] leading-[18px] w-full h-full p-2 text-black focus:outline-none" placeholder='Please input' value={name} onChange={(e) => {
                                setName(e.target.value)
                            }} />
                        </div>
                    </div> */}
          <div className="self-stretch h-[62px] flex-col justify-start items-start gap-1 flex">
            <div className="self-stretch justify-center items-center gap-2 inline-flex">
              <div className="grow shrink basis-0 text-neutral-400 text-xs font-normal font-['Inter'] leading-[18px]">
                Subject*
              </div>
            </div>
            <div className="self-stretch h-10 bg-white shadow-inner border border-neutral-400 flex-col justify-center items-start gap-2.5 flex">
              <input
                maxLength={100}
                className="text-xs font-normal font-['Inter'] leading-[18px] w-full h-full p-2 bg-white text-black focus:outline-none"
                placeholder="Please input"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-1 flex">
            <div className="self-stretch justify-center items-center gap-2 inline-flex">
              <div className="grow shrink basis-0 text-neutral-400 text-xs font-normal font-['Inter'] leading-[18px]">
                Message*
              </div>
            </div>
            <div className="self-stretch h-20 bg-white shadow-inner border border-neutral-400 flex-col justify-center items-start gap-2.5 flex">
              <textarea
                maxLength={1000}
                cols={4}
                className="text-xs font-normal font-['Inter'] leading-[18px] w-full h-full p-2 bg-white text-black focus:outline-none"
                placeholder="Please input"
                value={bodytext}
                onChange={(e) => {
                  setBodyText(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <a
          className="w-[87px] h-8 px-6 border border-text justify-center items-center gap-2.5 inline-flex hover:border-text hover:bg-text group cursor-pointer hover:border-main"
          href={`mailto:${email}?subject=${subject}&body=${bodytext}`}
          rel="noopener noreferrer"
        >
          <div className="text-center text-text text-sm font-medium font-['Inter'] leading-[14px] group-hover:text-main">
            Send
          </div>
        </a>
      </div>
    </div>
  );
};
