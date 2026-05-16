import Image from "next/image";

export default function PageHeader() {
  return (
    <header className="pt-6 px-8 pb-0 flex items-center justify-center shrink-0">
      <div className="flex flex-col items-center w-full">
        <Image src="/samsunglogo.png" alt="Samsung" width={220} height={56} className="h-30 w-auto object-contain" priority />
        <div className="h-px w-10 bg-slate-200 mt-4 rounded-full" />
      </div>
    </header>
  );
}
