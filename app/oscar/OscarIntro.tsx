"use client";

import { Evaluation } from "./Evaluation";
import { OscarFAQ } from "./FAQ";
import { Hash } from "./Hash";
import { Judge } from "./Judge";
import { Partners } from "./Partners";
import { Prizes } from "./Prize";
import { Sponsors } from "./Sponsors";
import { SubmissionProcess } from "./SubmissionProcess";
import { SummitInto } from "./SummitIntro";
import { Vote } from "./Vote";

export const OscarIntro = () => {
  return (
    <section className="w-full bg-oscarBlack flex flex-col gap-8 items-center pt-4 md:pt-8">
      <Hash />
      <Vote />
      <SummitInto />
      <Prizes />
      <SubmissionProcess />
      <Judge />
      <Evaluation />
      <Sponsors />
      <Partners />
      <OscarFAQ />
    </section>
  );
};
