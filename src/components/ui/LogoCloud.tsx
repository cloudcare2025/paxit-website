"use client";

const logos = [
  "Merck", "Ford", "Exxon", "Honda", "Intel", "NASA",
  "DuPont", "TRW", "Mercedes-Benz", "Rolls-Royce",
];

export default function LogoCloud() {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-white py-14">
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 to-white" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-[13px] font-semibold uppercase tracking-[0.15em] text-slate-400">
          Trusted by Fortune 1000 companies worldwide
        </p>
        <div className="relative mt-10 overflow-hidden">
          {/* Fade masks */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />
          <div className="flex animate-ticker items-center gap-20">
            {[...logos, ...logos].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex shrink-0 items-center justify-center"
              >
                <span className="whitespace-nowrap text-[22px] font-extrabold tracking-tight text-slate-300/70 transition-colors hover:text-slate-400">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
