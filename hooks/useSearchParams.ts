"use client";

import { useSearchParams as useSearchParamsRoot } from "next/navigation";

export function useSearchParams<Key extends string>() {
  const searchParams = useSearchParamsRoot();
  const get = (key: string) => searchParams.get(key);
  const result = {} as Record<Key, string | null>;
  for (const key of searchParams.keys()) {
    result[key as Key] = get(key);
  }
  return result;
}
