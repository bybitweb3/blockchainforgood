"use client";

import { TopTen } from "./top-ten";
import { Spotlight } from "./spotlight";
import { Highlights } from "./hightlights";

export const Challenge = () => {
  return (
    <section className="w-full bg-oscarBlack flex flex-col gap-8 items-center pt-4 md:pt-8">
      <TopTen />
      <Highlights />
      <Spotlight />
    </section>
  );
};
