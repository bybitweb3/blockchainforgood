"use client";

export function Candidates() {
  return (
    <div className="w-full bg-white pb-10 md:pb-14">
      <div className="w-full max-w-desktop mx-auto">
        <h2 className="text-black font-bold text-[120px] leading-[1.1] p-10 text-center">
          Programme
        </h2>
        <List />
      </div>
    </div>
  );
}


import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib";
import { IItem, list, STATUS } from "./data";
import { useRouter } from "next-nprogress-bar";
import { ROUTER_PATH } from "@/constants/router";

function List() {
  return (
    <div>
      {list.map((item) => (
        <Item key={item.id} item={item} />
      ))}
      <div className="flex justify-center mt-10 md:mt-20">
        <span className="text-base font-semibold border border-black py-3 px-4 inline-flex gap-2 mx-auto">
          Apply to Collaberate
          <ArrowUpRightIcon className="w-6 h-6" />
        </span>
      </div>
    </div>
  );
}

function Item({ item }: { item: IItem }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`${ROUTER_PATH.JOINT_FUND}/${item.id}`)}
      className="cursor-pointer text-black p-10 border-b border-black flex justify-between items-start md:items-end gap-2 md:gap-4 hover:bg-[#ececee] group"
    >
      <div className="flex items-center justify-between gap-2 md:gap-4 w-full">
        <div className="space-y-8 md:space-y-28">
          <div className="space-y-3">
            <Status status={item.status} />
            <h3 className="text-5xl font-bold">{item.name}</h3>
          </div>
          <div className="flex gap-4 flex-wrap">
            {item.parents.slice(0, 4).map((parent: any) => (
              <Image
                src={parent}
                alt="parent"
                className="h-10 shrink-0 grow-0"
                height={40}
              />
            ))}
          </div>
        </div>
        <Image
          src={item.cover}
          alt="cover"
          className="max-w-40 h-40 object-cover"
        />
      </div>

      <div className="flex justify-between items-center">
        <span className="hidden md:inline-flex cursor-pointer text-base font-semibold border border-black py-3 px-4  gap-2 shrink-0 grow-0 group-hover:bg-black group-hover:text-white transition-all duration-300">
          More
          <ArrowUpRightIcon className="w-6 h-6" />
        </span>
        <ArrowUpRightIcon className="w-6 h-6 cursor-pointer md:hidden" />
      </div>
    </div>
  );
}


const classMap: Record<number, string> = {
  0: "border border-black text-black",
  1: "bg-black text-white",
  2: "bg-[#d6d6d7] text-typography",
};
function Status({ status }: { status: number }) {
  return <div className={cn("text-base font-bold py-1 px-2 inline-block", classMap[status])}>{STATUS[status]}</div>;
}
