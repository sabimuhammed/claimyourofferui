"use client";

import { useState, useEffect, useRef } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function PageHeader() {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <header className="pt-2 px-8 pb-0 flex items-center justify-center shrink-0">
      <div className="flex flex-col items-center w-full py-2">
        <div className="relative h-13 flex items-center justify-center" style={{ width: 220 }}>
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Skeleton width={180} height={30} borderRadius={8} />
            </div>
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={imgRef}
            src="/samsunglogo.png"
            alt="Samsung"
            onLoad={() => setLoaded(true)}
            className={`h-13 w-auto object-contain transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
          />
        </div>
        {/* <div className="h-px w-16 bg-slate-200 mt-2 rounded-full" /> */}
      </div>
    </header>
  );
}
