"use client";

import { IMAGE_URL } from "@/constants";
import { useAPIGetList } from "../api";
import { EventsEntity } from "../types";
import Image from "next/image";
import LocationImage from "@/assets/location.png";
import { SkeletonList } from "./skeleton";
import { cn } from "@/lib";
import { useMemo } from "react";

export function List() {
  const {
    data: { list: events } = {
      total: 0,
      list: [],
    },
    isLoading,
  } = useAPIGetList();

  if (isLoading) {
    return <SkeletonList />;
  }

  return (
    <div>
      {events && events.length > 0 && (
        <div className="space-y-6 divide-y divide-gray-300">
          {events.map((item, index) => (
            <HackathonItem
              key={item.id}
              item={item}
              className={index > 0 ? "pt-6" : ""}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function HackathonItem({
  item,
  className,
}: {
  item: EventsEntity;
  className?: string;
}) {
  const { location, assets } = item;

  const locationObj = location ? JSON.parse(location) : {};
  const rawAssetsList = [...parseAssets(assets), item.cover];
  const assetsList: string[] = rawAssetsList.slice(1, 3);

  const firstAssets = rawAssetsList[0];

  const isSingleImage = assetsList.length === 0;

  const isHalfImage = assetsList.length === 1;

  return (
    <div className={cn("mx-4 md:mx-0", className)}>
      <p className="flex text-base items-center text-main gap-1 font-semibold truncate ">
        <Image
          alt="location w-8 h-8"
          width={32}
          height={32}
          src={LocationImage}
        />
        {locationObj.area}
      </p>
      <h3 className="text-leading font-bold">{item.name}</h3>
      <div
        className={cn(
          "grid grid-cols-2 md:grid-cols-3 gap-4 grid-row-2 md:grid-row-3",
          isHalfImage && "md:grid-cols-2"
        )}
      >
        <img
          src={`${IMAGE_URL}${firstAssets}`}
          alt={item.name}
          className={cn(
            "row-span-2 col-span-2 w-full aspect-video object-cover",
            isSingleImage && "col-span-3",
            isHalfImage && "col-span-1"
          )}
        />
        {assetsList.map((asset, index) => (
          <img
            key={asset}
            src={`${IMAGE_URL}${asset}`}
            alt={asset}
            className={cn(
              "w-full aspect-video object-cover col-span-1",
              isHalfImage && "row-span-2 col-span-1"
            )}
          />
        ))}
      </div>
    </div>
  );
}

function parseAssets(assets: string) {
  if (!assets) return [];
  try {
    return JSON.parse(assets);
  } catch (error) {
    return [assets];
  }
}
