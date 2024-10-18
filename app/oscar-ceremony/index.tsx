import { cn } from "@/lib";
import { Intro } from "./intro";
import styles from "./index.module.css";

export function OscarCeremony() {
  return (
    <div className={cn("w-full", styles["oscar-ceremony"])}>
      <Intro />
    </div>
  );
}
