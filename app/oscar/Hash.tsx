import AgendaImage from "@/assets/oscar-ceremony/agenda.png";
import JudgeImage from "@/assets/oscar/Judge.webp";
import RocketImage from "@/assets/oscar/Rocket.webp";
import PartnerImage from "@/assets/oscar-ceremony/partner.png";
import FAQImage from "@/assets/oscar-ceremony/faq.png";
import Image from "next/image";
import Link from "next/link";
import styles from "../oscar-ceremony/index.module.css";
import { cn } from "@/lib";

const HASH_LIST = [
  {
    label: "Projects",
    image: RocketImage,
    hash: "#projects",
  },
  {
    label: "Agenda",
    image: AgendaImage,
    hash: "#agenda",
  },
  {
    label: "Judges",
    image: JudgeImage,
    hash: "#judges",
  },
  {
    label: "Partners",
    image: PartnerImage,
    hash: "#partner",
  },
  {
    label: "Q&A",
    image: FAQImage,
    hash: "#faq",
  },
] as const;

export function Hash() {
  return (
    <div className="w-full sticky top-0 z-50 bg-oscarBlack">
      <div className="mx-auto w-full md:w-content grid grid-cols-3 md:grid-cols-5">
        {HASH_LIST.map((hash) => (
          <Link href={hash.hash}>
            <div
              key={hash.label}
              className={cn(
                "text-description flex justify-center items-center gap-2 py-3",
                styles.hash
              )}
            >
              <Image className="w-5" src={hash.image} alt={hash.label} />
              <span className="text-xl">{hash.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
