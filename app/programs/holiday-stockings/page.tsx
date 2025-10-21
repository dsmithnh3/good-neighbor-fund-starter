import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Gift, Heart, Calendar, Users } from "lucide-react"
import Link from "next/link"

export default function HolidayStockingsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#0B1F3F] via-[#1a3a5c] to-[#2d5a8c] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="w-24 h-24 mx-auto bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-6">
              <Gift className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">Holiday Stockings</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Bringing comfort, dignity, and joy to patients facing health challenges during the holiday season
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3F] mb-6">Spreading Holiday Cheer</h2>
              <p className="text-lg text-[#6B7280] leading-relaxed">
                The holidays can be especially difficult for those facing serious health challenges. Our Holiday
                Stockings program delivers thoughtfully curated care packages to patients, providing comfort items,
                personal care products, and seasonal treats that bring dignity and joy during a challenging time.
              </p>
            </div>

            {/* Program Highlights */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 space-y-4 border-2 border-[#D1D9E6] hover:border-[#2d5a8c] hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1F3F]">Thoughtful Care</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Each stocking is carefully assembled with items chosen to provide comfort and dignity to those facing
                  illness.
                </p>
              </Card>

              <Card className="p-8 space-y-4 border-2 border-[#D1D9E6] hover:border-[#2d5a8c] hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center shadow-lg">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1F3F]">Annual Program</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Delivered each December to bring holiday cheer to patients and families during the season of giving.
                </p>
              </Card>

              <Card className="p-8 space-y-4 border-2 border-[#D1D9E6] hover:border-[#2d5a8c] hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1F3F]">Community Support</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Volunteers and donors come together to assemble and deliver stockings with compassion and care.
                </p>
              </Card>

              <Card className="p-8 space-y-4 border-2 border-[#D1D9E6] hover:border-[#2d5a8c] hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center shadow-lg">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1F3F]">Delivered with Dignity</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Each delivery is made with respect for privacy and sensitivity to the recipient's circumstances.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-24 bg-gradient-to-br from-[#F5F7FA] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3F] text-center mb-16">
              What's Inside Each Stocking
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-8 space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-[#0B1F3F]">Comfort Items</h3>
                <ul className="space-y-3 text-[#6B7280]">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Soft blankets or throws</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Cozy socks and slippers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Warm clothing items</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Comfort pillows</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-[#0B1F3F]">Personal Care</h3>
                <ul className="space-y-3 text-[#6B7280]">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Lotions and moisturizers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Lip balm and hand cream</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Hygiene essentials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Grooming supplies</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-[#0B1F3F]">Seasonal Treats</h3>
                <ul className="space-y-3 text-[#6B7280]">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Holiday snacks and treats</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Hot cocoa and tea</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Seasonal decorations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Festive cards</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-[#0B1F3F]">Entertainment</h3>
                <ul className="space-y-3 text-[#6B7280]">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Puzzle books and games</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Reading materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Art and craft supplies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Music or audiobooks</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-[#0B1F3F]">Practical Items</h3>
                <ul className="space-y-3 text-[#6B7280]">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Tissues and wipes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Hand sanitizer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Reusable water bottles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Storage organizers</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-[#0B1F3F]">Special Touches</h3>
                <ul className="space-y-3 text-[#6B7280]">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Handwritten holiday cards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Inspirational messages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Small gift items</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>Community love and support</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3F] text-center mb-16">Get Involved</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 space-y-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#0B1F3F]/20">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center shadow-lg">
                  <Gift className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1F3F]">Donate Items</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Contribute new comfort items, personal care products, or seasonal treats for our stockings.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-[#0B1F3F] text-[#0B1F3F] hover:bg-[#0B1F3F] hover:text-white px-6 py-3 rounded-xl font-semibold bg-transparent"
                >
                  <Link href="/contact">Learn More</Link>
                </Button>
              </Card>

              <Card className="p-8 space-y-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#0B1F3F]/20">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center shadow-lg">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1F3F]">Volunteer</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Help assemble and deliver stockings during our annual holiday distribution event.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-[#0B1F3F] text-[#0B1F3F] hover:bg-[#0B1F3F] hover:text-white px-6 py-3 rounded-xl font-semibold bg-transparent"
                >
                  <Link href="/contact">Sign Up</Link>
                </Button>
              </Card>

              <Card className="p-8 space-y-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#0B1F3F]/20">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center shadow-lg">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1F3F]">Sponsor a Stocking</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  $25 sponsors one complete holiday stocking for a patient in need.
                </p>
                <Button
                  asChild
                  className="bg-[#0B1F3F] text-white hover:bg-[#0a1930] px-6 py-3 rounded-xl font-semibold"
                >
                  <Link href="/donate">Donate $25</Link>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#0B1F3F] to-[#1a3a5c] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Spread Holiday Cheer</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Help us bring comfort and joy to patients facing health challenges this holiday season.
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
                <Link href="/programs">View All Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
