import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Home, Shield, Users, Ruler } from "lucide-react"
import Link from "next/link"

export default function WheelchairRampsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#0B1F3F] via-[#1a3a5c] to-[#2d5a8c] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="w-24 h-24 mx-auto bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-6">
              <Home className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">Wheelchair Ramps</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Safe, code-compliant home access ramps built by licensed and insured contractors
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3F] mb-6">Building Safe Home Access</h2>
              <p className="text-lg text-[#6B7280] leading-relaxed">
                Our Wheelchair Ramp Program funds and coordinates the construction of safe, ADA-compliant ramps that
                enable individuals with mobility challenges to safely enter and exit their homes. We work exclusively
                with licensed and insured contractors who follow strict safety protocols.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 space-y-4 border-2 border-[#D1D9E6] hover:border-[#2d5a8c] hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1F3F]">Licensed Contractors</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  All ramp construction is performed by licensed, insured, and bonded contractors who specialize in
                  accessibility modifications.
                </p>
              </Card>

              <Card className="p-8 space-y-4 border-2 border-[#D1D9E6] hover:border-[#2d5a8c] hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center shadow-lg">
                  <Ruler className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1F3F]">ADA Compliance</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Every ramp meets or exceeds ADA standards for slope, width, handrails, and landing requirements.
                </p>
              </Card>

              <Card className="p-8 space-y-4 border-2 border-[#D1D9E6] hover:border-[#2d5a8c] hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1F3F]">Quality Inspections</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  All completed ramps undergo thorough safety inspections to ensure structural integrity and code
                  compliance.
                </p>
              </Card>

              <Card className="p-8 space-y-4 border-2 border-[#D1D9E6] hover:border-[#2d5a8c] hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1F3F]">Direct Coordination</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  We handle all contractor coordination, permits, and payments directly - you focus on your health.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ramp Specifications */}
      <section className="py-24 bg-gradient-to-br from-[#F5F7FA] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3F] text-center mb-16">Ramp Specifications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 space-y-6">
                <h3 className="text-2xl font-bold text-[#0B1F3F]">Standard Features</h3>
                <ul className="space-y-3 text-[#6B7280]">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>1:12 slope ratio (ADA compliant)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>36-inch minimum width</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Handrails on both sides</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Level landings at top and bottom</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Non-slip surface material</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Weather-resistant construction</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 space-y-6">
                <h3 className="text-2xl font-bold text-[#0B1F3F]">Safety Standards</h3>
                <ul className="space-y-3 text-[#6B7280]">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Load capacity: 600+ lbs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Edge protection barriers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Proper drainage design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Secure anchoring system</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Local building code compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Final safety inspection</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3F] text-center mb-16">Our Process</h2>
            <div className="space-y-8">
              <Card className="p-8 border-l-4 border-[#2d5a8c] hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#0B1F3F] mb-3">Initial Assessment</h3>
                    <p className="text-[#6B7280] leading-relaxed">
                      Submit an application with basic information about your home and accessibility needs. We'll
                      schedule a site visit to assess the requirements.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-l-4 border-[#2d5a8c] hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#0B1F3F] mb-3">Design & Permits</h3>
                    <p className="text-[#6B7280] leading-relaxed">
                      Our contractors design an ADA-compliant ramp specific to your home and obtain all necessary
                      building permits.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-l-4 border-[#2d5a8c] hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#0B1F3F] mb-3">Construction</h3>
                    <p className="text-[#6B7280] leading-relaxed">
                      Licensed contractors build your ramp using quality materials and following all safety protocols.
                      Most ramps completed within 1-2 weeks.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-l-4 border-[#2d5a8c] hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#0B1F3F] mb-3">Final Inspection</h3>
                    <p className="text-[#6B7280] leading-relaxed">
                      We conduct a thorough safety inspection and ensure all work meets code requirements before final
                      approval and payment to the contractor.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#0B1F3F] to-[#1a3a5c] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Need a Wheelchair Ramp?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Don't let home access challenges limit your independence. Apply for ramp assistance today.
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
