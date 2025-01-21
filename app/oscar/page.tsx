import { Metadata } from "next";
import ShareBgImage from "@/assets/oscar/share-bg.jpeg";
import { OscarWrapper } from "./wrapper";
import { BGA_PROD_HOST_URL } from "@/constants";

export default function Oscar() {
  return <OscarWrapper />;
}

export async function generateMetadata(): Promise<Metadata> {
  const coverImage = BGA_PROD_HOST_URL + ShareBgImage.src;
  const name = "BGA Oscar";
  const desc =
    "Discover Blockchain for Good Alliance (BGA) and our mission to leverage blockchain technology for social impact. Join our web3 Oscar (BGA Oscar).";
  return {
    title: name,
    description: desc,
    keywords: ["web3 Oscar", "web3.0 Oscar", "BGA Oscar"],
    twitter: {
      card: "summary_large_image",
      title: name,
      creator: "@chainforgood",
      site: "@chainforgood",
      description: desc,
      images: [
        {
          url: coverImage,
          alt: name,
        },
      ],
    },
    openGraph: {
      title: name,
      description: desc,
      url: `${BGA_PROD_HOST_URL}/oscar`,
      images: [
        {
          url: coverImage,
          alt: name,
        },
      ],
      type: "website",
    },
  };
}
