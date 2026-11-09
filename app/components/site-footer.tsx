import Link from "next/link";
import { nav } from "@/app/data/site";

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-brand">
        <img src="/brand/emblem.png" alt="" />
        <div>
          <strong>SUPER USER HOLDINGS</strong>
          <span>Practical software, built to last.</span>
        </div>
      </div>
      <div className="footer-links">
        {nav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <Link href="/responsible-publishing">Publishing standard</Link>
        <Link href="/start">Start a project</Link>
      </div>
      <p>© 2026 Super User Holdings. Built with purpose.</p>
    </footer>
  );
}