import type { Service } from "@/lib/services";

const paths: Record<Service["icon"], string> = {
  globe: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0c2.5-2.7 4-6.1 4-9.5S14.5 4.7 12 2C9.5 4.7 8 8.1 8 11.5S9.5 18.3 12 21ZM3 12h18",
  search:
    "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm10 2-4.3-4.3",
  map: "M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3Zm0-15v15m6-12v15",
  card: "M2 7h20v10H2V7Zm0 3h20M6 15h4",
  share:
    "M18 8a3 3 0 1 0-2.8-4M8.8 10.2a3 3 0 1 0 0 3.6M15.2 18.2A3 3 0 1 0 18 16m-2.8-8-6.4 3.2m6.4 5.6-6.4-3.2",
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
