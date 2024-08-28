"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BGAIconGreen from "@/assets/BGA Icon Green.png";
import Image from "next/image";
import CountUp from "react-countup";
import { useAPIGetList } from "./api";
import { IMAGE_URL } from "@/constants";
import { Skeleton } from "@/components/ui/skeleton";

function VideoCard() {
  return (
    <Card className="row-span-2 md:row-span-1">
      <CardContent>Video</CardContent>
    </Card>
  );
}

const KeyDataList = [
  {
    label: "BGA Hackathon",
    value: 40,
  },
  {
    label: "BGA Tracks",
    value: 12,
  },
  { label: "BGA Hackathon projects", value: 70 },
];
function KeyData() {
  return (
    <>
      {KeyDataList.map((item) => (
        <Card key={item.label} className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle className="text-5xl">
              <CountUp start={1} end={item.value} /> +
            </CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold">
            {item.label}
          </CardContent>
        </Card>
      ))}
    </>
  );
}

function Collaborate() {
  return (
    <Card
      className="row-span-2 text-white hidden md:block"
      style={{
        background:
          "linear-gradient(52.16deg, #02CCB7 19.41%, #47E6D6 74.15%, #8DF7EC 97.6%)",
      }}
    >
      <CardHeader>
        <CardTitle className="text-4xl flex flex-wrap gap-2 items-center">
          <span>Collaborate</span>
          <Image
            className="flex-shrink-0 flex-grow-0 w-8 h-8"
            src={BGAIconGreen}
            alt="BGA Icon Green"
            width={32}
            height={32}
          />
          <span>with BGA</span>
        </CardTitle>
      </CardHeader>
    </Card>
  );
}

function Nations() {
  return (
    <Card className="md:row-span-2 flex flex-col justify-between">
      <CardHeader>
        <CardTitle className="text-5xl">
          <CountUp start={1} end={4} />
        </CardTitle>
      </CardHeader>
      <CardContent className="text-2xl font-semibold">
        Illuminated Nations
      </CardContent>
    </Card>
  );
}

function LatestHackathon() {
  const {
    data: { list } = {
      total: 0,
      list: [],
    },
    error,
    isLoading,
  } = useAPIGetList();
  if (isLoading || list.length === 0) {
    return <Skeleton className="xs:col-span-2 row-span-2" />;
  }
  const latestHackathon = list[0];
  return (
    <Card className="xs:col-span-2 row-span-2">
      <img
        src={`${IMAGE_URL}${latestHackathon.cover}`}
        alt={latestHackathon.name}
        className="h-full aspect-video object-cover"
      />
    </Card>
  );
}

export function Focus() {
  return (
    <div className="w-full md:w-content mx-auto space-y-6 pb-20">
      <h1 className="text-3xl font-bold text-center md:text-left">
        Blockchain for Good Hackathon
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 grid-rows-8 md:grid-rows-3">
        <VideoCard />
        <KeyData />
        <Collaborate />
        <Nations />
        <LatestHackathon />
      </div>
    </div>
  );
}