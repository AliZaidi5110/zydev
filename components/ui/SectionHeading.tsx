type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal">
          {eyebrow}
        </p>
      ) : null}
      <Tag className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </Tag>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
