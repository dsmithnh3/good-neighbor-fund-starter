import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { TrendingUp, Users, Heart, Target, Gift, Armchair, Utensils, Home } from "lucide-react"
import Link from "next/link"

export default function ImpactPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">Our Impact</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Measuring our commitment to preventing isolation, injury, and malnutrition in our community
            </p>
          </div>
        </div>
      </section>

      {/* Year 1 Goals */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3F] mb-6">Year 1 Impact Goals</h2>
              <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
                We're committed to measurable results. Here are our ambitious but achievable goals for our first year
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-8 text-center space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#0B1F3F]/20">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center shadow-lg">
                  <Gift className="w-10 h-10 text-white" />
                </div>
                <div>
                  <div className="text-5xl font-bold text-[#0B1F3F] mb-2">100+</div>
                  <h3 className="text-xl font-semibold text-[#0B1F3F] mb-2">Holiday Stockings</h3>
                  <p className="text-[#6B7280] text-sm">Delivered to patients in need during the holiday season</p>
                </div>
                <div className="pt-4 border-t-2 border-[#D1D9E6]">
                  <p className="text-sm font-semibold text-[#2d5a8c]">$25 per stocking</p>
                </div>
              </Card>

              <Card className="p-8 text-center space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#0B1F3F]/20">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center shadow-lg">
                  <Armchair className="w-10 h-10 text-white" />
                </div>
                <div>
                  <div className="text-5xl font-bold text-[#0B1F3F] mb-2">30+</div>
                  <h3 className="text-xl font-semibold text-[#0B1F3F] mb-2">DME Micro-Grants</h3>
                  <p className="text-[#6B7280] text-sm">Awarded for essential medical equipment</p>
                </div>
                <div className="pt-4 border-t-2 border-[#D1D9E6]">
                  <p className="text-sm font-semibold text-[#2d5a8c]">$100-$500 each</p>
                </div>
              </Card>

              <Card className="p-8 text-center space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#0B1F3F]/20">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center shadow-lg">
                  <Utensils className="w-10 h-10 text-white" />
                </div>
                <div>
                  <div className="text-5xl font-bold text-[#0B1F3F] mb-2">10+</div>
                  <h3 className="text-xl font-semibold text-[#0B1F3F] mb-2">Months of Formula</h3>
                  <p className="text-[#6B7280] text-sm">Funded for tube-feeding patients</p>
                </div>
                <div className="pt-4 border-t-2 border-[#D1D9E6]">
                  <p className="text-sm font-semibold text-[#2d5a8c]">$250 per month</p>
                </div>
              </Card>

              <Card className="p-8 text-center space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#0B1F3F]/20">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center shadow-lg">
                  <Home className="w-10 h-10 text-white" />
                </div>
                <div>
                  <div className="text-5xl font-bold text-[#0B1F3F] mb-2">5+</div>
                  <h3 className="text-xl font-semibold text-[#0B1F3F] mb-2">Wheelchair Ramps</h3>
                  <p className="text-[#6B7280] text-sm">Constructed or funded for home accessibility</p>
                </div>
                <div className="pt-4 border-t-2 border-[#D1D9E6]">
                  <p className="text-sm font-semibold text-[#2d5a8c]">$1,500-$3,000 each</p>
                </div>
              </Card>
            </div>

            <div className="mt-16 text-center">
              <Card className="p-10 bg-gradient-to-br from-[#F5F7FA] to-white border-2 border-[#2d5a8c] max-w-3xl mx-auto">
                <div className="space-y-4">
                  <Target className="w-16 h-16 mx-auto text-[#2d5a8c]" />
                  <h3 className="text-3xl font-bold text-[#0B1F3F]">Total Year 1 Goal</h3>
                  <p className="text-5xl font-bold text-[#2d5a8c]">145+ Neighbors Helped</p>
                  <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
                    Through our four core programs, we aim to make a meaningful difference in the lives of over 145
                    individuals and families in our first year
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact by Program */}
      <section className="py-24 bg-gradient-to-br from-[#F5F7FA] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3F] mb-6">Impact by Program</h2>
              <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
                See how each program contributes to our mission of preventing isolation, injury, and malnutrition
              </p>
            </div>

            <div className="space-y-8">
              <Card className="p-10 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Gift className="w-12 h-12 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-[#0B1F3F] mb-4">Holiday Stockings</h3>
                    <p className="text-lg text-[#6B7280] mb-6 leading-relaxed">
                      Bringing comfort and dignity to patients during the holiday season, reducing isolation and
                      providing emotional support during challenging times.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-6">
                      <div className="bg-[#F5F7FA] p-4 rounded-xl">
                        <p className="text-3xl font-bold text-[#2d5a8c]">100+</p>
                        <p className="text-sm text-[#6B7280]">Stockings delivered</p>
                      </div>
                      <div className="bg-[#F5F7FA] p-4 rounded-xl">
                        <p className="text-3xl font-bold text-[#2d5a8c]">$2,500</p>
                        <p className="text-sm text-[#6B7280]">Total program cost</p>
                      </div>
                      <div className="bg-[#F5F7FA] p-4 rounded-xl">
                        <p className="text-3xl font-bold text-[#2d5a8c]">Dec</p>
                        <p className="text-sm text-[#6B7280]">Annual distribution</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-10 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Armchair className="w-12 h-12 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-[#0B1F3F] mb-4">DME Micro-Grants</h3>
                    <p className="text-lg text-[#6B7280] mb-6 leading-relaxed">
                      Preventing falls and injuries by providing essential mobility and safety equipment when insurance
                      denies coverage.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-6">
                      <div className="bg-[#F5F7FA] p-4 rounded-xl">
                        <p className="text-3xl font-bold text-[#2d5a8c]">30+</p>
                        <p className="text-sm text-[#6B7280]">Grants awarded</p>
                      </div>
                      <div className="bg-[#F5F7FA] p-4 rounded-xl">
                        <p className="text-3xl font-bold text-[#2d5a8c]">$9,000</p>
                        <p className="text-sm text-[#6B7280]">Total program cost</p>
                      </div>
                      <div className="bg-[#F5F7FA] p-4 rounded-xl">
                        <p className="text-3xl font-bold text-[#2d5a8c]">48hrs</p>
                        <p className="text-sm text-[#6B7280]">Average approval time</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-10 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Utensils className="w-12 h-12 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-[#0B1F3F] mb-4">Tube Feeding Support</h3>
                    <p className="text-lg text-[#6B7280] mb-6 leading-relaxed">
                      Preventing malnutrition by ensuring consistent access to medically necessary formula when
                      insurance limits are reached.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-6">
                      <div className="bg-[#F5F7FA] p-4 rounded-xl">
                        <p className="text-3xl font-bold text-[#2d5a8c]">10+</p>
                        <p className="text-sm text-[#6B7280]">Months funded</p>
                      </div>
                      <div className="bg-[#F5F7FA] p-4 rounded-xl">
                        <p className="text-3xl font-bold text-[#2d5a8c]">$2,500</p>
                        <p className="text-sm text-[#6B7280]">Total program cost</p>
                      </div>
                      <div className="bg-[#F5F7FA] p-4 rounded-xl">
                        <p className="text-3xl font-bold text-[#2d5a8c]">100%</p>
                        <p className="text-sm text-[#6B7280]">Direct to vendor</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-10 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Home className="w-12 h-12 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-[#0B1F3F] mb-4">Wheelchair Ramps</h3>
                    <p className="text-lg text-[#6B7280] mb-6 leading-relaxed">
                      Preventing isolation and enabling independence by providing safe home access for individuals with
                      mobility challenges.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-6">
                      <div className="bg-[#F5F7FA] p-4 rounded-xl">
                        <p className="text-3xl font-bold text-[#2d5a8c]">5+</p>
                        <p className="text-sm text-[#6B7280]">Ramps built</p>
                      </div>
                      <div className="bg-[#F5F7FA] p-4 rounded-xl">
                        <p className="text-3xl font-bold text-[#2d5a8c]">$10,000</p>
                        <p className="text-sm text-[#6B7280]">Total program cost</p>
                      </div>
                      <div className="bg-[#F5F7FA] p-4 rounded-xl">
                        <p className="text-3xl font-bold text-[#2d5a8c]">100%</p>
                        <p className="text-sm text-[#6B7280]">Licensed contractors</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Total Impact */}
      <section className="py-24 bg-gradient-to-br from-[#0B1F3F] to-[#1a3a5c] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Total Year 1 Investment</h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Our projected budget to achieve these ambitious goals
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-10 space-y-6">
                <TrendingUp className="w-16 h-16 text-white" />
                <h3 className="text-3xl font-bold">Program Funding</h3>
                <div className="text-5xl font-bold">$24,000</div>
                <p className="text-white/80 text-lg">Direct assistance to neighbors in need</p>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-10 space-y-6">
                <Users className="w-16 h-16 text-white" />
                <h3 className="text-3xl font-bold">People Served</h3>
                <div className="text-5xl font-bold">145+</div>
                <p className="text-white/80 text-lg">Individuals and families helped</p>
              </Card>
            </div>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-10 text-center">
              <Heart className="w-20 h-20 mx-auto mb-6 text-white" />
              <h3 className="text-3xl font-bold mb-4">Your Impact</h3>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                Every donation directly supports our mission to prevent isolation, injury, and malnutrition. With your
                help, we can achieve these goals and expand our reach in Year 2.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-[#0B1F3F] hover:bg-white/90 hover:scale-105 px-12 py-7 rounded-2xl font-semibold shadow-2xl transition-all duration-300"
              >
                <Link href="/donate">Donate Now</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Transparency Commitment */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3F]">Our Transparency Commitment</h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              We publish quarterly impact reports showing exactly how funds are used, how many neighbors we've helped,
              and our progress toward these goals. Transparency and accountability are non-negotiable.
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-[#0B1F3F] text-[#0B1F3F] hover:bg-[#0B1F3F] hover:text-white px-10 py-7 rounded-2xl font-semibold bg-transparent"
            >
              <Link href="/approach">Learn About Our Approach</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
