import { cn } from "@/lib";
import { Hero } from "./hero";
import { Intro } from "./intro";
import styles from "./index.module.css";

export default function OscarCeremony() {
  return (
    <div className={cn("w-full", styles["oscar-ceremony"])}>
      <Hero />
      <Intro />
    </div>
  );
}
