import Image from "next/image";

export default function PageHeader() {
  return (
    <header className="py-2 px-2 pb-0 flex items-center justify-center shrink-0">
      <div className="flex flex-col items-center w-full">
        <Image src="/samsunglogo.png" alt="Samsung" width={150} height={54} className="h-24 w-auto object-contain" priority />
        <div className="h-px w-10 bg-slate-200 mt-2 rounded-full" />
      </div>
    </header>
  );
}
