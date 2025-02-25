"use client";

import { useParams } from "next/navigation";
import { getItemById } from "../data";
import { Hero } from "./hero";
import { Partners } from "./partners";
import { KeyObjective } from "./key-objective";
import { Responsibility } from "./responsibility";
import { Outcome } from "./outcome";
import { NextStep } from "./next-step";
import { Faq } from "./faq";
import { Toc } from "./toc";
import { Scope } from "./scope";

export default function JointFundIdPage() {
  const { id } = useParams<{ id: string }>();
  const item = getItemById(id);
  return (
    <div className="bg-incubation w-full text-white">
      <Hero
        name={item.name}
        description={item.description}
        date={item.date}
        link={item.link}
      />
      <Partners partners={item.parents} />
      <div className="relative w-full max-w-desktop mx-auto flex flex-col md:flex-row gap-4 md:gap-10">
        <Toc link={item.link} />
        <div className="space-y-4 md:space-y-10 w-full flex-auto">
          <KeyObjective content={item.keyObjective} />
          <Scope content={item.scope} />
          <Responsibility content={item.responsibility} />
          <Outcome content={item.outcome} />
          <NextStep content={item.nextStep} />
          <Faq list={item.faq} />
        </div>
      </div>
    </div>
  );
}
