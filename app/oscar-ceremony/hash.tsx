import AgendaImage from "@/assets/oscar-ceremony/agenda.png";
import AwardImage from "@/assets/oscar-ceremony/award.png";
import PartnerImage from "@/assets/oscar-ceremony/partner.png";
import FAQImage from "@/assets/oscar-ceremony/faq.png";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import { cn } from "@/lib";

const HASH_LIST = [
  {
    label: "Agenda",
    image: AgendaImage,
    hash: "#agenda",
  },
  {
    label: "Award",
    image: AwardImage,
    hash: "#award",
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
    <div className="w-full md:w-content mx-auto grid grid-cols-2 md:grid-cols-4 sticky top-0 z-50 bg-oscarBlack">
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
  );
}
