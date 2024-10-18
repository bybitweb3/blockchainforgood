"use client";

import { useMemo } from "react";
import { useIsMobile } from "@/hooks";
import Link from "next/link";
import { ROUTER_PATH } from "@/constants/router";
import { OSCAR_EVENT_ID } from "@/constants/env";
import BC100Image from "@/assets/oscar/BC1000.png";
import InatbaImage from "@/assets/oscar/INATBA.png";
import PBPositiveBlockchainImage from "@/assets/oscar/PBPositiveBlockchain.io.png";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import homeStyles from "../home/styles.module.css";

export const partersData = [
  {
    approve: 0,
    id: "3",
    name: "BC100+",
    sort: 2,
    type: 1,
    logo: BC100Image,
    link: "https://bc100plus.org/",
    partnersType: 0,
    style: '{"height":"34px"}',
    mobileStyle: '{"height":"22px"}',
    createDate: "2023-01-17T06:40:21.384Z",
    updateDate: "2023-01-17T06:40:21.384Z",
  },
  {
    approve: 0,
    id: "4",
    name: "Inatba",
    sort: 0,
    type: 1,
    logo: InatbaImage,
    link: "https://inatba.org/",
    partnersType: 0,
    style: '{"height":"38px"}',
    mobileStyle: '{"height":"24px"}',
    createDate: "2023-01-17T06:40:21.388Z",
    updateDate: "2023-01-17T06:40:21.388Z",
  },
  {
    approve: 0,
    id: "104",
    name: "positive blockchain",
    sort: 0,
    type: 0,
    logo: PBPositiveBlockchainImage,
    link: "https://positiveblockchain.io/",
    partnersType: 0,
    style: '{"height": "24px"}',
    mobileStyle: '{"height":"18px"}',
    createDate: "2023-11-08T14:33:10.047Z",
    updateDate: "2023-11-08T14:33:10.047Z",
  },
];

const PartnerItem = ({ item }: { item: any }) => {
  const mobile = useIsMobile();

  return (
    <div className="my-6 md:my-10">
      <div className={`flex flex-wrap justify-center items-center`}>
        {item?.list?.map((ite: any, i: number) => {
          return (
            <a
              key={i}
              className={`inline-block p-1 mb-1 sx:w-full`}
              style={
                mobile
                  ? {
                      height: ["Media Partners", "Community"].includes(
                        item.type
                      )
                        ? 50
                        : 64,
                      width: `${(1 / item.ratio) * 100}%`,
                    }
                  : item.style || {}
              }
              target={ite?.link ? "_blank" : "_self"}
              href={ite?.link || undefined}
              rel="noreferrer"
            >
              <div
                className="overflow-hidden rounded-md  flex justify-center items-center w-full h-full"
                style={{ padding: 10, ...(mobile ? {} : item?.imgStyle || {}) }}
              >
                <img
                  src={ite?.logo.src}
                  style={{ ...((mobile ? ite.mobileStyle : ite?.style) || {}) }}
                  alt=""
                />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

const partnerObj = [
  {
    ratio: 3,
    type: "Diamond Sponsors",
    style: {
      width: "220px",
      height: "110px",
    },
  },
  {
    type: "Platinum Sponsors",
    style: {
      width: "220px",
      height: "110px",
    },
    ratio: 3,
  },
  {
    type: "Gold Sponsors",
    style: {
      width: "140px",
      height: "70px",
    },
    ratio: 3,
  },
  {
    type: "Silver Sponsors",
    style: {
      width: "140px",
      height: "70px",
    },
    imgStyle: {
      padding: "20px",
    },
    ratio: 3,
  },
  {
    type: "Media Partners",
    style: {
      width: "140px",
      height: "70px",
    },
    ratio: 4,
  },
  {
    type: "Community Partners",
    style: {
      width: "140px",
      height: "70px",
    },
    ratio: 4,
  },
];

export const Partners = () => {
  const data: any[] = useMemo(() => {
    const list = partersData as any[];
    if (!list?.length) return [];
    const data: any[] = [];
    for (let i = 0; i < list?.length; i++) {
      const item = list[i];
      let mobileStyle;
      if (data[item.partnersType]) {
        try {
          mobileStyle = item?.mobileStyle ? JSON.parse(item?.mobileStyle) : {};
        } catch {
          mobileStyle = {};
        }
        data[item.partnersType].list?.push({
          ...item,
          mobileStyle,
          style: item?.style ? JSON.parse(item?.style) : {},
        });
      } else {
        data[item.partnersType] = {
          ...partnerObj[item.partnersType],
          list: [
            {
              ...item,
              mobileStyle: item?.mobileStyle
                ? JSON.parse(item?.mobileStyle)
                : {},
              style: item?.style ? JSON.parse(item?.style) : {},
            },
          ],
        };
      }
    }
    return data;
  }, []);

  const ref = useIntersectionObserver<HTMLDivElement>(
    homeStyles.moveFromBottom
  );

  return (
    <div id="partner" ref={ref} className="px-6 md:px-0 pt-6">
      <h2
        className={`font-bold text-oscarActive font-['Inter'] text-[20px] md:text-[32px] text-center`}
      >
        Strategic Partner
      </h2>
      <div className="text-description text-center">
        <p>Interested in becoming our partner?</p>
        <p>
          Submit your details{" "}
          <Link
            className="text-oscarActive"
            href={`${ROUTER_PATH.FORM.ORGANIZATION}/${OSCAR_EVENT_ID}`}
          >
            here
          </Link>{" "}
          and we’ll be in touch when opportunities are open.
        </p>
      </div>
      <div className="relative mt-4 w-full md:w-content">
        {data?.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className="-mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <PartnerItem item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
