function FeatureCard({ title, text }) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl">
        ✦
      </div>

      <h3 className="text-lg font-black text-slate-950">{title}</h3>

      <p className="mt-3 text-sm leading-relaxed text-slate-500">{text}</p>
    </div>
  );
}

export default FeatureCard;