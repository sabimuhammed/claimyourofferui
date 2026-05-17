import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";

const WHATSAPP_NUMBER = "971553333333";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi, I need support with a FreeDrops campaign link.");

export default function CampaignErrorPage() {
  return (
    <div className="min-h-screen flex items-start justify-center bg-slate-50 md:py-12">
      <div className="w-full max-w-[430px] min-h-screen md:min-h-[844px] bg-white flex flex-col relative overflow-hidden shadow-2xl md:rounded-[3rem]">

        <PageHeader />

        {/* Main content */}
        <div className="flex-1 px-8 flex flex-col items-center justify-center text-center pb-16">

          {/* Error icon */}
          <div className="relative mb-8 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-slate-50 flex items-center justify-center">
              <svg className="w-12 h-12 text-slate-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
              </svg>
            </div>
            {/* Red error dot */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-5 bg-[#a8201a] rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </div>
          </div>

          {/* Message */}
          <h1 className="text-[1.75rem] font-extrabold tracking-tight leading-tight text-slate-900 mb-4 max-w-[280px]">
            This campaign link is{" "}
            <span className="text-[#a8201a]">no longer active.</span>
          </h1>
          <p className="text-[14px] text-slate-500 font-medium leading-relaxed max-w-[260px] mb-10">
            The offer may have expired or the campaign may have ended.
          </p>

          {/* Visit Website CTA */}
          <div className="w-full mb-5">
            <Link
              href="https://freedrops.ae"
              className="flex items-center justify-center w-full bg-[#a8201a] text-white py-5 rounded-2xl font-extrabold text-lg transition-all active:scale-[0.96] hover:brightness-110"
              style={{ boxShadow: "0 20px 50px -12px rgba(168,32,26,0.4)" }}
            >
              Visit Website
            </Link>
          </div>

          {/* WhatsApp support */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#25D366] font-bold text-sm hover:opacity-80 transition-opacity"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
            WhatsApp Support
          </a>
        </div>

        <PageFooter />
      </div>
    </div>
  );
}
