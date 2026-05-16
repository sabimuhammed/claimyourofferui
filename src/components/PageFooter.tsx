import Image from "next/image";

export default function PageFooter() {
  return (
    <footer className="px-8 pt-6 pb-8 border-t border-slate-100 bg-white flex flex-col items-center shrink-0">
      <div className="flex flex-col items-center mb-5">
        <Image src="/freedrops.png" alt="FreeDrops" width={43} height={64} className="h-16 w-11 object-contain mb-1" />
        <p className="text-sm font-extrabold text-slate-800 tracking-tight leading-none">
          FreeDrops<span className="text-[#a8201a]">.</span>ae
        </p>
        <p className="text-[8px] font-black text-slate-400 tracking-[0.28em] uppercase mt-1">Powered by FreeDrops</p>
      </div>
      <nav className="flex items-center gap-5 mb-5">
        <a href="#about" className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em] hover:text-[#a8201a] transition-colors">About</a>
        <div className="w-1 h-1 rounded-full bg-slate-300" />
        <a href="#terms" className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em] hover:text-[#a8201a] transition-colors">Terms</a>
      </nav>
      <p className="text-[9px] font-semibold text-slate-300 uppercase tracking-widest text-center">
        © 2026 Freewater Advertising LLC
      </p>
    </footer>
  );
}
