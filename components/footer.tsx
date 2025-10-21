import Link from "next/link"
import { Mail, Facebook, Twitter, ArrowRight } from "lucide-react"

export function Footer() {
  const programLinks = [
    { label: "Wheelchair Ramps", url: "/programs/wheelchair-ramps" },
    { label: "DME Grants", url: "/programs/dme-grants" },
    { label: "Tube Feeding", url: "/programs/tube-feeding" },
    { label: "Holiday Stockings", url: "/programs/holiday-stockings" },
  ]

  const organizationLinks = [
    { label: "About Us", url: "/about" },
    { label: "Our Impact", url: "/impact" },
    { label: "Contact Us", url: "#contact" },
  ]

  const legalLinks = [
    { label: "Privacy Policy", url: "/privacy" },
    { label: "Terms of Use", url: "/terms" },
    { label: "Donation Policy", url: "/donation-policy" },
  ]

  return (
    <footer className="bg-[#0B1F3F] text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#0B1F3F] font-bold text-xl">GN</span>
              </div>
              <span className="font-semibold text-lg">Good Neighbor Fund</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Supporting Georgia neighbors with mobility, nutrition, and dignity when insurance falls short.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a
                href="mailto:info@goodneighborfund.org"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Email us"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/goodneighborfund"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/goodneighborfund"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Programs</h4>
            <ul className="space-y-3">
              {programLinks.map((link) => (
                <li key={link.url}>
                  <Link
                    href={link.url}
                    className="text-white/80 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Organization</h4>
            <ul className="space-y-3">
              {organizationLinks.map((link) => (
                <li key={link.url}>
                  <Link
                    href={link.url}
                    className="text-white/80 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.url}>
                  <Link
                    href={link.url}
                    className="text-white/80 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-white/70 text-sm">
            © 2025 Good Neighbor Health & Mobility Project, Inc. All rights reserved. 501(c)(3) status pending.
          </p>
        </div>
      </div>
    </footer>
  )
}
