"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";

type Tab = "offers" | "about" | "contact";

const TABS: { id: Tab; label: string }[] = [
  { id: "offers", label: "Offers" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function WhatsAppCampaignPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>("offers");

  useEffect(() => {
    router.refresh();
    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) window.location.reload();
    };
    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, [router]);

  return (
    <div className="min-h-screen flex items-start justify-center bg-slate-100 md:py-12">
      <div className="w-full max-w-[430px] min-h-screen md:min-h-[844px] bg-white flex flex-col relative overflow-hidden shadow-2xl md:rounded-[3rem]">

        <PageHeader />

        <main className="flex-1 px-8 flex flex-col">

          {/* Hero */}
          <div className="pt-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-[#a8201a]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <span className="text-[10px] font-extrabold text-[#a8201a] uppercase tracking-[0.2em]">Impact Achievement</span>
            </div>
            <h1 className="text-[2.1rem] font-extrabold tracking-tighter leading-[1.1] text-slate-900 mb-3">
              You Just Donated{" "}
              <span className="text-[#a8201a]">20 Fils</span>
              {" "}To Charity.
            </h1>
            <p className="text-[14px] text-slate-500 font-medium leading-relaxed">
              Thanks for supporting a brand that funds hydration and local charity across the UAE.
            </p>
          </div>

          {/* Tabs */}
          <section className="mb-6 flex-1">
            <div className="flex gap-1 p-1 bg-slate-100 rounded-2xl mb-5">
              {TABS.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex-1 py-3 text-[12px] font-bold rounded-xl transition-all ${
                    activeTab === id
                      ? "bg-white text-slate-900 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.12)]"
                      : "text-slate-500 hover:bg-white/50"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Offers */}
            {activeTab === "offers" && (
              <div className="relative rounded-2xl overflow-hidden shadow-[0_10px_30px_-10px_rgba(15,23,42,0.1)] aspect-video bg-linear-to-br from-slate-800 to-slate-950">
                <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-blue-500/10 blur-2xl" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-[#1428A0]/10 blur-xl" />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-6 right-6">
                  <p className="text-[10px] font-extrabold text-blue-400 uppercase tracking-widest mb-1.5">Limited Offer</p>
                  <h3 className="text-white font-extrabold text-lg leading-snug">Upgrade to Galaxy S24 Ultra &amp; Save.</h3>
                </div>
                <div className="absolute top-4 right-5 opacity-20">
                  <span className="text-white text-xs font-black tracking-tight">SAMSUNG</span>
                </div>
              </div>
            )}

            {/* About */}
            {activeTab === "about" && (
              <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.08)]">
                <h3 className="text-lg font-extrabold text-slate-900 mb-3">About Samsung</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  Samsung creates innovative technology experiences used by millions worldwide — from smartphones and wearables to smart living solutions.
                </p>
              </div>
            )}

            {/* Contact */}
            {activeTab === "contact" && (
              <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.08)] space-y-5">
                <a href="https://www.samsung.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <svg className="w-5 h-5 text-slate-400 shrink-0 group-hover:text-slate-700 transition-colors" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253" />
                  </svg>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Website</p>
                    <p className="text-sm font-bold text-slate-900">www.samsung.com</p>
                  </div>
                </a>
                <a href="tel:+9718007267864" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <svg className="w-5 h-5 text-slate-400 shrink-0 group-hover:text-slate-700 transition-colors" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75z" />
                  </svg>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Support</p>
                    <p className="text-sm font-bold text-slate-900">800-SAMSUNG</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <svg className="w-5 h-5 text-slate-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
                  </svg>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Headquarters</p>
                    <p className="text-sm font-bold text-slate-900">Dubai Media City, UAE</p>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* WhatsApp CTA */}
          <div className="pb-8 pt-2">
            <Link
              href="/campaign-error"
              className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 rounded-2xl font-extrabold text-xl transition-all active:scale-[0.97] hover:brightness-110"
              style={{ boxShadow: "0 20px 50px -10px rgba(37,211,102,0.4)" }}
            >
              <span className="tracking-tight">Claim on WhatsApp</span>
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
            </Link>
          </div>
        </main>

        <PageFooter />

        <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#a8201a]/5 rounded-full blur-[100px] pointer-events-none" />
      </div>
    </div>
  );
}
