type StatProps = {
  value: string;
  label: string;
};

export default function Stat({ value, label }: StatProps) {
  return (
    <div className="my-8 inline-flex flex-col items-center justify-center rounded-2xl border border-coral/20 bg-coral/5 px-10 py-8 text-center">
      <span className="font-display text-5xl font-bold tracking-tight text-coral">{value}</span>
      <span className="mt-2 font-mono text-sm uppercase tracking-widest text-muted">
        {label}
      </span>
    </div>
  );
}
