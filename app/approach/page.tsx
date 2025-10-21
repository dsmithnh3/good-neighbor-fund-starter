import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Shield, FileText, Lock, CheckCircle2, DollarSign, Users, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function ApproachPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">Our Approach & Safeguards</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Your generosity deserves accountability. Here's how we ensure every dollar makes a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3F] mb-6">Our Core Principles</h2>
              <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
                Everything we do is guided by transparency, accountability, and respect for those we serve
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-10 space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#0B1F3F]/20">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center shadow-lg">
                  <DollarSign className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1F3F]">Direct Vendor Payments</h3>
                <p className="text-[#6B7280] leading-relaxed text-lg">
                  Your donations go straight to suppliers, contractors, and medical vendors—never as cash to applicants.
                  This model reduces risk, prevents misuse, and maximizes impact. Every payment is documented and
                  traceable.
                </p>
                <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span className="text-[#4B5563]">Payments made directly to verified vendors</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span className="text-[#4B5563]">Full documentation of all transactions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span className="text-[#4B5563]">Eliminates cash handling and potential misuse</span>
                  </div>
                </div>
              </Card>

              <Card className="p-10 space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#0B1F3F]/20">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center shadow-lg">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1F3F]">Licensed & Insured Contractors</h3>
                <p className="text-[#6B7280] leading-relaxed text-lg">
                  All wheelchair ramp construction and installations are performed by licensed, insured, and bonded
                  professionals. We verify credentials, check references, and ensure strict adherence to safety
                  protocols and building codes.
                </p>
                <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span className="text-[#4B5563]">Verified licenses and insurance coverage</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span className="text-[#4B5563]">ADA compliance and building code adherence</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span className="text-[#4B5563]">Quality inspections on all completed work</span>
                  </div>
                </div>
              </Card>

              <Card className="p-10 space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#0B1F3F]/20">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center shadow-lg">
                  <Lock className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1F3F]">Privacy-First Practices</h3>
                <p className="text-[#6B7280] leading-relaxed text-lg">
                  We protect patient information with HIPAA-level care and strict confidentiality protocols. No
                  Protected Health Information (PHI) is required for applications. Your privacy is non-negotiable, and
                  we never share personal information without explicit consent.
                </p>
                <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span className="text-[#4B5563]">HIPAA-level privacy protection</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span className="text-[#4B5563]">No PHI required for applications</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span className="text-[#4B5563]">Secure data storage and handling</span>
                  </div>
                </div>
              </Card>

              <Card className="p-10 space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#0B1F3F]/20">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center shadow-lg">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1F3F]">Transparent Reporting</h3>
                <p className="text-[#6B7280] leading-relaxed text-lg">
                  Quarterly impact reports show exactly how funds are used, how many neighbors we've helped, and where
                  your donations went. We believe in complete transparency and accountability to our donors and the
                  community we serve.
                </p>
                <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span className="text-[#4B5563]">Quarterly impact reports published</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span className="text-[#4B5563]">Detailed financial transparency</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span className="text-[#4B5563]">Measurable outcomes and impact metrics</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 bg-gradient-to-br from-[#F5F7FA] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3F] mb-6">Our Application Process</h2>
              <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
                Simple, dignified, and designed to get help to those who need it quickly
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-8 border-l-4 border-[#2d5a8c] hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center flex-shrink-0 text-white font-bold text-2xl shadow-lg">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#0B1F3F] mb-3">Simple Application</h3>
                    <p className="text-[#6B7280] leading-relaxed text-lg mb-4">
                      No complex paperwork. No PHI required. Just basic information about your need and situation.
                    </p>
                    <div className="bg-[#F5F7FA] p-4 rounded-xl">
                      <p className="text-sm text-[#4B5563] font-semibold mb-2">What we ask for:</p>
                      <ul className="text-sm text-[#6B7280] space-y-1">
                        <li>• Contact information</li>
                        <li>• Description of need</li>
                        <li>• Basic financial situation</li>
                        <li>• No medical records required</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-l-4 border-[#2d5a8c] hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center flex-shrink-0 text-white font-bold text-2xl shadow-lg">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#0B1F3F] mb-3">Fast Review</h3>
                    <p className="text-[#6B7280] leading-relaxed text-lg mb-4">
                      Most applications reviewed within 48 hours. Urgent needs often approved same-week.
                    </p>
                    <div className="bg-[#F5F7FA] p-4 rounded-xl">
                      <p className="text-sm text-[#4B5563] font-semibold mb-2">Review criteria:</p>
                      <ul className="text-sm text-[#6B7280] space-y-1">
                        <li>• Medical necessity</li>
                        <li>• Financial need</li>
                        <li>• Available funding</li>
                        <li>• Urgency of situation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-l-4 border-[#2d5a8c] hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center flex-shrink-0 text-white font-bold text-2xl shadow-lg">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#0B1F3F] mb-3">Direct Coordination</h3>
                    <p className="text-[#6B7280] leading-relaxed text-lg mb-4">
                      We handle all vendor coordination, quotes, and logistics. You focus on your health.
                    </p>
                    <div className="bg-[#F5F7FA] p-4 rounded-xl">
                      <p className="text-sm text-[#4B5563] font-semibold mb-2">We coordinate:</p>
                      <ul className="text-sm text-[#6B7280] space-y-1">
                        <li>• Vendor selection and quotes</li>
                        <li>• Delivery scheduling</li>
                        <li>• Installation if needed</li>
                        <li>• Quality verification</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-l-4 border-[#2d5a8c] hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-2xl flex items-center justify-center flex-shrink-0 text-white font-bold text-2xl shadow-lg">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#0B1F3F] mb-3">Payment & Follow-Up</h3>
                    <p className="text-[#6B7280] leading-relaxed text-lg mb-4">
                      We pay vendors directly and follow up to ensure everything meets your needs.
                    </p>
                    <div className="bg-[#F5F7FA] p-4 rounded-xl">
                      <p className="text-sm text-[#4B5563] font-semibold mb-2">After approval:</p>
                      <ul className="text-sm text-[#6B7280] space-y-1">
                        <li>• Direct payment to vendor</li>
                        <li>• Delivery confirmation</li>
                        <li>• Quality check-in</li>
                        <li>• Ongoing support if needed</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Standards */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3F] mb-6">Safety & Quality Standards</h2>
              <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
                We maintain rigorous standards to ensure safety and quality in everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 space-y-4 hover:shadow-xl transition-all duration-300">
                <Users className="w-12 h-12 text-[#2d5a8c]" />
                <h3 className="text-xl font-bold text-[#0B1F3F]">Vendor Verification</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  All vendors and contractors undergo thorough background checks and credential verification before
                  approval.
                </p>
              </Card>

              <Card className="p-8 space-y-4 hover:shadow-xl transition-all duration-300">
                <Shield className="w-12 h-12 text-[#2d5a8c]" />
                <h3 className="text-xl font-bold text-[#0B1F3F]">Quality Control</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Every product and service is inspected to ensure it meets safety standards and quality expectations.
                </p>
              </Card>

              <Card className="p-8 space-y-4 hover:shadow-xl transition-all duration-300">
                <TrendingUp className="w-12 h-12 text-[#2d5a8c]" />
                <h3 className="text-xl font-bold text-[#0B1F3F]">Continuous Improvement</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  We regularly review and update our processes based on feedback and best practices in the field.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#0B1F3F] to-[#1a3a5c] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Trust in Action</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Our commitment to transparency and accountability means you can donate with confidence, knowing your
              generosity makes a real difference.
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
                <Link href="/impact">View Our Impact</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
