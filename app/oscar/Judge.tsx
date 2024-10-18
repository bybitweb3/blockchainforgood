"use client";

import { cn } from "@/lib";
import homeStyles from "../home/styles.module.css";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import JudgeImage1 from "@/assets/oscar/Avatar1.png";
import JudgeImage2 from "@/assets/oscar/Avatar2.png";
import JudgeImage3 from "@/assets/oscar/Avatar3.png";
import JudgeImage4 from "@/assets/oscar/Avatar4.png";
import JudgeImage5 from "@/assets/oscar/Avatar5.png";
import JudgeImage6 from "@/assets/oscar/Avatar6.png";
import JudgeImage7 from "@/assets/oscar/Avatar7.png";
import JudgeImage8 from "@/assets/oscar/Avatar8.png";
import JudgeImage9 from "@/assets/oscar/Avatar9.png";
import JudgeImage10 from "@/assets/oscar/Avatar10.png";
import JudgeImage11 from "@/assets/oscar/Avatar11.png";
import JudgeImage12 from "@/assets/oscar/Avatar12.png";
import JudgeImage13 from "@/assets/oscar/Avatar13.png";
import JudgeImage14 from "@/assets/oscar/Avatar14.png";
import JudgeImage15 from "@/assets/oscar/Avatar15.png";
import JudgeImage16 from "@/assets/oscar/Avatar16.png";
import JudgeImage17 from "@/assets/oscar/Avatar17.png";
import JudgeImage18 from "@/assets/oscar/Avatar18.png";
import JudgeImage19 from "@/assets/oscar/Avatar19.png";
import JudgeImage20 from "@/assets/oscar/Avatar20.png";
import JudgeImage21 from "@/assets/oscar/Avatar21.png";
import JudgeImage22 from "@/assets/oscar/Avatar22.png";
import JudgeImage23 from "@/assets/oscar/Avatar23.png";
import JudgeImage24 from "@/assets/oscar/Avatar24.png";
import JudgeImage25 from "@/assets/oscar/Avatar25.png";
import JudgeImage26 from "@/assets/oscar/Avatar26.png";
import JudgeImage27 from "@/assets/oscar/Avatar27.png";
import JudgeImage28 from "@/assets/oscar/Avatar28.png";
import JudgeImage29 from "@/assets/oscar/Avatar29.png";
import JudgeImage30 from "@/assets/oscar/Avatar30.png";
import JudgeImage31 from "@/assets/oscar/Avatar31.png";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface IJudgeItem {
  name: string;
  title: string;
  avatar: StaticImageData;
  company: string;
  links: [
    {
      type: number;
      link: string;
    },
    {
      type: number;
      link: string;
    }
  ];
}

const JudgeItem = ({ item }: { item: IJudgeItem }) => {
  return (
    <div className="flex flex-col items-center w-1/2 md:w-[300px] text-typography mt-8">
      <Image
        className="w-4/5 h-4/5 md:w-[140px] md:h-[140px]"
        src={item.avatar}
        alt={item.name}
      />

      <div className="text-oscarActive">{item?.name}</div>
      <div>{item?.title}</div>
      <div>{item?.company}</div>
      <div className="flex justify-center items-center gap-2 mt-4">
        {item.links[0].link && (
          <Link href={item.links[0].link}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" fill="#283344" />
              <path
                d="M13.143 11.0817L17.6107 6H16.5522L12.6711 10.4115L9.5735 6H6L10.6852 12.6715L6 18H7.05857L11.1546 13.3403L14.4265 18H18L13.143 11.0817ZM11.6926 12.7301L11.2172 12.0653L7.44032 6.78088H9.06651L12.1155 11.0472L12.5889 11.7119L16.5517 17.2572H14.9255L11.6926 12.7301Z"
                fill="#B5964D"
                fillOpacity="0.75"
              />
            </svg>
          </Link>
        )}

        {item.links[1].link && (
          <Link href={item.links[1].link}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" fill="#283344" />
              <path
                d="M6.40676 8.5933C6.13539 8.33452 6 8.01435 6 7.6334C6 7.25245 6.13539 6.91783 6.40676 6.65905C6.67813 6.40027 7.02745 6.27087 7.45591 6.27087C7.88436 6.27087 8.21962 6.40027 8.49041 6.65905C8.76178 6.91783 8.89717 7.24282 8.89717 7.6334C8.89717 8.02398 8.76178 8.33452 8.49041 8.5933C8.21904 8.85208 7.87439 8.98147 7.45591 8.98147C7.03742 8.98147 6.67813 8.85208 6.40676 8.5933ZM8.66858 10.0774V18.0076H6.22858V10.0774H8.66858Z"
                fill="#B5964D"
                fillOpacity="0.75"
              />
              <path
                d="M16.7933 10.8604C17.3249 11.4532 17.591 12.2674 17.591 13.3038V17.868H15.2729V13.6257C15.2729 13.1034 15.141 12.6971 14.8773 12.4077C14.6135 12.1182 14.2589 11.9737 13.8135 11.9737C13.368 11.9737 13.0134 12.1188 12.7497 12.4077C12.4859 12.6971 12.354 13.1034 12.354 13.6257V17.868H10.0225V10.0557H12.354V11.0921C12.5902 10.7466 12.9085 10.474 13.3088 10.273C13.7085 10.0726 14.1587 9.97209 14.6587 9.97209C15.5496 9.97209 16.2611 10.2688 16.7927 10.861L16.7933 10.8604Z"
                fill="#B5964D"
                fillOpacity="0.75"
              />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
};

const JUDGE_LIST: IJudgeItem[] = [
  {
    name: "Allan",
    title: "Partners",
    avatar: JudgeImage1,
    company: "MoleDAO",
    links: [
      {
        type: 1,
        link: "https://x.com/Allan_MoleDao",
      },
      {
        type: 1,
        link: "https://www.linkedin.com/in/allanfang/",
      },
    ],
  },
  {
    name: "Gianluca",
    title: "CEO & Co-Founder",
    avatar: JudgeImage2,
    company: "NapulETH",
    links: [
      {
        type: 1,
        link: "",
      },
      {
        type: 1,
        link: "https://www.linkedin.com/in/gdbmoodglobalservices/?utm_source=share&utm_campaign=share_via&utm_conte",
      },
    ],
  },
  {
    name: "Felixsim",
    title: "Founder",
    avatar: JudgeImage28,
    company: "Salad Ventures",
    links: [
      {
        type: 1,
        link: "https://x.com/felixsim",
      },
      {
        type: 1,
        link: "https://www.linkedin.com/in/simfelix",
      },
    ],
  },
  {
    name: "Harn",
    title: "CEO",
    avatar: JudgeImage4,
    company: "Trigger Asset Management",
    links: [
      {
        type: 1,
        link: "https://x.com/TriggerVC",
      },
      {
        type: 1,
        link: "",
      },
    ],
  },
  {
    name: "DanEvseev",
    title: "GP&Founder",
    avatar: JudgeImage5,
    company: "Oversubscribed",
    links: [
      {
        type: 1,
        link: "https://x.com/realdanevseev?s=21&t=ovfRIYIrCm4jwZWnzCspqw",
      },
      {
        type: 1,
        link: "https://www.linkedin.com/in/devseev/",
      },
    ],
  },
  {
    name: "Adam",
    title: "Co-Founder",
    avatar: JudgeImage6,
    company: "Growth Ensemble",
    links: [
      {
        type: 1,
        link: "https://x.com/@adamflinter",
      },
      {
        type: 1,
        link: "https://www.linkedin.com/in/adamflinter/",
      },
    ],
  },
  {
    name: "Milica",
    title: "Program Lead",
    avatar: JudgeImage7,
    company: "PositiveBlockchain",
    links: [
      {
        type: 1,
        link: "https://x.com/milliedeem",
      },
      {
        type: 1,
        link: "https://www.linkedin.com/in/milica-dimitrijevic-a91142ab/",
      },
    ],
  },
  {
    name: "Mickey",
    title: "Founder",
    avatar: JudgeImage8,
    company: "TSUNAGU",
    links: [
      {
        type: 1,
        link: "https://x.com/@amamimickey",
      },
      {
        type: 1,
        link: "",
      },
    ],
  },
  {
    name: "Daniel",
    title: "Portfolio Director",
    avatar: JudgeImage9,
    company: "Trigger Asset Management",
    links: [
      {
        type: 1,
        link: "https://x.com/TriggerVC",
      },
      {
        type: 1,
        link: "",
      },
    ],
  },
  {
    name: "Simon",
    title: "Founding Partner",
    avatar: JudgeImage10,
    company: "Chain Capital",
    links: [
      {
        type: 1,
        link: "https://x.com/@simonli2015",
      },
      {
        type: 1,
        link: "https://www.linkedin.com/in/simonli2022/",
      },
    ],
  },
  {
    name: "KC",
    title: "Investments, Impact Lead",
    avatar: JudgeImage11,
    company: "AYA Foundation",
    links: [
      {
        type: 1,
        link: "https://x.com/litmuspaperu",
      },
      {
        type: 1,
        link: "https://www.linkedin.com/in/ong-kok-chung",
      },
    ],
  },
  {
    name: "Khush",
    title: "Venture Partner",
    avatar: JudgeImage12,
    company: "Lightning Ventures",
    links: [
      {
        type: 1,
        link: "https://x.com/DrKhushboo_K",
      },
      {
        type: 1,
        link: "https://www.linkedin.com/in/dr-khushboo-khullar-38251b43/",
      },
    ],
  },
  {
    name: "Neil",
    title: "Founder&CEO",
    avatar: JudgeImage21,
    company: "Reddio",
    links: [
      {
        type: 1,
        link: "https://x.com/NeilHANYD",
      },
      {
        type: 1,
        link: "",
      },
    ],
  },
  {
    name: "JayKoh",
    title: "Vice President",
    avatar: JudgeImage22,
    company: "Association Blockchain Asia",
    links: [
      {
        type: 1,
        link: "https://x.com/Krypto_JayK",
      },
      {
        type: 1,
        link: "",
      },
    ],
  },
  {
    name: "Adam",
    title: "Venture Partner",
    avatar: JudgeImage23,
    company: "3 Comma Capital SCR",
    links: [
      {
        type: 1,
        link: "https://x.com/@adamwebthree",
      },
      {
        type: 1,
        link: "https://www.linkedin.com/in/adamihsanboon/",
      },
    ],
  },
  {
    name: "Bruce",
    title: "CSO",
    avatar: JudgeImage24,
    company: "Partisia Blockchain Foundation",
    links: [
      {
        type: 1,
        link: "https://x.com/@bruce_pbc",
      },
      {
        type: 1,
        link: "https://linkedin.com/in/ahnbruce",
      },
    ],
  },
  {
    name: "Coco",
    title: "Head Of BD",
    avatar: JudgeImage13,
    company: "MoleDAO",
    links: [
      {
        type: 1,
        link: "",
      },
      {
        type: 1,
        link: "https://www.linkedin.com/in/coriander-coco-38a37b1a5/",
      },
    ],
  },
  {
    name: "Cletus",
    title: "Head Of Operations",
    avatar: JudgeImage14,
    company: "VIA Labs",
    links: [
      {
        type: 1,
        link: "https://x.com/VIA_Labs",
      },
      {
        type: 1,
        link: "https://www.linkedin.com/in/robert-pilat/",
      },
    ],
  },
  {
    name: "Susie",
    title: "Head Of BD",
    avatar: JudgeImage15,
    company: "TARS Protocol",
    links: [
      {
        type: 1,
        link: "https://x.com/@SusieW20823033",
      },
      {
        type: 1,
        link: "",
      },
    ],
  },
  {
    name: "Tommy",
    title: "Managing Director",
    avatar: JudgeImage16,
    company: "Beosin",
    links: [
      {
        type: 1,
        link: "https://x.com/TommyDeng_DAO",
      },
      {
        type: 1,
        link: "https://www.linkedin.com/in/tommydeng0510/",
      },
    ],
  },
  {
    name: "Razali",
    title: "Founder",
    avatar: JudgeImage17,
    company: "Impact Web3",
    links: [
      {
        type: 1,
        link: "https://x.com/Razlosophy",
      },
      {
        type: 1,
        link: "",
      },
    ],
  },
  {
    name: "Glenn",
    title: "Partner",
    avatar: JudgeImage18,
    company: "BGA",
    links: [
      {
        type: 1,
        link: "https://x.com/jg13nn",
      },
      {
        type: 1,
        link: "https://www.linkedin.com/in/jglenntan/",
      },
    ],
  },
  {
    name: "Freya",
    title: "Partner",
    avatar: JudgeImage19,
    company: "BGA",
    links: [
      {
        type: 1,
        link: "https://twitter.com/freyaa_SG",
      },
      {
        type: 1,
        link: "",
      },
    ],
  },
  {
    name: "TY",
    title: "Co-Founder",
    avatar: JudgeImage20,
    company: "AgentLayer",
    links: [
      {
        type: 1,
        link: "https://x.com/eth_tyx",
      },
      {
        type: 1,
        link: "https://www.linkedin.com/in/tyshaosg/",
      },
    ],
  },
  {
    name: "Daniel Zou",
    title: "Incubation Lead & Partner",
    avatar: JudgeImage25,
    company: "BGA",
    links: [
      {
        type: 1,
        link: "https://x.com/blueshirt666",
      },
      {
        type: 1,
        link: "https://www.linkedin.com/in/daniel-zou/",
      },
    ],
  },
  {
    name: "Andrew",
    title: "Founder",
    avatar: JudgeImage26,
    company: "PoP Planet",
    links: [
      {
        type: 1,
        link: "https://x.com/@Hi_PoPPOfficial",
      },
      {
        type: 1,
        link: "",
      },
    ],
  },
  {
    name: "JianingYu",
    title: "President",
    avatar: JudgeImage27,
    company: "Uweb",
    links: [
      {
        type: 1,
        link: "https://x.com/@Uwebdryu",
      },
      {
        type: 1,
        link: "",
      },
    ],
  },
  {
    name: "Ren",
    title: "Growth Marketer",
    avatar: JudgeImage3,
    company: "Eclipse",
    links: [
      {
        type: 1,
        link: "https://x.com/purplepill3m",
      },
      {
        type: 1,
        link: "",
      },
    ],
  },
  {
    name: "Vs",
    title: "Vice President",
    avatar: JudgeImage29,
    company: "XT.com",
    links: [
      {
        type: 1,
        link: "https://x.com/vincetomoon",
      },
      {
        type: 1,
        link: "",
      },
    ],
  },
  {
    name: "Sergiomoralesar",
    title: "Advisor",
    avatar: JudgeImage30,
    company: "Argentine Government",
    links: [
      {
        type: 1,
        link: "https://x.com/@sergiomoralesAR",
      },
      {
        type: 1,
        link: "https://linkedin.com/in/sergiomoralesAR",
      },
    ],
  },
  {
    name: "Fama",
    title: "Founder & Builder",
    avatar: JudgeImage31,
    company: "Metaschool",
    links: [
      {
        type: 1,
        link: "https://x.com/fatimarizwan",
      },
      {
        type: 1,
        link: "https://linkedin.com/in/frizwan",
      },
    ],
  },
];

export const Judge = () => {
  const ref = useIntersectionObserver<HTMLDivElement>(
    homeStyles.moveFromBottom
  );
  return (
    <div id="judges" ref={ref} className={cn("md:w-content w-full")}>
      <h2 className="font-bold text-oscarActive font-['Inter'] mx-auto text-[20px] md:text-[32px] text-center">
        Judges
      </h2>
      <div
        className={cn(
          "md:w-content w-full flex flex-wrap relative px-2 md:px-0"
        )}
      >
        {JUDGE_LIST?.map((item, index) => {
          return <JudgeItem item={item} key={index} />;
        })}
      </div>
    </div>
  );
};
