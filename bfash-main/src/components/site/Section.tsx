import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
  center = false,
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  center?: boolean;
}) {
  return (
    <section className={`py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-6">
        {(eyebrow || title || subtitle) && (
          <div
            className={`mb-12 md:mb-16 ${center ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}`}
          >
            {eyebrow && (
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand uppercase tracking-wider mb-4">
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="pt-36 pb-16 md:pt-44 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-20 left-1/4 h-72 w-72 rounded-full bg-brand/30 blur-3xl animate-float" />
        <div
          className="absolute top-32 right-1/4 h-72 w-72 rounded-full bg-brand-strong/30 blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>
      <div className="mx-auto max-w-4xl px-6 text-center animate-fade-up">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand uppercase tracking-wider mb-6">
            {eyebrow}
          </div>
        )}
        <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6">
          <span className="gradient-text">{title}</span>
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
