import Image from "next/image";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-start justify-center bg-slate-100 md:py-12">
      <div className="w-full max-w-[430px] min-h-screen md:min-h-[844px] bg-white flex flex-col relative overflow-hidden shadow-2xl md:rounded-[3rem]">

        {/* Header: FreeDrops left | Samsung right */}
        <header className="pt-5 px-6 pb-0 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <Image src="/freedrops.png" alt="FreeDrops" width={24} height={36} className="h-9 w-6 object-contain" />
            <span className="text-[15px] font-extrabold text-slate-800 tracking-tight">
              FreeDrops<span className="text-[#a8201a]">.</span>ae
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/samsunglogo.png" alt="Samsung" width={120} height={26} className="h-16 w-auto object-contain opacity-50 grayscale" />
            {/* <div className="w-px h-4 bg-slate-200" /> */}
          </div>
        </header>

        {/* Main content */}
        <div className="flex-1 px-8 flex flex-col items-center justify-center text-center pb-8">

          {/* Open-circle checkmark icon */}
          <div className="relative mb-8 flex justify-center items-center">
            <div
              className="absolute w-56 h-56 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(168,32,26,0.08) 0%, rgba(168,32,26,0) 65%)" }}
            />
            <svg
              viewBox="0 0 100 100"
              fill="none"
              stroke="#a8201a"
              strokeWidth="5.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-[120px] h-[120px] relative"
              style={{ filter: "drop-shadow(0 8px 24px rgba(168,32,26,0.22))" }}
            >
              {/* Partial circle: ~310° arc, gap at 4–5 o'clock */}
              <path d="M 69 83 A 38 38 0 1 1 83 69" />
              {/* Checkmark */}
              <path d="M 22 54 L 42 74 L 80 30" />
            </svg>
          </div>

          <h1 className="text-[2.4rem] font-extrabold tracking-tighter leading-tight text-slate-900 mb-3">
            Offer unlocked
          </h1>

          <p className="text-[17px] text-slate-500 font-semibold leading-relaxed max-w-[260px] mx-auto mb-8">
            Thank you. We will contact you soon.
          </p>

          <div className="mb-8">
            <p className="text-sm text-slate-500 font-medium">
              Need help now?{" "}
              <a href="tel:+971553333333" className="font-bold text-[#a8201a] whitespace-nowrap">
                Contact +971 55 333 3333
              </a>
            </p>
          </div>

          {/* Done button */}
          <div className="w-full">
            <Link
              href="/"
              className="flex items-center justify-center w-full bg-[#a8201a] text-white py-6 rounded-2xl font-extrabold text-xl transition-all active:scale-[0.97] hover:brightness-110"
              style={{ boxShadow: "0 20px 50px -10px rgba(168,32,26,0.4)" }}
            >
              Done
            </Link>
          </div>

          {/* Progress dots */}
          <div className="mt-10 flex justify-center gap-1.5">
            <div className="w-12 h-1 bg-slate-100 rounded-full" />
            <div className="w-12 h-1 bg-slate-100 rounded-full" />
            <div className="w-12 h-1 bg-[#a8201a] rounded-full" />
          </div>
        </div>

        {/* Footer */}
        <footer className="px-8 py-6 border-t border-slate-50 bg-slate-50/30 shrink-0">
          <div className="flex justify-center gap-8">
            <a href="#about" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-700 transition-colors">About Free Drops</a>
            <a href="#terms" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-700 transition-colors">Terms &amp; Conditions</a>
          </div>
          <p className="text-center mt-4 text-[9px] font-bold text-slate-300 tracking-widest uppercase">© 2026 Freewater Advertising llc</p>
        </footer>
      </div>
    </div>
  );
}
