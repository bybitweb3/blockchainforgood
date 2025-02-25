import { List } from "./list";
import { Form } from "./form";
import { Suspense } from "react";
import { Loading } from "@/components/Loading";

export function HackathonList() {
  return (
    <div className="w-full md:w-content mx-auto py-10">
      <h3 className="text-center text-2xl font-bold text-main">
        Innovate, Collaborate, Impact
      </h3>
      <h2 className="text-3xl font-bold text-black text-center mb-12">
        Join Our Blockchain for Good Hackathon
      </h2>
      <div className="flex gap-4 flex-col lg:flex-row">
        <div className=" w-full lg:w-2/3">
          <List />
        </div>
        <div className="w-full lg:w-1/3 h-[360px] md:mt-[4.625rem] relative md:sticky md:top-4">
          <Form />
        </div>
      </div>
    </div>
  );
}
