import type { Service } from "@/lib/services";

const paths: Record<Service["icon"], string> = {
  platform:
    "M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Zm4 10h8M8 7v10M16 7v10",
  ai: "M12 3v3m0 12v3M3 12h3m12 0h3M6.3 6.3l2.1 2.1m7.2 7.2 2.1 2.1m0-11.4-2.1 2.1M8.4 15.6l-2.1 2.1M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",
  systems:
    "M4 5h7v6H4V5Zm9 0h7v4h-7V5ZM4 13h7v6H4v-6Zm9 2h7v4h-7v-4Z",
  mobile:
    "M8 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm4 15h.01",
  cloud:
    "M7 18h10a4 4 0 0 0 .4-8 5.5 5.5 0 0 0-10.5-1.5A3.5 3.5 0 0 0 7 18Z",
  strategy:
    "M4 19h16M7 16V9m5 7V5m5 11v-4",
  telemarketing:
    "M3 18v-6a9 9 0 0 1 18 0v6M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z",
};

export function ServiceIcon({
  icon,
  className = "h-6 w-6",
}: {
  icon: Service["icon"];
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d={paths[icon]} />
    </svg>
  );
}
