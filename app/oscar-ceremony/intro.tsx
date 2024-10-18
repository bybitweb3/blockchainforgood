import { Award } from "./award";
import { Chains } from "./chains";
import { FAQ } from "./faq";
import { Hash } from "./hash";
import { Partners } from "../oscar/Partners";
import { SubmissionProcess } from "./submission-process";
import { Sponsors } from "../oscar/Sponsors";

export function Intro() {
  return (
    <div className="bg-oscarBlack pt-4 md:pt-8 w-full mx-auto space-y-8">
      <Hash />
      <Chains />
      <SubmissionProcess />
      <Award />
      <Sponsors />
      <Partners />
      <FAQ />
    </div>
  );
}
