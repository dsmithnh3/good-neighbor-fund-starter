import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Target, Eye, Flag, Shield, Heart, Users } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0B1F3F] to-[#1a3a5c] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">About Us</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed text-pretty">
              Learn about our mission to support individuals with health challenges and mobility needs
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0B1F3F] text-center mb-8">Our Story</h2>
            <div className="prose prose-lg max-w-none text-[#1F2937] leading-relaxed space-y-6">
              <p>
                Good Neighbor Health & Mobility Project was founded with a simple but powerful vision: no one should
                face health challenges alone, and everyone deserves access to the medical equipment and support they
                need to live with dignity and independence.
              </p>
              <p>
                We recognized a critical gap in healthcare coverage. Insurance often falls short when it comes to
                essential medical equipment, mobility aids, and nutritional support. Families are left struggling to
                afford items that can dramatically improve quality of life—or even save lives.
              </p>
              <p>
                Our organization steps in to bridge this gap. Through our direct-to-vendor payment model, we ensure that
                100% of donations go directly to helping those in need. We work with licensed professionals, maintain
                HIPAA-level privacy protection, and provide fast-turnaround assistance when it matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Goal */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0B1F3F] text-center mb-16">
            Mission, Vision & Goal
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 text-center space-y-4 hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-full flex items-center justify-center">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-[#0B1F3F]">Mission</h3>
              <p className="text-[#6B7280] leading-relaxed">
                To provide essential health and mobility support to individuals when insurance coverage falls short,
                ensuring dignity and independence for all
              </p>
            </Card>
            <Card className="p-8 text-center space-y-4 hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-full flex items-center justify-center">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-[#0B1F3F]">Vision</h3>
              <p className="text-[#6B7280] leading-relaxed">
                A community where no one faces health challenges alone, and everyone has access to the medical equipment
                and support they need
              </p>
            </Card>
            <Card className="p-8 text-center space-y-4 hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-full flex items-center justify-center">
                <Flag className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-[#0B1F3F]">Goal</h3>
              <p className="text-[#6B7280] leading-relaxed">
                To serve 100+ families in Year 1 through our programs, building a sustainable model for long-term
                community health support
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0B1F3F] text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 space-y-4">
              <Shield className="w-12 h-12 text-[#2d5a8c]" />
              <h3 className="text-xl font-semibold text-[#0B1F3F]">Transparency</h3>
              <p className="text-[#6B7280] leading-relaxed">
                We maintain complete transparency in our operations, with direct-to-vendor payments and quarterly
                reporting to ensure every dollar makes an impact.
              </p>
            </Card>
            <Card className="p-8 space-y-4">
              <Heart className="w-12 h-12 text-[#2d5a8c]" />
              <h3 className="text-xl font-semibold text-[#0B1F3F]">Dignity</h3>
              <p className="text-[#6B7280] leading-relaxed">
                We treat every recipient with respect and compassion, ensuring privacy protection and a streamlined
                process that honors their dignity.
              </p>
            </Card>
            <Card className="p-8 space-y-4">
              <Users className="w-12 h-12 text-[#2d5a8c]" />
              <h3 className="text-xl font-semibold text-[#0B1F3F]">Community</h3>
              <p className="text-[#6B7280] leading-relaxed">
                We believe in the power of neighbors helping neighbors, building a supportive community where everyone
                has access to essential healthcare resources.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0B1F3F]">Join Us in Making a Difference</h2>
            <p className="text-lg text-[#6B7280]">
              Whether through donations, volunteering, or spreading the word, you can help us support those in need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                asChild
                size="lg"
                className="bg-[#0B1F3F] text-white hover:bg-[#0a1930] px-8 py-6 rounded-2xl font-semibold"
              >
                <Link href="/#donate">Donate Today</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-[#0B1F3F] text-[#0B1F3F] hover:bg-[#0B1F3F] hover:text-white px-8 py-6 rounded-2xl font-semibold bg-transparent"
              >
                <Link href="/programs">View Our Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
