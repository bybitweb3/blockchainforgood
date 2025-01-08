"use client";

import { useParams } from "next/navigation";
import { useAPIGetEventApproveList } from "../api";
import { EventsApproveEntity } from "../types";
import { RawImage } from "@/components/Image";
import { cn } from "@/lib";
import { TagEntity } from "@/app/square/types";
import { Button } from "@/components/ui";
import DemoImage from "@/assets/hackathon/demo.png";
import GithubImage from "@/assets/hackathon/github.png";
import ArrowImage from "@/assets/hackathon/arrow-down-right-sm.png";
import Image from "next/image";
import { useGithubLink, useIsMobile } from "@/hooks";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useState } from "react";
import { EventsRoleValue } from "@/app/square/types";
import { Skeleton } from "@/components/ui/skeleton";

export function Candidates() {
  return (
    <div className="bg-incubation pt-14 pb-32 px-6 md:px-10">
      <div className="w-full max-w-content mx-auto">
        <h2 className="text-white font-bold text-5xl py-14">Candidates</h2>
        <List />
      </div>
    </div>
  );
}

function List() {
  const { id } = useParams<{ id: string }>();

  const { isLoading, data: { list } = { list: [], total: 0 } } =
    useAPIGetEventApproveList({
      events: id,
      roleType: EventsRoleValue.PROJECT,
    });

  if (isLoading) {
    return <SkeletonCandidate />;
  }

  return (
    <div className="">
      {list.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
}

function Item({ item }: { item: EventsApproveEntity }) {
  const { organization } = item;

  const { logo, name, tags } = organization;

  const isMobile = useIsMobile();

  const [open, setOpen] = useState(false);
  const onShowVisit = (val: boolean) => {
    if (!isMobile) return;
    setOpen(val);
  };

  return (
    <Drawer open={open} onOpenChange={onShowVisit}>
      <DrawerTrigger asChild>
        <div
          className={cn(
            "py-6 md:py-10 border-b border-white hover:bg-[#00d5bf] hover:!border-t-0 hover:!border hover:border-solid hover:!border-[#00d5bf]",
            "flex md:justify-between items-start md:items-center group flex-col-reverse md:flex-row gap-4"
          )}
        >
          <RawImage src={logo} alt={name} className="h-14 object-contain" />
          <Tags tags={tags} />
          <Links organization={organization} />
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-start text-xl font-bold">
            Visit...
          </DrawerTitle>
        </DrawerHeader>
        <LinksMobile organization={organization} />
      </DrawerContent>
    </Drawer>
  );
}

function Tags({ tags = [] }: { tags: TagEntity[] }) {
  return (
    <div className="w-full md:w-auto flex items-center justify-between">
      <div className="flex gap-4 md:group-hover:hidden flex-wrap">
        {tags.map((tag) => (
          <span
            key={tag.id}
            className="text-xs md:text-sm border border-white py-1 px-2 md:py-2 md:px-4 text-white font-normal whitespace-nowrap"
          >
            {tag.name}
          </span>
        ))}
      </div>
      <Image className="inline-block md:hidden" src={ArrowImage} alt="arrow" />
    </div>
  );
}

function Links({
  organization,
}: {
  organization: EventsApproveEntity["organization"] & { demo?: string };
}) {
  const { demo, links } = organization;
  const onVisitDemo = () => {
    demo && window.open(demo, "_blank");
  };
  const githubLink = useGithubLink(links);
  const onVisitGithub = () => {
    githubLink && window.open(githubLink, "_blank");
  };
  return (
    <div className="hidden gap-4 md:group-hover:flex">
      <Button className="text-black" onClick={onVisitDemo}>
        <Image src={DemoImage} alt="demo" className="mr-2" />
        Demo
      </Button>
      <Button className="text-black" onClick={onVisitGithub}>
        <Image src={GithubImage} alt="github" className="mr-2" />
        Github
      </Button>
    </div>
  );
}

function LinksMobile({
  organization,
}: {
  organization: EventsApproveEntity["organization"] & { demo?: string };
}) {
  const { demo, links } = organization;
  const onVisitDemo = () => {
    demo && window.open(demo, "_blank");
  };

  const githubLink = useGithubLink(links);
  const onVisitGithub = () => {
    githubLink && window.open(githubLink, "_blank");
  };
  return (
    <div className="text-black text-lg font-semibold">
      <div
        className="flex gap-2 cursor-pointer p-4 hover:bg-[#ECECEE] active:bg-[#ECECEE]"
        onClick={onVisitDemo}
      >
        <Image src={DemoImage} alt="demo" className="w-6 h-6" />
        Demo
      </div>
      <div
        className="flex gap-2 cursor-pointer p-4 hover:bg-[#ECECEE] active:bg-[#ECECEE]"
        onClick={onVisitGithub}
      >
        <Image src={GithubImage} alt="github" className="w-6 h-6" />
        Github
      </div>
    </div>
  );
}

function SkeletonCandidate() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-36" />
      <Skeleton className="h-36" />
      <Skeleton className="h-36" />
    </div>
  );
}
