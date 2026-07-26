"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { mainNav, siteConfig } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();
  const isHome = pathname === "/";
  const overlay = isHome && !scrolled && !open;

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!isHome) {
      setScrolled(false);
      return;
    }

    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const linkBase = overlay
    ? "text-white/90 hover:bg-white/10 hover:text-white"
    : "text-ink/80 hover:bg-ink/5";
  const linkActive = overlay ? "text-white" : "text-coral";

  return (
    <header
      className={`z-50 transition-colors duration-300 ${
        isHome ? "fixed inset-x-0 top-0" : "sticky top-0"
      } ${
        overlay
          ? "border-b border-transparent bg-transparent"
          : "border-b border-ink/8 bg-canvas/90 backdrop-blur-md"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.25rem]">
        <Link
          href="/"
          className={`font-display text-2xl font-bold tracking-tight ${
            overlay ? "text-white" : "text-ink"
          }`}
          aria-label={`${siteConfig.name} home`}
        >
          Zy
          <span className={overlay ? "text-white/85" : "text-coral"}>dev</span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {mainNav.map((item) => {
            if (item.children) {
              return (
                <div key={item.href} className="relative">
                  <button
                    type="button"
                    className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                      pathname.startsWith("/services") ? linkActive : linkBase
                    }`}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    onClick={() => setServicesOpen((value) => !value)}
                    onBlur={(event) => {
                      if (
                        !event.currentTarget.parentElement?.contains(
                          event.relatedTarget as Node,
                        )
                      ) {
                        setServicesOpen(false);
                      }
                    }}
                  >
                    {item.label}
                  </button>
                  {servicesOpen ? (
                    <div
                      className="absolute left-0 top-full z-50 mt-2 w-80 rounded-xl border border-ink/10 bg-white p-2 shadow-lift"
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-3 py-2.5 transition hover:bg-mist"
                        >
                          <span className="block text-sm font-semibold text-ink">
                            {child.label}
                          </span>
                          {child.description ? (
                            <span className="mt-0.5 block text-xs text-slate">
                              {child.description}
                            </span>
                          ) : null}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            }

            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                  active ? linkActive : linkBase
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            href="/contact"
            variant="secondary"
            className={`!py-2.5 ${
              overlay
                ? "!border-white/40 !bg-white/10 !text-white hover:!bg-white/20"
                : ""
            }`}
          >
            {siteConfig.cta.secondary}
          </Button>
          <Button
            href="/contact"
            className={`!py-2.5 ${
              overlay ? "!bg-white !text-ink hover:!bg-white/90" : ""
            }`}
          >
            {siteConfig.cta.primary}
          </Button>
        </div>

        <button
          type="button"
          className={`inline-flex h-10 w-10 items-center justify-center rounded-md border lg:hidden ${
            overlay
              ? "border-white/35 text-white"
              : "border-ink/10 text-ink"
          }`}
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden className="text-lg leading-none">
            {open ? "✕" : "☰"}
          </span>
        </button>
      </Container>

      {open ? (
        <div
          id={menuId}
          className="border-t border-ink/8 bg-canvas lg:hidden"
        >
          <Container className="flex max-h-[calc(100dvh-4rem)] flex-col gap-1 overflow-y-auto py-4">
            {mainNav.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-md px-3 py-3 text-base font-semibold text-ink"
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="mb-2 ml-3 border-l border-ink/10 pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-md px-2 py-2 text-sm text-slate hover:text-coral"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <div className="mt-3 flex flex-col gap-2 px-1 pb-2">
              <Button href="/contact">{siteConfig.cta.primary}</Button>
              <Button href="/contact" variant="secondary">
                {siteConfig.cta.secondary}
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
