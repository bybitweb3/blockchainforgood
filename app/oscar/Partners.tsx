"use client";

import { useMemo } from "react";
import { useIsMobile } from "@/hooks";
import Link from "next/link";
import { ROUTER_PATH } from "@/constants/router";
import { OSCAR_EVENT_ID } from "@/constants/env";
import BC100Image from "@/assets/oscar/BC1000.png";
import InatbaImage from "@/assets/oscar/INATBA.png";
import PBPositiveBlockchainImage from "@/assets/oscar/PBPositiveBlockchain.io.png";
import OffChainGlobalImage from "@/assets/oscar/OffChain Global.png";
import UWebImage from "@/assets/oscar/uweb.png";
import XDImage from "@/assets/oscar/xd.png";
import NapulethImage from "@/assets/oscar/napuleth.png";
import APUImage from "@/assets/oscar/apu.png";
import GrowthChargerImage from "@/assets/oscar/growth-charger.png";

import CatDigitalImage from "@/assets/oscar/9 CAT DIGITAL.png";
import AmigooVenturesImage from "@/assets/oscar/Amigoo Ventures.png";
import BeosinImage from "@/assets/oscar/Beosin.png";
import ChainCapitalImage from "@/assets/oscar/Chain Capital.png";
import CluboutImage from "@/assets/oscar/Clubout.png";
import DevsOnChainImage from "@/assets/oscar/DevsOnChain.png";
import MetaScheoolImage from "@/assets/oscar/Metaschool.png";
import PentabaseImage from "@/assets/oscar/Pentabase.png";
import SupertamMalaysiaImage from "@/assets/oscar/Superteam Malaysia.png";
import TintinlandImage from "@/assets/oscar/tintinland.png";
import TradeCoinVNImage from "@/assets/oscar/TradeCoinVN.png";
import WTechLabsImage from "@/assets/oscar/W Tech Labs.png";
import BitcoinAddictThailandImage from "@/assets/oscar/0_Bitcoin Addict Thailand.png";
import BlocktempoImage from "@/assets/oscar/0_BlockTempo.png";
import TechFlameImage from "@/assets/oscar/0_TechFlame.png";
import TrustSwapImage from "@/assets/oscar/TrustSwap.png";
import HERDAOImage from "@/assets/oscar/H.E.R. DAO.png";
import SaladVenturesImage from "@/assets/oscar/Salad Ventures.png";
import GroupFiImage from "@/assets/oscar/GroupFi.png";
import MaschainImage from "@/assets/oscar/Maschain.png";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import homeStyles from "../home/styles.module.css";

const partnerObj = [
  {
    ratio: 3,
    type: "Diamond Sponsors",
    style: {
      // width: "220px",
      height: "110px",
    },
  },
  {
    type: "Platinum Sponsors",
    name: "Strategic Partner",
    style: {
      // width: "220px",
      height: "110px",
    },
    ratio: 3,
  },
  {
    type: "Gold Sponsors",
    style: {
      // width: "140px",
      height: "70px",
    },
    ratio: 3,
  },
  {
    type: "Silver Sponsors",
    style: {
      // width: "140px",
      height: "70px",
    },
    imgStyle: {
      padding: "20px",
    },
    ratio: 3,
  },
  {
    type: "Media Partners",
    name: "Media Partner",
    style: {
      // width: "140px",
      height: "70px",
    },
    ratio: 4,
  },
  {
    type: "Community Partners",
    name: "Community Partner",
    style: {
      // width: "140px",
      height: "70px",
    },
    ratio: 4,
  },
];

const partersData = [
  {
    name: "BC100+",
    type: 1,
    logo: BC100Image,
    link: "https://bc100plus.org/",
    partnersType: 0,
    style: '{"height":"34px"}',
    mobileStyle: '{"height":"22px"}',
  },
  {
    name: "Inatba",
    type: 1,
    logo: InatbaImage,
    link: "https://inatba.org/",
    partnersType: 0,
    style: '{"height":"38px"}',
    mobileStyle: '{"height":"24px"}',
  },
  {
    name: "positive blockchain",
    type: 0,
    logo: PBPositiveBlockchainImage,
    link: "https://positiveblockchain.io/",
    partnersType: 0,
    style: '{"height": "24px"}',
    mobileStyle: '{"height":"18px"}',
  },
  {
    name: "OffChain Global",
    type: 1,
    logo: OffChainGlobalImage,
    link: "http://offchain.social/",
    partnersType: 0,
    style: '{"height":"30px"}',
    mobileStyle: '{"height":"20px"}',
  },
  {
    name: "uweb",
    type: 4,
    logo: UWebImage,
    link: "",
    partnersType: 5,
    style: '{"height":"34px"}',
    mobileStyle: '{"height":"22px"}',
  },
  {
    name: "xuedao",
    type: 4,
    logo: XDImage,
    link: "",
    partnersType: 5,
    style: '{"height":"32px"}',
    mobileStyle: '{"height":"20px"}',
  },
  {
    name: "napuleth",
    type: 4,
    logo: NapulethImage,
    link: "https://napul.eth.limo",
    partnersType: 5,
    style: '{"height": "38px"}',
    mobileStyle: '{"height":"24px"}',
  },
  {
    name: "apu blockchain",
    type: 4,
    logo: APUImage,
    link: "https://apubcc.org/",
    partnersType: 5,
    style: '{"height":"34px"}',
    mobileStyle: '{"height":"22px"}',
  },
  {
    name: "growth charger",
    type: 4,
    logo: GrowthChargerImage,
    link: "https://www.growthcharger.com/",
    partnersType: 5,
    style: '{"height":"38px"}',
    mobileStyle: '{"height":"24px"}',
  },
  {
    name: "9 CAT DIGITAL",
    type: 4,
    logo: CatDigitalImage,
    link: "https://9catdigital.com/",
    partnersType: 5,
    style: '{"height":"30px"}',
    mobileStyle: '{"height":"20px"}',
  },
  {
    name: "Amigoo Ventures",
    type: 4,
    logo: AmigooVenturesImage,
    link: "https://www.amigoo.xyz/",
    partnersType: 5,
    style: '{"height":"38px"}',
    mobileStyle: '{"height":"24px"}',
  },
  {
    name: "Beosin",
    type: 4,
    logo: BeosinImage,
    link: "https://www.beosin.com/",
    partnersType: 5,
    style: '{"height":"38px"}',
    mobileStyle: '{"height":"24px"}',
  },
  {
    name: "Chain Capital",
    type: 4,
    logo: ChainCapitalImage,
    link: "",
    partnersType: 5,
    style: '{"height":"38px"}',
    mobileStyle: '{"height":"24px"}',
  },
  {
    name: "Clubout",
    type: 4,
    logo: CluboutImage,
    link: "https://clubout.pro/",
    partnersType: 5,
    style: '{"height":"32px"}',
    mobileStyle: '{"height":"20px"}',
  },
  {
    name: "DevsOnChain",
    type: 4,
    logo: DevsOnChainImage,
    link: "https://x.com/DevsOnChain",
    partnersType: 5,
    style: '{"height":"32px"}',
    mobileStyle: '{"height":"20px"}',
  },
  {
    name: "metaschool",
    type: 4,
    logo: MetaScheoolImage,
    link: "https://metaschool.so/",
    partnersType: 5,
    style: '{"height":"30px"}',
    mobileStyle: '{"height":"20px"}',
  },
  {
    name: "pentabase",
    type: 4,
    logo: PentabaseImage,
    link: "https://pentabase.io/",
    partnersType: 5,
    style: '{"height":"38px"}',
    mobileStyle: '{"height":"24px"}',
  },
  {
    name: "superteam malaysia",
    type: 4,
    logo: SupertamMalaysiaImage,
    link: "https://my.superteam.fun/",
    partnersType: 5,
    style: '{"height":"38px"}',
    mobileStyle: '{"height":"24px"}',
  },
  {
    name: "tintinland",
    type: 4,
    logo: TintinlandImage,
    link: "",
    partnersType: 5,
    style: '{"height":"38px"}',
    mobileStyle: '{"height":"24px"}',
  },
  {
    name: "TradeCoinVN",
    type: 4,
    logo: TradeCoinVNImage,
    link: "https://tradecoinvn.net/",
    partnersType: 5,
    style: '{"height":"38px"}',
    mobileStyle: '{"height":"24px"}',
  },
  {
    name: "W Tech Labs",
    type: 4,
    logo: WTechLabsImage,
    link: "https://www.wtechlabs.xyz/",
    partnersType: 5,
    style: '{"height":"38px"}',
    mobileStyle: '{"height":"24px"}',
  },
  {
    name: "Bitcoin Addict Thailand",
    type: 4,
    logo: BitcoinAddictThailandImage,
    link: "https://bitcoinaddict.org/",
    partnersType: 4,
    style: '{"height":"38px"}',
    mobileStyle: '{"height":"24px"}',
  },
  {
    name: "Block tempo",
    type: 4,
    logo: BlocktempoImage,
    link: "https://www.blocktempo.com/",
    partnersType: 4,
    style: '{"height":"38px"}',
    mobileStyle: '{"height":"24px"}',
  },
  {
    name: "TechFlame",
    type: 4,
    logo: TechFlameImage,
    link: "https://techflame.com/",
    partnersType: 4,
    style: '{"height":"38px"}',
    mobileStyle: '{"height":"24px"}',
  },
  {
    name: "TrustSwap",
    type: 4,
    logo: TrustSwapImage,
    link: "https://trustswap.com/",
    partnersType: 5,
    style: '{"height":"34px"}',
    mobileStyle: '{"height":"20px"}',
  },
  {
    name: "H.E.R. DAO",
    type: 4,
    logo: HERDAOImage,
    link: "https://www.her-dao.xyz/",
    partnersType: 5,
    style: '{"height":"38px"}',
    mobileStyle: '{"height":"24px"}',
  },
  {
    name: "Salad Ventures",
    type: 4,
    logo: SaladVenturesImage,
    link: "",
    partnersType: 5,
    style: '{"height":"38px"}',
    mobileStyle: '{"height":"24px"}',
  },
  {
    name: "GroupFi",
    type: 4,
    logo: GroupFiImage,
    link: "https://groupfi.ai/",
    partnersType: 5,
    style: '{"height":"38px"}',
    mobileStyle: '{"height":"24px"}',
  },
  {
    name: "Masverse/Maschain",
    type: 4,
    logo: MaschainImage,
    link: "https://www.maschain.com/",
    partnersType: 5,
    style: '{"height":"34px"}',
    mobileStyle: '{"height":"20px"}',
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
                      // width: `${(1 / item.ratio) * 100}%`,
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
    <div
      id="partner"
      ref={ref}
      className="w-full md:w-content mx-auto px-6 md:px-0"
    >
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
              key={item.name}
              className="-mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              {index !== 0 && (
                <h2
                  className={`font-bold text-oscarActive font-['Inter'] text-[20px] md:text-[32px] text-center`}
                >
                  {item.name}
                </h2>
              )}
              <PartnerItem item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
