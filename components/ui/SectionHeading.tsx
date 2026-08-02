type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  id?: string;
  tone?: "default" | "inverse";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Tag = "h2",
  id,
  tone = "default",
}: SectionHeadingProps) {
  const inverse = tone === "inverse";

  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? (
        <p
          className={`mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] ${
            inverse ? "text-teal-soft" : "text-teal"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <Tag
        id={id}
        className={`font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] ${
          inverse ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </Tag>
      {description ? (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed sm:text-lg ${
            inverse ? "text-white/65" : "text-slate"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
