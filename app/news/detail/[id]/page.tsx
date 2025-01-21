import { getNewsDetail, updateNewsViews } from "../../api";
import { BGA_PROD_HOST_URL, IMAGE_URL } from "@/constants";
import { GoBack } from "./back";
import { Metadata } from "next";
import { Content } from "./content";

interface IProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const data = (await getNewsDetail(id)).data;

  const { name, intro, cover } = data;

  const coverImage = `${IMAGE_URL}${cover}`;

  return {
    title: name,
    description: intro,
    twitter: {
      card: "summary_large_image",
      title: name,
      creator: "@chainforgood",
      site: "@chainforgood",
      description: intro,
      images: [
        {
          url: coverImage,
          alt: name,
        },
      ],
    },
    openGraph: {
      title: name,
      description: intro,
      url: `${BGA_PROD_HOST_URL}/news/detail/` + id,
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

export default async function Detail({ params }: IProps) {
  // read route params
  const id = params.id;

  // fetch data
  const data = (await getNewsDetail(id)).data;
  // update news detail view
  updateNewsViews(id);

  return (
    <div className="w-full md:w-content mx-auto">
      <GoBack />
      <Content data={data} />
    </div>
  );
}
