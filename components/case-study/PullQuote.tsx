type PullQuoteProps = {
  children: React.ReactNode;
};

export default function PullQuote({ children }: PullQuoteProps) {
  return (
    <blockquote className="my-10 border-l-4 border-coral pl-6">
      <p className="font-display text-2xl italic leading-snug text-coral md:text-3xl">
        {children}
      </p>
    </blockquote>
  );
}
