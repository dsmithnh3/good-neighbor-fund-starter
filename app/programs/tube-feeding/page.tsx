import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Utensils, Heart, Clock, Shield } from "lucide-react"
import Link from "next/link"

export default function TubeFeedingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#0B1F3F] via-[#1a3a5c] to-[#2d5a8c] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="w-24 h-24 mx-auto bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-6">
              <Utensils className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">Tube Feeding Support</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Direct-to-vendor subsidies ensuring consistent access to medically necessary enteral nutrition formula
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3F] mb-6">Filling the Formula Gap</h2>
              <p className="text-lg text-[#6B7280] leading-relaxed">
                For patients who rely on tube feeding for nutrition, running out of formula isn't just inconvenient—it's
                dangerous. Insurance often provides insufficient monthly allowances or denies coverage for specialized
                formulas. Our Tube Feeding Support Program bridges this critical gap with direct-to-vendor subsidies.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 space-y-4 border-2 border-[#D1D9E6] hover:border-[#2d5a8c] hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1F3F]">Consistent Access</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Monthly subsidies ensure you never run out of the specialized formula your body needs to thrive.
                </p>
              </Card>

              <Card className="p-8 space-y-4 border-2 border-[#D1D9E6] hover:border-[#2d5a8c] hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1F3F]">Direct to Vendor</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  We pay medical supply companies directly, ensuring transparency and eliminating financial burden.
                </p>
              </Card>

              <Card className="p-8 space-y-4 border-2 border-[#D1D9E6] hover:border-[#2d5a8c] hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center shadow-lg">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1F3F]">Fast Approval</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Urgent formula needs are prioritized with same-week approval for qualifying applicants.
                </p>
              </Card>

              <Card className="p-8 space-y-4 border-2 border-[#D1D9E6] hover:border-[#2d5a8c] hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center shadow-lg">
                  <Utensils className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1F3F]">All Formula Types</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  We support all specialized enteral nutrition formulas prescribed by your healthcare provider.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-24 bg-gradient-to-br from-[#F5F7FA] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3F] text-center mb-16">What We Cover</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-[#0B1F3F]">Formula Types</h3>
                <ul className="space-y-3 text-[#6B7280]">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Standard enteral formulas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Specialized metabolic formulas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>High-calorie formulas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Pediatric formulas</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-[#0B1F3F]">Supplies Included</h3>
                <ul className="space-y-3 text-[#6B7280]">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Monthly formula supply</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Feeding bags and tubing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Syringes and adapters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Storage containers</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-[#0B1F3F]">Support Services</h3>
                <ul className="space-y-3 text-[#6B7280]">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Vendor coordination</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Delivery scheduling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Emergency backup supply</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Ongoing case management</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3F] text-center mb-12">Who Qualifies</h2>
            <Card className="p-10 border-2 border-[#2d5a8c] bg-gradient-to-br from-white to-[#F5F7FA]">
              <div className="space-y-6">
                <p className="text-lg text-[#6B7280] leading-relaxed">
                  Our Tube Feeding Support Program is designed for patients who:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-7 h-7 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#0B1F3F] mb-1">Rely on enteral nutrition</p>
                      <p className="text-[#6B7280]">Require tube feeding as primary or supplemental nutrition source</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-7 h-7 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#0B1F3F] mb-1">Face insurance gaps</p>
                      <p className="text-[#6B7280]">Have reached monthly insurance limits or face coverage denials</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-7 h-7 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#0B1F3F] mb-1">Have financial need</p>
                      <p className="text-[#6B7280]">Cannot afford out-of-pocket costs for necessary formula</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-7 h-7 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#0B1F3F] mb-1">Have medical documentation</p>
                      <p className="text-[#6B7280]">Can provide prescription or medical necessity documentation</p>
                    </div>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#0B1F3F] to-[#1a3a5c] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Need Formula Assistance?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Don't let insurance limits compromise your nutrition. Apply for tube feeding support today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#0B1F3F] hover:bg-white/90 hover:scale-105 px-10 py-7 rounded-2xl font-semibold shadow-xl transition-all duration-300"
              >
                <Link href="/contact">Apply Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 hover:scale-105 px-10 py-7 rounded-2xl font-semibold bg-transparent backdrop-blur-sm transition-all duration-300"
              >
                <Link href="/programs">View All Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
