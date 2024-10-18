"use client";

import { useState, useEffect } from "react";

const XS_WIDTH = 480;
const MD_WIDTH = 768;
const LG_WIDTH = 1024;

const INITIAL_SCREEN_SIZE = -1;

export function useScreen() {
  // use client;
  const [screenSize, setScreenSize] = useState(INITIAL_SCREEN_SIZE);

  useEffect(() => {
    setScreenSize(window.innerWidth);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    isMobile: screenSize <= XS_WIDTH,
    isTablet: screenSize > XS_WIDTH && screenSize <= MD_WIDTH,
    isDesktop: screenSize > MD_WIDTH,
  };
}
