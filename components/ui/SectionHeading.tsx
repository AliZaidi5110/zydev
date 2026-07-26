type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Tag = "h2",
  id,
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-teal">
          {eyebrow}
        </p>
      ) : null}
      <Tag
        id={id}
        className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
      >
        {title}
      </Tag>
      {description ? (
        <p className="mt-2 text-sm leading-relaxed text-slate sm:mt-3 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
