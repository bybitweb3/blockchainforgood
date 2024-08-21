"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib";

export function What() {
  const ref = useIntersectionObserver<HTMLDivElement>("animate__bounceInLeft");
  return (
    <div
      ref={ref as any}
      className={cn(
        "w-full max-w-3xl mx-auto text-center space-y-2 animate__animated"
      )}
      style={
        {
          "--animate-duration": "1.2s",
        } as any
      }
    >
      <h2 className="text-3xl font-bold">What</h2>
      <h3 className="text-3xl font-bold text-main">Care. Create. Change.</h3>
      <p className="text-typography">
        At Blockchain for Good Alliance (BGA). we believe in the transformative
        potential of blockchain technology to address some of the most pressing
        challenges facing our society.
      </p>
      <p className="text-typography">
        Our alliance serves as a collaborative hub, bringing together a diverse
        range of stakeholders to collectively explore, innovate and implement
        blockchain solutions for social good.
      </p>
    </div>
  );
}
