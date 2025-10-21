import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Armchair, Gift, Utensils, Home, ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function ProgramsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#0B1F3F] via-[#1a3a5c] to-[#2d5a8c] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">Our Programs</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto text-pretty">
              Fast-turnaround assistance when insurance falls short. We provide essential support across four core
              programs.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-16">
            {/* DME Micro-Grants */}
            <Card className="overflow-hidden border-2 border-[#D1D9E6] hover:border-[#2d5a8c] transition-all duration-300 hover:shadow-2xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-12 space-y-6 flex flex-col justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center shadow-lg">
                    <Armchair className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3F]">DME Micro-Grants</h2>
                  <p className="text-lg text-[#6B7280] leading-relaxed">
                    Fast-turnaround micro-grants ($100-$500) for critical durable medical equipment that insurance
                    denies or delays.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                      <p className="text-[#4B5563]">Rollators with seats for safe mobility</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                      <p className="text-[#4B5563]">Heel-protective boots to prevent pressure sores</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                      <p className="text-[#4B5563]">Fall-alert devices for safety monitoring</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                      <p className="text-[#4B5563]">Shower chairs, transfer benches, and more</p>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="bg-[#0B1F3F] text-white hover:bg-[#0a1930] hover:scale-105 px-8 py-6 rounded-xl font-semibold transition-all duration-300 w-fit"
                  >
                    <Link href="/programs/dme-grants">
                      Learn More <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-[#F5F7FA] to-[#E5E7EB] p-12 flex items-center justify-center">
                  <div className="w-full h-64 bg-white/50 rounded-2xl flex items-center justify-center">
                    <Armchair className="w-32 h-32 text-[#2d5a8c]" />
                  </div>
                </div>
              </div>
            </Card>

            {/* Wheelchair Ramps */}
            <Card className="overflow-hidden border-2 border-[#D1D9E6] hover:border-[#2d5a8c] transition-all duration-300 hover:shadow-2xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-[#F5F7FA] to-[#E5E7EB] p-12 flex items-center justify-center order-2 md:order-1">
                  <div className="w-full h-64 bg-white/50 rounded-2xl flex items-center justify-center">
                    <Home className="w-32 h-32 text-[#2d5a8c]" />
                  </div>
                </div>
                <div className="p-12 space-y-6 flex flex-col justify-center order-1 md:order-2">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center shadow-lg">
                    <Home className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3F]">Wheelchair Ramps</h2>
                  <p className="text-lg text-[#6B7280] leading-relaxed">
                    Funding and coordinating construction of safe home access ramps through licensed and insured
                    contractors with strict safety protocols.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                      <p className="text-[#4B5563]">Licensed and insured contractors only</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                      <p className="text-[#4B5563]">ADA-compliant construction standards</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                      <p className="text-[#4B5563]">Direct payment to contractors for transparency</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                      <p className="text-[#4B5563]">Quality inspections and safety verification</p>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="bg-[#0B1F3F] text-white hover:bg-[#0a1930] hover:scale-105 px-8 py-6 rounded-xl font-semibold transition-all duration-300 w-fit"
                  >
                    <Link href="/programs/wheelchair-ramps">
                      Learn More <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Tube Feeding Support */}
            <Card className="overflow-hidden border-2 border-[#D1D9E6] hover:border-[#2d5a8c] transition-all duration-300 hover:shadow-2xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-12 space-y-6 flex flex-col justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center shadow-lg">
                    <Utensils className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3F]">Tube Feeding Support</h2>
                  <p className="text-lg text-[#6B7280] leading-relaxed">
                    Direct-to-vendor subsidies ensuring patients reliant on enteral nutrition have consistent access to
                    medically necessary formula not covered by insurance.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                      <p className="text-[#4B5563]">Specialized formula brands and varieties</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                      <p className="text-[#4B5563]">Monthly subsidies when insurance limits are reached</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                      <p className="text-[#4B5563]">Direct payment to medical supply vendors</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                      <p className="text-[#4B5563]">Emergency backup supply assistance</p>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="bg-[#0B1F3F] text-white hover:bg-[#0a1930] hover:scale-105 px-8 py-6 rounded-xl font-semibold transition-all duration-300 w-fit"
                  >
                    <Link href="/programs/tube-feeding">
                      Learn More <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-[#F5F7FA] to-[#E5E7EB] p-12 flex items-center justify-center">
                  <div className="w-full h-64 bg-white/50 rounded-2xl flex items-center justify-center">
                    <Utensils className="w-32 h-32 text-[#2d5a8c]" />
                  </div>
                </div>
              </div>
            </Card>

            {/* Holiday Stockings */}
            <Card className="overflow-hidden border-2 border-[#D1D9E6] hover:border-[#2d5a8c] transition-all duration-300 hover:shadow-2xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-[#F5F7FA] to-[#E5E7EB] p-12 flex items-center justify-center order-2 md:order-1">
                  <div className="w-full h-64 bg-white/50 rounded-2xl flex items-center justify-center">
                    <Gift className="w-32 h-32 text-[#2d5a8c]" />
                  </div>
                </div>
                <div className="p-12 space-y-6 flex flex-col justify-center order-1 md:order-2">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center shadow-lg">
                    <Gift className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3F]">Holiday Stockings</h2>
                  <p className="text-lg text-[#6B7280] leading-relaxed">
                    Annual program delivering comfort and care items to patients during the holiday season, easing the
                    burden of illness with dignity and community support.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                      <p className="text-[#4B5563]">Comfort items and personal care products</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                      <p className="text-[#4B5563]">Seasonal treats and warm clothing items</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                      <p className="text-[#4B5563]">Entertainment and activity items</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                      <p className="text-[#4B5563]">Delivered with dignity and compassion</p>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="bg-[#0B1F3F] text-white hover:bg-[#0a1930] hover:scale-105 px-8 py-6 rounded-xl font-semibold transition-all duration-300 w-fit"
                  >
                    <Link href="/programs/holiday-stockings">
                      Learn More <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#0B1F3F] to-[#1a3a5c] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Make a Difference?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Your support helps us provide essential assistance to those facing health challenges and mobility needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#0B1F3F] hover:bg-white/90 hover:scale-105 px-10 py-7 rounded-2xl font-semibold shadow-xl transition-all duration-300"
              >
                <Link href="/donate">Donate Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 hover:scale-105 px-10 py-7 rounded-2xl font-semibold bg-transparent backdrop-blur-sm transition-all duration-300"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
