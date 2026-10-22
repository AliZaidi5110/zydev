"use client";

import Link from "next/link";
import { useId } from "react";

type RotatingStudioBadgeProps = {
  href?: string;
};

export function RotatingStudioBadge({
  href = "#services",
}: RotatingStudioBadgeProps) {
  const id = useId().replace(/:/g, "");
  const pathId = `zevriyon-circle-${id}`;
  const label = "ZEVRIYON TECHNOLOGIES — LIMITLESS POSSIBILITIES — ";

  return (
    <Link
      href={href}
      aria-label="Scroll to services"
      className="group relative inline-flex h-[140px] w-[140px] items-center justify-center sm:h-[160px] sm:w-[160px] lg:h-[180px] lg:w-[180px]"
    >
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full animate-[shape-rotate_20s_linear_infinite] text-white motion-reduce:animate-none"
        aria-hidden
      >
        <defs>
          <path
            id={pathId}
            d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
          />
        </defs>
        <text className="fill-current text-[13px] uppercase tracking-[0.28em]">
          <textPath href={`#${pathId}`} startOffset="0%">
            {label}
          </textPath>
        </text>
      </svg>

      <span className="relative z-10 text-white/70 transition group-hover:translate-y-1 group-hover:text-white">
        <svg width="28" height="72" viewBox="0 0 36 96" fill="none" aria-hidden>
          <path
            d="M0.537384 75.1371L16.1293 95.0138C16.6258 95.6453 17.2986 96 18 96C18.7014 96 19.3742 95.6453 19.8707 95.0138L35.4626 75.1371C35.8071 74.6964 36.0004 74.0995 36 73.4773C35.9996 72.8552 35.8055 72.2587 35.4604 71.8187C35.1153 71.3788 34.6474 71.1314 34.1594 71.1309C33.6713 71.1304 33.2031 71.3767 32.8574 71.8159L19.8422 88.4082V2.34843C19.8422 1.72559 19.6481 1.12826 19.3026 0.68784C18.9571 0.247424 18.4886 0 18 0C17.5114 0 17.0429 0.247424 16.6974 0.68784C16.3519 1.12826 16.1578 1.72559 16.1578 2.34843V88.4082L3.14263 71.8159C2.79695 71.3767 2.32869 71.1304 1.84064 71.1309C1.3526 71.1314 0.884664 71.3788 0.539565 71.8187C0.194466 72.2587 0.000409554 72.8552 6.47526e-07 73.4773C-0.000408259 74.0995 0.192863 74.6964 0.537384 75.1371Z"
            fill="currentColor"
          />
        </svg>
      </span>
    </Link>
  );
}
