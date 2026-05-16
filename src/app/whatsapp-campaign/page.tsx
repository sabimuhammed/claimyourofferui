import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";

const WHATSAPP_NUMBER = "971553333333";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi! I'd like to claim my free water offer sponsored by Samsung.");

export default function WhatsAppCampaignPage() {
  return (
    <div className="min-h-screen flex items-start justify-center bg-slate-100 md:py-12">
      <div className="w-full max-w-[430px] min-h-screen md:min-h-[844px] bg-white flex flex-col relative overflow-hidden shadow-2xl md:rounded-[3rem]">

        <PageHeader />

        <div className="flex-1 px-6 flex flex-col pt-5">

          {/* Headline */}
          <div className="mb-5">
            <h1 className="text-[2.1rem] font-extrabold tracking-tighter leading-[1.1] text-slate-900 mb-3">
              Free water —{" "}
              <span className="text-[#a8201a]">sponsored.</span>{" "}
              Claim your offer.
            </h1>
            <p className="text-[14px] text-slate-500 font-medium leading-relaxed">
              Thanks for supporting a brand that funds hydration and local charity across the UAE.
            </p>
          </div>

          {/* Ad Banner */}
          <div className="-mx-6 bg-black py-3.5 px-6 flex items-center mb-5">
            <div className="flex flex-col">
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Samsung Galaxy</p>
              <p className="text-[13px] font-extrabold text-white leading-none">The new S24 Ultra is here.</p>
            </div>
          </div>

          {/* Product Card */}
          <div className="relative mb-6 rounded-2xl overflow-hidden" style={{ boxShadow: "0 10px 40px -10px rgba(15,23,42,0.18)" }}>
            {/* Dark gradient background (product image placeholder) */}
            <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-700 via-slate-800 to-slate-950">
              {/* Decorative glows */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-xl" />
              <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />

              {/* Available Now badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-[#a8201a] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                  Available Now
                </span>
              </div>

              {/* Price badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5">
                <span className="text-[10px] font-bold text-slate-500">Price:</span>
                <span className="text-sm font-extrabold text-slate-900">$899.99</span>
              </div>

              {/* WhatsApp circle icon */}
              <div className="absolute top-14 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
              </div>

              {/* Card text */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h2 className="text-white text-xl font-extrabold tracking-tight leading-tight mb-1.5">
                  Chat on WhatsApp to unlock your reward
                </h2>
                <p className="text-[12px] text-white/60 font-medium">
                  Fast claim. Direct support. Limited campaign.
                </p>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="mb-6">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-6 rounded-2xl font-extrabold text-xl transition-all active:scale-[0.97] hover:brightness-110"
              style={{ boxShadow: "0 20px 50px -10px rgba(37,211,102,0.4)" }}
            >
              <span className="tracking-tight">Claim on WhatsApp</span>
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
            </a>
          </div>

          {/* Charity strip */}
          <div className="mt-auto pb-8 flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-4 h-4 text-[#a8201a]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <p className="text-sm font-bold text-slate-700">This bottle supports local charity.</p>
            </div>
            <p className="text-xs text-slate-400 font-medium">Free to you. Valuable to the community.</p>
          </div>
        </div>

        <PageFooter />

        <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#a8201a]/5 rounded-full blur-[100px] pointer-events-none" />
      </div>
    </div>
  );
}
