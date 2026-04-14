import { Lightbulb, AlertTriangle, Info } from "lucide-react";

type CalloutType = "insight" | "warning" | "note";

type CalloutProps = {
  type?: CalloutType;
  children: React.ReactNode;
};

const styles: Record<CalloutType, { wrapper: string; icon: string; Icon: typeof Lightbulb }> = {
  insight: {
    wrapper: "border-coral/30 bg-coral/5",
    icon: "text-coral",
    Icon: Lightbulb,
  },
  warning: {
    wrapper: "border-mustard/40 bg-mustard/5",
    icon: "text-mustard",
    Icon: AlertTriangle,
  },
  note: {
    wrapper: "border-ink/15 bg-ink/3",
    icon: "text-muted",
    Icon: Info,
  },
};

export default function Callout({ type = "note", children }: CalloutProps) {
  const { wrapper, icon, Icon } = styles[type];

  return (
    <div className={`my-8 flex gap-4 rounded-xl border p-6 ${wrapper}`}>
      <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${icon}`} />
      <div className="font-sans text-sm leading-relaxed text-ink/80">{children}</div>
    </div>
  );
}
