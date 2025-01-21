import EmailImage from "@/assets/incubation/email.png";
import TelegramImage from "@/assets/incubation/telegram.png";
import { BGA_EMAIL } from "@/constants";
import Image from "next/image";

export function ContactUs() {
  return (
    <div className="py-8 md:py-16 w-full" style={{ background: "#ECECEE" }}>
      <div className="w-full mx-auto md:w-content">
        <h2 className="font-bold text-3xl text-center mb-4 md:mb-8">
          Contact Us
        </h2>
        <div className="w-full md:w-3/5 md:mx-auto flex flex-col md:flex-row justify-center md:justify-around gap-4 md:gap-0">
          <a
            className="inline-flex items-center justify-center gap-1"
            href="https://t.me/shirtblue666"
            target="_blank"
          >
            <Image
              src={TelegramImage}
              alt="Telegram"
              className="p-2"
              width={32}
              height={32}
            />
            Telegram 
          </a>
          <a
            className="inline-flex items-center justify-center gap-2"
            href={`mailto:${BGA_EMAIL}`}
            target="_blank"
          >
            <Image
              src={EmailImage}
              alt="Email"
              className="p-2"
              width={32}
              height={32}
            />
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
