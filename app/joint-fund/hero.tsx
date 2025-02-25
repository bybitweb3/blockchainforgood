import HeroImage from "@/assets/joint-fund/hero.jpeg";
import Image from "next/image";

export function Hero() {
  return (
    <div className="w-full relative">
      <Image src={HeroImage} alt="Hero" className="w-full aspect-video" />
      <Content />
    </div>
  );
}

function Content() {
  return (
    <div className="w-full max-w-desktop mx-auto absolute inset-0">
      <div className="w-full h-full md:p-10 flex flex-col justify-between">
        <h2 className="text-white font-bold text-[80px] md:pt-32">
          BGA Joint Fund Programme
        </h2>
        <p className="text-white text-2xl">
          BGA Incubation is dedicated to empowering projects that harness
          blockchain technology to tackle real-world challenges. We offer
          expertise, resources, branding, and market support to help innovative
          solutions thrive and make a meaningful impact.
        </p>
      </div>
    </div>
  );
}
