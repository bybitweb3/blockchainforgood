import Image from "next/image";
import BGImage from "@/assets/joint-fund/detail-bg.png";
import CalendarCheckImage from "@/assets/joint-fund/calendar-check.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface IProps {
  name: string;
  description: string;
  date: string;
  link: string;
}

export function Hero({ name, description, date, link }: IProps) {
  return (
    <div className="relative">
      <Image
        src={BGImage}
        alt="Hero"
        className="w-full h-full max-h-[75vh] object-cover"
      />
      <Content name={name} description={description} date={date} link={link} />
    </div>
  );
}

function Content({ name, description, date, link }: IProps) {
  return (
    <>
      <div className="absolute inset-0 z-10">
        <div className="max-w-desktop mx-auto p-4 md:p-10 h-full flex gap-4">
          <div className="flex flex-col justify-between w-full md:w-1/2">
            <div className="space-y-5">
              <h1 className="text-[80px] font-bold leading-[1.1]">{name}</h1>
              <Button
                className="bg-black hover:bg-white hover:text-black transition-colors rounded-none"
                asChild
              >
                <Link href={link} target="_blank">
                  Registration
                </Link>
              </Button>
            </div>
            <div className="hidden md:flex md:items-center md:gap-2 text-2xl font-bold text-white">
              <Image
                src={CalendarCheckImage}
                alt="Calendar"
                className="w-7 h-7"
                width={28}
                height={28}
              />
              {date}
            </div>
          </div>
          <div className="hidden md:flex md:items-end md:w-1/2">
            <div className="p-10 bg-black/40 translate-x-10 translate-y-10">
              <p className="text-white text-2xl">{description}</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-description py-5 px-4 block md:hidden">
        {description}
      </p>
    </>
  );
}
