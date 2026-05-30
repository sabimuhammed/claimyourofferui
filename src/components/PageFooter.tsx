"use client";

import { useState, useEffect, useRef } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function PageFooter() {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <footer className="px-8 pt-6 pb-8 border-t border-slate-100 bg-white flex flex-col items-center shrink-0">
      <div className="flex flex-col items-center mb-5">
        <div className="relative flex items-center justify-center mb-1" style={{ height: 64, width: 44 }}>
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Skeleton width={44} height={64} borderRadius={8} />
            </div>
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={imgRef}
            src="/freedrops.png"
            alt="FreeDrops"
            onLoad={() => setLoaded(true)}
            className={`h-16 w-11 object-contain transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
          />
        </div>
        <p className="text-sm font-extrabold text-slate-800 tracking-tight leading-none">
          FreeDrops<span className="text-[#a8201a]">.</span>ae
        </p>
        {/* <p className="text-[8px] font-black text-slate-400 tracking-[0.28em] uppercase mt-1">Powered by FreeDrops</p> */}
      </div>
      <nav className="flex items-center gap-5 mb-5">
        <a href="https://freedrops.ae/" target="_blank" rel="noreferrer" className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em] hover:text-[#a8201a] transition-colors">About</a>
        <div className="w-1 h-1 rounded-full bg-slate-300" />
        <a href="https://freedrops.ae/terms" target="_blank" rel="noreferrer" className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em] hover:text-[#a8201a] transition-colors">Terms of Service</a>
      </nav>
      <p className="text-[9px] font-semibold text-slate-300 uppercase tracking-widest text-center">
        © 2026 Free Water Advertising L.L.C. All rights reserved.
      </p>
        <p className="pb-6 pt-2 text-center">

      <a href="https://bcwebco.com/" target="_blank" rel="noreferrer" className="mt-1 text-[10px] font-bold text-slate-400 uppercase tracking-widest transition-colors duration-200 hover:text-[#a8201a]">Powered by bytecode.ae</a>
        </p>
    </footer>
  );
}
