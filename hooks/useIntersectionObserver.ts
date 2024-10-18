"use client";

import { useEffect, useRef, useState } from "react";

export function useIntersectionObserver<T extends Element>(
  className: string,
  options: IntersectionObserverInit = {}
) {
  const ref = useRef<T>();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  useEffect(() => {
    if (isVisible) {
      ref.current.classList.add(className);
    }
  }, [isVisible]);

  return ref;
}
