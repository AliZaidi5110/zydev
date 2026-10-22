"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { mainNav, siteConfig } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
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
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    const firstLink = menuRef.current?.querySelector<HTMLElement>("a, button");
    firstLink?.focus();

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!isHome) {
      setScrolled(false);
      return;
    }

    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const linkBase = overlay
    ? "text-white/80 hover:text-white"
    : "text-ink/70 hover:text-ink";
  const linkActive = overlay ? "text-white" : "text-ink";

  return (
    <header
      className={`z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        isHome ? "fixed inset-x-0 top-0" : "sticky top-0"
      } ${
        overlay
          ? "border-b border-transparent bg-transparent"
          : "border-b border-ink/8 bg-canvas/90 backdrop-blur-md"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-90"
          aria-label={`${siteConfig.name} home`}
        >
          {overlay ? (
            <Image
              src="/images/zevriyon-logo-white.svg"
              alt={siteConfig.name}
              width={190}
              height={52}
              priority
              className="h-8 sm:h-9 w-auto object-contain"
            />
          ) : (
            <Image
              src="/images/zevriyon-logo.svg"
              alt={siteConfig.name}
              width={190}
              height={52}
              priority
              className="h-8 sm:h-9 w-auto object-contain"
            />
          )}
        </Link>

        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label="Primary"
        >
          {mainNav.map((item) => {
            if (item.children) {
              return (
                <div key={item.href} className="relative">
                  <button
                    type="button"
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
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
                      className="absolute left-0 top-full z-50 mt-3 w-[22rem] border border-ink/10 bg-white p-2 shadow-lift"
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2.5 transition hover:bg-mist/80"
                        >
                          <span className="block text-sm font-semibold text-ink">
                            {child.label}
                          </span>
                          {child.description ? (
                            <span className="mt-0.5 block text-xs leading-relaxed text-slate">
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
                className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                  active ? linkActive : linkBase
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <Button
            href="/services"
            variant="secondary"
            className={`!py-2.5 ${
              overlay
                ? "!border-white/30 !text-white hover:!border-white/55 hover:!bg-white/10"
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
          ref={toggleRef}
          type="button"
          className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border lg:hidden ${
            overlay
              ? "border-white/30 text-white"
              : "border-ink/12 text-ink"
          }`}
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close" : "Open"} menu</span>
          <span aria-hidden className="flex flex-col gap-1.5">
            <span
              className={`block h-px w-4 bg-current transition ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-4 bg-current transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-4 bg-current transition ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </Container>

      {open ? (
        <div
          id={menuId}
          ref={menuRef}
          className="border-t border-ink/8 bg-canvas lg:hidden"
        >
          <Container className="flex max-h-[calc(100dvh-4rem)] flex-col gap-1 overflow-y-auto py-5">
            {mainNav.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-3 text-base font-semibold text-ink"
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="mb-2 ml-3 border-l border-ink/10 pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-2 py-2 text-sm text-slate hover:text-ink"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <div className="mt-4 flex flex-col gap-2.5 px-1 pb-2">
              <Button href="/contact">{siteConfig.cta.primary}</Button>
              <Button href="/services" variant="secondary">
                {siteConfig.cta.secondary}
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
