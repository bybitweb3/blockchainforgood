"use client";

import { Banner } from "./Banner";
import { OscarIntro } from "./OscarIntro";
import { OscarCeremony } from "../oscar-ceremony";
import { Hero } from "./hero";
import { useState } from "react";

export function OscarWrapper() {
  const [showCeremony, setShowCeremony] = useState(false);
  return (
    <div>
      {/* <Banner /> */}
      <Hero onChange={setShowCeremony} />
      {showCeremony && <OscarCeremony />}
      {!showCeremony && <OscarIntro />}
    </div>
  );
}
