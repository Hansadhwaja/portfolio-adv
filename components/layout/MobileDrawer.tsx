"use client";

import Link from "next/link";
import { X } from "lucide-react";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function MobileDrawer({
  open,
  onClose,
}: MobileDrawerProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[60] flex min-h-dvh flex-col bg-background px-5 pb-6 pt-4 lg:hidden">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5 text-sm font-semibold">
          <span className="rounded-md bg-foreground px-2 py-1 font-mono text-xs text-background">
            HB
          </span>

          <span>Menu</span>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="inline-flex size-11 items-center justify-center rounded-md border border-border bg-background"
        >
          <X className="size-[18px]" />
        </button>
      </div>

      <nav className="mt-6 flex flex-col" aria-label="Mobile navigation">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="border-b border-border py-3 font-serif text-4xl font-normal tracking-tight"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto flex flex-wrap gap-2">
        <Link
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-10 items-center rounded-md border border-border px-4 text-sm"
        >
          GitHub
        </Link>

        <Link
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-10 items-center rounded-md border border-border px-4 text-sm"
        >
          LinkedIn
        </Link>

        <Link
          href="#"
          onClick={onClose}
          className="inline-flex min-h-10 items-center rounded-md bg-foreground px-4 text-sm text-background"
        >
          Resume
        </Link>
      </div>
    </div>
  );
}