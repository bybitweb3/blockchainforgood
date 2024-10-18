"use client";

import { useCallback, useState } from "react";

export const useUpdate = () => {
  const [, setState] = useState<number>(0);

  return useCallback(() => setState((c) => c + 1), []);
};
