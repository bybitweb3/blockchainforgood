import Image from "next/image";
import P1Image from "@/assets/joint-fund/p1.png";
import P2Image from "@/assets/joint-fund/p2.png";
import P3Image from "@/assets/joint-fund/p3.png";
import P4Image from "@/assets/joint-fund/p4.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { IItem } from "../data";

export function Partners({ partners }: { partners: IItem["parents"] }) {
  return (
    <div className="py-10">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          duration: 40,
          watchDrag: false,
          watchFocus: false,
          watchResize: false,
          watchSlides: false,
        }}
        plugins={[
          AutoScroll({
            playOnInit: true,
            stopOnMouseEnter: true,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent className="gap-10">
          {partners.map((partner, index) => (
            <CarouselItem className="w-32 basis-auto" key={index}>
              <Image src={partner} alt={`Partner ${index + 1}`} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
