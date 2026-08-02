export default function Loading() {
  return (
    <div className="section-pad" aria-busy="true" aria-live="polite">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="h-3 w-28 animate-pulse bg-ink/10" />
        <div className="mt-6 h-10 w-2/3 max-w-xl animate-pulse bg-ink/10" />
        <div className="mt-4 h-4 w-full max-w-2xl animate-pulse bg-ink/8" />
        <div className="mt-3 h-4 w-5/6 max-w-xl animate-pulse bg-ink/8" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((item) => (
            <div key={item} className="h-40 animate-pulse border border-ink/8 bg-white" />
          ))}
        </div>
        <span className="sr-only">Loading page content</span>
      </div>
    </div>
  );
}
