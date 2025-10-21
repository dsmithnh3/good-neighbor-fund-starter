import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  HandHeart,
  Target,
  Eye,
  Flag,
  CheckCircle2,
  FileText,
  CreditCard,
  UserCheck,
  DollarSign,
  Armchair as Wheelchair,
  Gift,
  Utensils,
  Home,
  Share2,
  Building2,
  Shield,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3F] via-[#1a3a5c] to-[#2d5a8c]" />

        {/* Subtle Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container relative z-10 mx-auto px-4 py-20 text-center">
          <div className="max-w-5xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white text-balance">
              When Insurance Falls Short,
              <span className="block mt-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                We Step In
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto text-pretty">
              Providing essential health and mobility support to individuals and families facing medical challenges
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#0B1F3F] hover:bg-white/90 hover:scale-105 text-lg px-10 py-7 rounded-2xl font-semibold shadow-2xl transition-all duration-300"
              >
                <Link href="/donate">Donate Today</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 hover:scale-105 text-lg px-10 py-7 rounded-2xl font-semibold bg-transparent backdrop-blur-sm transition-all duration-300"
              >
                <Link href="/programs">Our Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How You Can Assist */}
      <section className="py-24 bg-[#0B1F3F] text-white relative overflow-hidden">
        {/* Subtle Pattern Overlay - added for consistency */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container relative z-10 mx-auto px-4">
          {/* Title with proper capitalization and engaging subtitle */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How You Can Assist</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Every contribution makes a measurable difference. Join our mission to help neighbors in need.
            </p>
            {/* Trust indicator badge */}
            <div className="flex items-center justify-center gap-2 mt-6">
              <Shield className="w-5 h-5 text-white/80" />
              <span className="text-sm text-white/80 font-medium">
                100% Direct to Vendors • Tax-Deductible • HIPAA-Level Privacy
              </span>
            </div>
          </div>

          {/* Enhanced grid layout with featured Donate card */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Featured Donate Card - larger and more prominent */}
            <Card className="md:col-span-2 lg:col-span-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 p-10 space-y-6 hover:bg-white/15 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-20 h-20 bg-gradient-to-br from-white/30 to-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-10 h-10" />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Donate</h3>
                    <p className="text-white/90 leading-relaxed text-lg mb-4">
                      Your financial support provides essential medical equipment and supplies to those in need
                    </p>
                  </div>

                  {/* Impact examples with checkmarks */}
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-white/80 mb-3">What Your Donation Provides:</p>
                    <div className="grid sm:grid-cols-2 gap-2 text-sm text-white/80">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#22c55e]" />
                        <span>$25 = Holiday Stocking</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#22c55e]" />
                        <span>$100 = Rollator with seat</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#22c55e]" />
                        <span>$300 = DME Micro-Grant</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#22c55e]" />
                        <span>$2,000 = Wheelchair Ramp</span>
                      </div>
                    </div>
                  </div>

                  {/* Success metric */}
                  <div className="flex items-center gap-2 text-sm text-white/70 pt-2">
                    <TrendingUp className="w-4 h-4" />
                    <span>Join 50+ donors helping us reach 145+ neighbors in Year 1</span>
                  </div>

                  {/* Primary CTA */}
                  <Button
                    asChild
                    size="lg"
                    className="w-full sm:w-auto bg-white text-[#0B1F3F] hover:bg-white/90 hover:scale-105 px-8 py-6 rounded-xl font-semibold shadow-xl transition-all duration-300"
                  >
                    <Link href="/donate">Donate Now</Link>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Volunteer Card */}
            <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20 p-10 space-y-6 hover:bg-white/15 hover:shadow-2xl hover:-translate-y-2 hover:border-white/30 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-white/30 to-white/10 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <HandHeart className="w-8 h-8" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Volunteer</h3>
                <p className="text-white/80 leading-relaxed">
                  Make a direct impact in your community by helping those facing health challenges
                </p>

                {/* Volunteer opportunities */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-white/70">Ways to Help:</p>
                  <div className="space-y-1.5 text-sm text-white/70">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#22c55e]" />
                      <span>Holiday stocking assembly</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#22c55e]" />
                      <span>Fundraising events</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#22c55e]" />
                      <span>Community outreach</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-white/60 italic">Commit just 2 hours/month</p>

                {/* Secondary CTA */}
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 px-6 py-5 rounded-xl font-semibold transition-all duration-300 bg-transparent"
                >
                  <Link href="/contact?subject=volunteer">Volunteer Today</Link>
                </Button>
              </div>
            </Card>

            {/* Spread The Word Card */}
            <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20 p-10 space-y-6 hover:bg-white/15 hover:shadow-2xl hover:-translate-y-2 hover:border-white/30 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-white/30 to-white/10 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Share2 className="w-8 h-8" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Spread The Word</h3>
                <p className="text-white/80 leading-relaxed">
                  Share our mission to help us reach more people who need assistance
                </p>

                {/* Ways to spread the word */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-white/70">Share Our Mission:</p>
                  <div className="space-y-1.5 text-sm text-white/70">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#22c55e]" />
                      <span>Share on social media</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#22c55e]" />
                      <span>Tell your healthcare provider</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#22c55e]" />
                      <span>Refer someone in need</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-white/60 italic">Help us reach 1,000+ people</p>

                {/* Tertiary CTA */}
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 px-6 py-5 rounded-xl font-semibold transition-all duration-300 bg-transparent"
                >
                  <Link href="/contact?subject=share">Get Shareable Content</Link>
                </Button>
              </div>
            </Card>
          </div>

          {/* Fourth card - Partner With Us (full width below) */}
          <div className="mt-8 max-w-7xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20 p-10 hover:bg-white/15 hover:shadow-2xl hover:-translate-y-2 hover:border-white/30 transition-all duration-300 group">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-20 h-20 bg-gradient-to-br from-white/30 to-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="w-10 h-10" />
                </div>
                <div className="flex-1 text-center md:text-left space-y-3">
                  <h3 className="text-2xl font-bold">Partner With Us</h3>
                  <p className="text-white/90 leading-relaxed text-lg">
                    Corporate sponsorships and healthcare provider partnerships help us expand our reach and serve more
                    families in need
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-white/70">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#22c55e]" />
                      <span>Corporate matching programs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#22c55e]" />
                      <span>Healthcare provider referrals</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#22c55e]" />
                      <span>Community partnerships</span>
                    </div>
                  </div>
                </div>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 px-8 py-6 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap bg-transparent"
                >
                  <Link href="/contact?subject=partnership">Learn More</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0B1F3F] text-center mb-8">about us</h2>
            <div className="prose prose-lg max-w-none text-[#1F2937] leading-relaxed space-y-6">
              <p>
                Good Neighbor Health & Mobility Project is dedicated to supporting individuals and families facing
                health challenges and mobility needs. We step in when insurance falls short, providing essential medical
                equipment, supplies, and support services.
              </p>
              <p>
                Our direct-to-vendor payment model ensures that 100% of your donation goes directly to helping those in
                need. We work with licensed professionals and maintain HIPAA-level privacy protection for all
                recipients.
              </p>
              <p>
                Through our DME Micro-Grants, Wheelchair Ramp Program, Tube Feeding Support, and Holiday Stocking
                initiative, we provide fast-turnaround assistance that makes a real difference in people's lives.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button
                asChild
                size="lg"
                className="bg-[#0B1F3F] text-white hover:bg-[#0a1930] px-8 py-6 rounded-2xl font-semibold"
              >
                <Link href="#donate">Donate Today!</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-[#0B1F3F] text-[#0B1F3F] hover:bg-[#0B1F3F] hover:text-white px-8 py-6 rounded-2xl font-semibold bg-transparent"
              >
                <Link href="/programs">Our Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Goal */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3F] text-center mb-6">Mission, Vision & Goal</h2>
          <p className="text-center text-[#6B7280] text-lg mb-16 max-w-3xl mx-auto">
            Our commitment to preventing isolation, injury, and malnutrition through timely, practical support
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 text-center space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#0B1F3F]/10">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center shadow-lg">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B1F3F]">Mission</h3>
              <p className="text-[#4B5563] leading-relaxed text-pretty">
                To prevent isolation, injury, and malnutrition by providing timely, practical support that allows
                patients and families to remain safe and independent in their own homes
              </p>
            </Card>
            <Card className="p-8 text-center space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#0B1F3F]/10">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center shadow-lg">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B1F3F]">Vision</h3>
              <p className="text-[#4B5563] leading-relaxed text-pretty">
                A community where no one faces health challenges alone, and everyone has access to the medical equipment
                and support they need to thrive
              </p>
            </Card>
            <Card className="p-8 text-center space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#0B1F3F]/10">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center shadow-lg">
                <Flag className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B1F3F]">Goal</h3>
              <p className="text-[#4B5563] leading-relaxed text-pretty">
                To serve 100+ families in Year 1 through our four core programs, building a sustainable model for
                long-term community health support
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Approach & Safeguards - NEW SECTION */}
      <section className="py-24 bg-gradient-to-br from-[#F5F7FA] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3F] mb-6">Our Approach & Safeguards</h2>
              <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
                Your generosity deserves accountability. Here's how we ensure every dollar makes a difference
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Donor Trust & Transparency */}
              <Card className="p-8 space-y-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0B1F3F] mb-3">Direct Vendor Payments</h3>
                    <p className="text-[#6B7280] leading-relaxed">
                      Your donations go straight to suppliers and contractors, never as cash to applicants. This reduces
                      risk and maximizes impact.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 space-y-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-xl flex items-center justify-center flex-shrink-0">
                    <UserCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0B1F3F] mb-3">Licensed & Insured Contractors</h3>
                    <p className="text-[#6B7280] leading-relaxed">
                      All ramp construction and installations are performed by certified, licensed, and insured
                      professionals with strict safety protocols.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 space-y-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0B1F3F] mb-3">Privacy-First Practices</h3>
                    <p className="text-[#6B7280] leading-relaxed">
                      We protect patient information with HIPAA-level care and strict confidentiality protocols. Your
                      privacy is non-negotiable.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 space-y-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0B1F3F] mb-3">Transparent Reporting</h3>
                    <p className="text-[#6B7280] leading-relaxed">
                      Quarterly impact updates show exactly how funds are used, how many neighbors we've helped, and
                      where your donations went.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-[#0B1F3F] text-[#0B1F3F] hover:bg-[#0B1F3F] hover:text-white px-8 py-6 rounded-2xl font-semibold bg-transparent"
              >
                <Link href="/approach">Learn More About Our Approach</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3F] mb-6">How We Help</h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              Our streamlined process ensures fast, dignified assistance with maximum transparency
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#0B1F3F]/20">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg">
                1
              </div>
              <FileText className="w-10 h-10 text-[#2d5a8c]" />
              <h3 className="text-xl font-bold text-[#0B1F3F]">Application</h3>
              <p className="text-[#6B7280] leading-relaxed">
                Simple request form - no PHI required, no complex paperwork
              </p>
            </Card>
            <Card className="p-8 space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#0B1F3F]/20">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg">
                2
              </div>
              <CheckCircle2 className="w-10 h-10 text-[#2d5a8c]" />
              <h3 className="text-xl font-bold text-[#0B1F3F]">Review</h3>
              <p className="text-[#6B7280] leading-relaxed">Quick turnaround - often same-week for urgent needs</p>
            </Card>
            <Card className="p-8 space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#0B1F3F]/20">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg">
                3
              </div>
              <CreditCard className="w-10 h-10 text-[#2d5a8c]" />
              <h3 className="text-xl font-bold text-[#0B1F3F]">Direct Payment</h3>
              <p className="text-[#6B7280] leading-relaxed">
                We pay vendors directly - maximum impact, full transparency
              </p>
            </Card>
            <Card className="p-8 space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#0B1F3F]/20">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg">
                4
              </div>
              <UserCheck className="w-10 h-10 text-[#2d5a8c]" />
              <h3 className="text-xl font-bold text-[#0B1F3F]">Follow-Up</h3>
              <p className="text-[#6B7280] leading-relaxed">Ongoing support to ensure your needs are fully met</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3F] mb-6">Our Programs</h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              Fast-turnaround assistance when insurance falls short
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <Link href="/programs/dme-grants" className="group">
              <Card className="p-8 space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full border-2 border-transparent hover:border-[#0B1F3F]/20">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Wheelchair className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0B1F3F]">DME Micro-Grants</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Fast-turnaround micro-grants ($100-$500) for critical equipment like rollators with seats,
                  heel-protective boots, and fall-alert devices
                </p>
              </Card>
            </Link>
            <Link href="/programs/wheelchair-ramps" className="group">
              <Card className="p-8 space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full border-2 border-transparent hover:border-[#0B1F3F]/20">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0B1F3F]">Wheelchair Ramps</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Funding and coordinating construction of safe home access ramps through licensed and insured
                  contractors with strict safety protocols
                </p>
              </Card>
            </Link>
            <Link href="/programs/tube-feeding" className="group">
              <Card className="p-8 space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full border-2 border-transparent hover:border-[#0B1F3F]/20">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Utensils className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0B1F3F]">Tube Feeding Support</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Direct-to-vendor subsidies ensuring patients reliant on enteral nutrition have consistent access to
                  medically necessary formula
                </p>
              </Card>
            </Link>
            <Link href="/programs/holiday-stockings" className="group">
              <Card className="p-8 space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full border-2 border-transparent hover:border-[#0B1F3F]/20">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0B1F3F]">Holiday Stockings</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Annual program delivering comfort and care items to patients during the holiday season, easing the
                  burden of illness with dignity
                </p>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Year 1 Impact Goals - NEW SECTION */}
      <section className="py-24 bg-gradient-to-br from-[#0B1F3F] to-[#1a3a5c] text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Year 1 Impact Goals</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We're committed to measurable results. Track our progress as we work to serve our community
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 text-center space-y-4 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="text-5xl font-bold text-white">100+</div>
              <h3 className="text-xl font-semibold">Holiday Stockings</h3>
              <p className="text-white/80 text-sm">Delivered to patients in need</p>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 text-center space-y-4 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="text-5xl font-bold text-white">30+</div>
              <h3 className="text-xl font-semibold">DME Micro-Grants</h3>
              <p className="text-white/80 text-sm">Awarded ($100-$500 each)</p>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 text-center space-y-4 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="text-5xl font-bold text-white">10+</div>
              <h3 className="text-xl font-semibold">Months of Formula</h3>
              <p className="text-white/80 text-sm">Funded for tube-feeding patients</p>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 text-center space-y-4 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="text-5xl font-bold text-white">5+</div>
              <h3 className="text-xl font-semibold">Wheelchair Ramps</h3>
              <p className="text-white/80 text-sm">Constructed or funded</p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-white text-[#0B1F3F] hover:bg-white/90 hover:scale-105 px-10 py-7 rounded-2xl font-semibold shadow-xl transition-all duration-300"
            >
              <Link href="/impact">View Our Impact Dashboard</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-24 bg-gradient-to-br from-[#F5F7FA] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3F] mb-6">Make a Donation</h2>
              <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
                Your contribution makes a direct impact. See exactly how your donation helps:
              </p>
            </div>

            {/* Donation Impact Breakdown */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-8 space-y-3 border-2 border-[#D1D9E6] hover:border-[#2d5a8c] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl font-bold text-[#0B1F3F]">$25</div>
                <p className="text-[#6B7280] font-medium">Supplies for one holiday stocking</p>
              </Card>
              <Card className="p-8 space-y-3 border-2 border-[#D1D9E6] hover:border-[#2d5a8c] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl font-bold text-[#0B1F3F]">$100</div>
                <p className="text-[#6B7280] font-medium">One complete DME micro-grant</p>
              </Card>
              <Card className="p-8 space-y-3 border-2 border-[#D1D9E6] hover:border-[#2d5a8c] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl font-bold text-[#0B1F3F]">$250</div>
                <p className="text-[#6B7280] font-medium">One month of tube feeding formula</p>
              </Card>
              <Card className="p-8 space-y-3 border-2 border-[#D1D9E6] hover:border-[#2d5a8c] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl font-bold text-[#0B1F3F]">$500</div>
                <p className="text-[#6B7280] font-medium">Partial wheelchair ramp funding</p>
              </Card>
              <Card className="p-8 space-y-3 border-2 border-[#D1D9E6] hover:border-[#2d5a8c] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl font-bold text-[#0B1F3F]">$1,500</div>
                <p className="text-[#6B7280] font-medium">Complete wheelchair ramp</p>
              </Card>
              <Card className="p-8 space-y-3 border-2 border-[#2d5a8c] bg-gradient-to-br from-[#F5F7FA] to-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl font-bold text-[#0B1F3F]">Custom</div>
                <p className="text-[#6B7280] font-medium">Any amount helps!</p>
              </Card>
            </div>

            <div className="pt-8">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-white hover:from-[#16a34a] hover:to-[#15803d] hover:scale-105 px-12 py-8 rounded-2xl text-xl font-bold shadow-2xl transition-all duration-300"
              >
                <Link href="/donate">Donate Now</Link>
              </Button>
            </div>

            <p className="text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
              <strong className="text-[#0B1F3F]">100% of your donation</strong> goes directly to helping those in need
              through our direct-to-vendor payment model. All donations are tax-deductible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3F] text-center mb-16">Get in Touch</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#0B1F3F] mb-6">Contact Information</h3>
                  <div className="space-y-6 text-[#6B7280]">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-[#0B1F3F] mb-1">Location</p>
                        <p>Loganville, Georgia, United States</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-[#0B1F3F] mb-1">Phone</p>
                        <p>+1-770-568-0063</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-[#0B1F3F] mb-1">Email</p>
                        <p>info@goodneighborfund.org</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="p-8 space-y-6 shadow-xl">
                <h3 className="text-2xl font-bold text-[#0B1F3F]">Send Us a Message</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-5 py-4 border-2 border-[#D1D9E6] rounded-xl focus:border-[#2d5a8c] focus:outline-none transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-5 py-4 border-2 border-[#D1D9E6] rounded-xl focus:border-[#2d5a8c] focus:outline-none transition-colors"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    className="w-full px-5 py-4 border-2 border-[#D1D9E6] rounded-xl focus:border-[#2d5a8c] focus:outline-none resize-none transition-colors"
                  />
                  <Button className="w-full bg-[#0B1F3F] text-white hover:bg-[#0a1930] hover:scale-105 py-6 rounded-xl text-lg font-semibold shadow-lg transition-all duration-300">
                    Send Message
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
