"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/app/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Super User Holdings home">
        <img src="/brand/emblem.png" alt="" />
        <span>
          <strong>SUPER USER</strong>
          <small>HOLDINGS</small>
        </span>
      </Link>

      <nav className="desktop-nav" aria-label="Main navigation">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive(item.href) ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
        <Link href="/start" className="nav-cta">
          Start a project
        </Link>
      </nav>

      <button
        className="nav-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="nav-toggle-label">{open ? "Close" : "Menu"}</span>
        <span className="nav-toggle-box" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </button>

      {open ? (
        <div className="mobile-menu" id="mobile-menu">
          <nav aria-label="Mobile navigation">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/start" className="nav-cta">
              Start a project
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}