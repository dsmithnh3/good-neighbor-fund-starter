import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Clock, DollarSign, FileText, Armchair as Wheelchair } from "lucide-react"
import Link from "next/link"

export default function DMEGrantsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#0B1F3F] via-[#1a3a5c] to-[#2d5a8c] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="w-24 h-24 mx-auto bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-6">
              <Wheelchair className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">DME Micro-Grants</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Fast-turnaround micro-grants ($100-$500) for critical durable medical equipment when insurance denies or
              delays coverage
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3F] mb-6">What We Fund</h2>
              <p className="text-lg text-[#6B7280] leading-relaxed">
                Our DME Micro-Grant program provides quick financial assistance for essential medical equipment that
                insurance companies often deny as "not medically necessary" or delay with lengthy approval processes. We
                focus on items that significantly improve safety, mobility, and quality of life.
              </p>
            </div>

            {/* Equipment Examples */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 space-y-4 border-2 border-[#D1D9E6] hover:border-[#2d5a8c] hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-[#0B1F3F]">Mobility Aids</h3>
                <ul className="space-y-2 text-[#6B7280]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Rollators with seats</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Walking canes and crutches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Transfer benches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Wheelchair cushions</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 space-y-4 border-2 border-[#D1D9E6] hover:border-[#2d5a8c] hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-[#0B1F3F]">Safety Equipment</h3>
                <ul className="space-y-2 text-[#6B7280]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Fall-alert devices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Heel-protective boots</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Bed rails and grab bars</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Shower chairs</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 space-y-4 border-2 border-[#D1D9E6] hover:border-[#2d5a8c] hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-[#0B1F3F]">Daily Living Aids</h3>
                <ul className="space-y-2 text-[#6B7280]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Reachers and grabbers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Dressing aids</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Adaptive utensils</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Raised toilet seats</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 space-y-4 border-2 border-[#D1D9E6] hover:border-[#2d5a8c] hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-[#0B1F3F]">Medical Supplies</h3>
                <ul className="space-y-2 text-[#6B7280]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Compression stockings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Wound care supplies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Incontinence products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Diabetic supplies</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gradient-to-br from-[#F5F7FA] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3F] text-center mb-16">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 space-y-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center shadow-lg">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1F3F]">1. Apply</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Submit a simple application with basic information about your equipment need. No PHI required.
                </p>
              </Card>
              <Card className="p-8 space-y-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center shadow-lg">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1F3F]">2. Fast Review</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Most applications reviewed within 48 hours. Urgent needs often approved same-week.
                </p>
              </Card>
              <Card className="p-8 space-y-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center shadow-lg">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1F3F]">3. Direct Payment</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  We pay the vendor directly. You receive the equipment without upfront costs.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Grant Amounts */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3F] text-center mb-12">Grant Amounts</h2>
            <Card className="p-10 border-2 border-[#2d5a8c] bg-gradient-to-br from-white to-[#F5F7FA]">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b-2 border-[#D1D9E6]">
                  <span className="text-lg font-semibold text-[#0B1F3F]">Typical Grant Range</span>
                  <span className="text-3xl font-bold text-[#2d5a8c]">$100 - $500</span>
                </div>
                <p className="text-[#6B7280] leading-relaxed">
                  Grant amounts are determined based on the specific equipment needed and vendor quotes. We aim to cover
                  the full cost of essential items within our micro-grant range.
                </p>
                <div className="bg-white p-6 rounded-xl border-2 border-[#D1D9E6]">
                  <h4 className="font-bold text-[#0B1F3F] mb-3">What's Included:</h4>
                  <ul className="space-y-2 text-[#6B7280]">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" />
                      <span>Equipment purchase price</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" />
                      <span>Shipping and delivery costs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" />
                      <span>Basic assembly if required</span>
                    </li>
                  </ul>
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
            <h2 className="text-4xl md:text-5xl font-bold">Need Equipment Assistance?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Don't let insurance denials prevent you from getting the equipment you need. Apply for a DME micro-grant
              today.
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
