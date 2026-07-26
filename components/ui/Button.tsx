import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "dark";

const variants: Record<Variant, string> = {
  primary:
    "bg-coral text-white shadow-cta hover:bg-coral-dark focus-visible:ring-coral",
  secondary:
    "bg-white text-ink border border-ink/10 hover:border-ink/25 hover:bg-mist focus-visible:ring-ink/30",
  ghost:
    "bg-transparent text-ink hover:bg-ink/5 focus-visible:ring-ink/20",
  dark: "bg-ink text-white hover:bg-ink-soft focus-visible:ring-ink",
};

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentProps<"button">, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    children,
    className = "",
    variant = "primary",
    ...rest
  } = props;

  const classes = `inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold tracking-tight transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, target, rel } = props;
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  const buttonProps = rest as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
