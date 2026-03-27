import Image from "next/image";
import { withBasePath } from "@/lib/base-path";

interface FooterProps {
  logoWhite: string;
  footerDescription: string;
  footerCopyright: string;
  footerUrl: string;
  footerColumns: {
    title: string;
    links: { label: string; href: string }[];
  }[];
}

export function Footer({
  logoWhite,
  footerDescription,
  footerCopyright,
  footerUrl,
  footerColumns,
}: FooterProps) {
  return (
    <footer className="bg-footer-bg pt-16 pb-10 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
          {/* Brand */}
          <div>
            <Image
              src={withBasePath(logoWhite)}
              alt="BidSentra"
              width={140}
              height={36}
              className="h-8 w-auto mb-4"
            />
            <p className="text-sm text-white/45 leading-relaxed max-w-[280px]">
              {footerDescription}
            </p>
          </div>

          {/* Nav columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-lime transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/7 pt-7 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">{footerCopyright}</p>
          <a
            href={`https://${footerUrl}`}
            className="text-xs text-white/40 hover:text-lime transition-colors"
          >
            {footerUrl}
          </a>
        </div>
      </div>
    </footer>
  );
}
