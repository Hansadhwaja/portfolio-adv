import Link from "next/link";
import { ArrowUp } from "lucide-react";

const navigation = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-10">
        <div className="flex flex-col gap-8 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <Link
              href="#home"
              className="font-serif text-xl tracking-tight"
            >
              Hansadhwaja Biswal
            </Link>

            <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              Full Stack Developer
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="#home"
            aria-label="Back to top"
            className="flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
          >
            <ArrowUp className="size-4" />
          </Link>
        </div>

        <div className="flex flex-col gap-2 border-t border-border py-5 text-[10px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} Hansadhwaja Biswal. All rights
            reserved.
          </span>

          <span className="font-mono">
            Designed & built with Next.js
          </span>
        </div>
      </div>
    </footer>
  );
}