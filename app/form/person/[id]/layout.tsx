import { BGA_PROD_HOST_URL, OSCAR_EVENT_ID, OSCAR_HACKTHON_EVENT_ID } from "@/constants";
import { Metadata } from "next";
import ShareBgImage from "@/assets/oscar/form-share.jpeg";

interface IProps {
  params: { id: string };
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  const { id } = params;
  // if (id !== OSCAR_HACKTHON_EVENT_ID && id === OSCAR_EVENT_ID) {
  //   return null;
  // }
  const coverImage = BGA_PROD_HOST_URL + ShareBgImage.src;
  const name = "Blockchain for Good";
  const description =
    "Discover Blockchain for Good Alliance (BGA) and our mission to leverage blockchain technology for social impact. Join us to explore, innovate, and implement blockchain solutions for societal challenges.";
  return {
    twitter: {
      card: "summary_large_image",
      title: name,
      creator: "@chainforgood",
      site: "@chainforgood",
      description: description,
      images: [
        {
          url: coverImage,
          alt: name,
        },
      ],
    },
    openGraph: {
      title: name,
      description: description,
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
