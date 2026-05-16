"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SAMSUNG_LOGO = "/samsunglogo.png";

export default function ClaimPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // TODO: submit lead to backend
    await new Promise((r) => setTimeout(r, 800));
    router.push("/success");
  }

  return (
    <div className="min-h-screen flex items-start justify-center bg-slate-50 md:py-12">
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
            <Image src={SAMSUNG_LOGO} alt="Samsung" width={140} height={48} className="h-16 w-auto object-contain opacity-50 grayscale" />
            {/* <div className="w-px h-4 bg-slate-200" /> */}
          </div>
        </header>

        <div className="flex-1 px-8 flex flex-col pt-4">

          {/* Headline */}
          <div className="mb-8">
            <h1 className="text-[2.25rem] font-extrabold tracking-tighter leading-tight text-slate-900 mb-2">
              Claim your offer
            </h1>
            <p className="text-base text-slate-600 font-semibold leading-relaxed">
              Enter your details to continue.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="full-name" className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-2">Full Name</label>
              <input
                id="full-name"
                type="text"
                placeholder="Enter your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-6 px-6 text-lg text-slate-900 font-semibold placeholder:text-slate-300 transition-all focus:outline-none focus:border-[#a8201a] focus:ring-4 focus:ring-[#a8201a]/5"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="mobile" className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-2">Mobile Number</label>
              <div className="relative">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">+971</span>
                <input
                  id="mobile"
                  type="tel"
                  placeholder="50 000 0000"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-6 pl-16 pr-6 text-lg text-slate-900 font-semibold placeholder:text-slate-300 transition-all focus:outline-none focus:border-[#a8201a] focus:ring-4 focus:ring-[#a8201a]/5"
                />
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center w-full bg-[#a8201a] text-white py-6 rounded-2xl font-extrabold text-xl transition-all active:scale-[0.96] group transform hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ boxShadow: "0 25px 60px -12px rgba(168,32,26,0.4)" }}
              >
                <span className="tracking-tight">{loading ? "Submitting..." : "Submit"}</span>
                {!loading && (
                  <svg className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-1.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                )}
              </button>
              <p className="text-center mt-6 text-[12px] font-medium text-slate-400 leading-relaxed max-w-[280px] mx-auto">
                We&apos;ll only use this to follow up on your offer.
              </p>
            </div>
          </form>

          {/* Progress dots */}
          <div className="mt-auto pb-12 flex justify-center gap-1.5">
            <div className="w-12 h-1 bg-slate-100 rounded-full" />
            <div className="w-12 h-1 bg-[#a8201a] rounded-full" />
            <div className="w-12 h-1 bg-slate-100 rounded-full" />
          </div>
        </div>

        {/* Footer */}
        <footer className="px-8 py-6 border-t border-slate-50 bg-slate-50/30 shrink-0">
          <p className="text-center text-[9px] font-bold text-slate-300 tracking-[0.1em] uppercase">© 2026 Freewater Advertising llc</p>
        </footer>

        {/* Decorative blur */}
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#a8201a]/5 rounded-full blur-[100px] pointer-events-none" />
      </div>
    </div>
  );
}
