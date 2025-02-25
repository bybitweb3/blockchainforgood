"use client";

import { useParams } from "next/navigation";
import { useAPIGetEventApproveList } from "../api";
import { EventsApproveEntity } from "../types";
import { RawImage } from "@/components/Image";
import { TagEntity } from "@/app/square/types";
import { EventsRoleValue } from "@/app/square/types";
import styles from "./index.module.css";
import { cn } from "@/lib";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "motion/react";

export function Awards() {
  const { id } = useParams<{ id: string }>();

  const { isLoading, data: { list } = { list: [], total: 0 } } =
    useAPIGetEventApproveList({
      events: id,
      roleType: EventsRoleValue.RESULT_ORG,
      email: 1,
    });

  if (isLoading) {
    return <SkeletonAwards />;
  }

  if (list.length === 0) {
    return null;
  }

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeIn" }}
    >
      <div
        className={cn(
          "w-full max-w-content mx-auto py-14 flex flex-col md:flex-row gap-6"
        )}
      >
        <Title />
        <List list={list} />
      </div>
      <div
        className={cn(
          styles.awards,
          "absolute inset-0 opacity-5 pointer-events-none"
        )}
      />
    </motion.div>
  );
}

function Title() {
  return (
    <div className="w-full md:w-80 text-center text-black text-3xl md:text-5xl font-bold pb-6">
      Awards
    </div>
  );
}

function List({ list }: { list: EventsApproveEntity[] }) {
  return (
    <div className="w-full space-y-6 md:space-y-0 px-4">
      {list.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
}

function Item({ item }: { item: EventsApproveEntity }) {
  const { organization, diyform } = item;
  const { tags } = organization;

  const formData = diyform ? JSON.parse(diyform) : {};

  const { name, assets, award } = formData;

  const firstAsstes = assets;
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-black pb-4 md:pb-0 border-b border-black group">
      <div className="space-y-4">
        <Tags tags={tags} />
        <h3 className="text-block font-bold text-[28px] md:text-[32px] leading-[1.1] !mb-8">{name}</h3>
        <div className="flex items-center gap-4">
          <div className="flex gap-1 items-center">
            <RawImage
              src={organization.logo}
              alt={organization.name}
              className="h-4"
            />
            <span className="text-sm">{organization.name}</span>
          </div>
          <span className="w-[1px] h-3 bg-black shrink-0 grow-0"></span>
          <div className="font-semibold">
            Prize Worth
            <span className="ml-2 py-1 px-2 bg-[#00d5bf]">{award}</span>
          </div>
        </div>
      </div>
      {firstAsstes && (
        <RawImage
        src={firstAsstes}
        className="w-full md:w-[400px] h-[254px] opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
      />
      )}
    </div>
  );
}

function Tags({ tags = [] }: { tags: TagEntity[] }) {
  return (
    <div className="flex gap-4 flex-wrap">
      {tags.slice(0, 3).map((tag) => (
        <span
          key={tag.id}
          className="text-xs md:text-sm border border-black py-1 px-2 md:py-2 md:px-4 text-black font-semibold whitespace-nowrap group-hover:bg-black group-hover:text-white transition-colors duration-300 ease-in-out"
        >
          {tag.name}
        </span>
      ))}
    </div>
  );
}

function SkeletonAwards() {
  return (
    <div className="w-full space-y-6 px-4">
      <Skeleton className="h-64" />
      <Skeleton className="h-64" />
      <Skeleton className="h-64" />
    </div>
  );
}
