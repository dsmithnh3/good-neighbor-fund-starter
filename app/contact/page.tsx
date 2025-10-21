import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">Get in Touch</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              We're here to help. Reach out to apply for assistance, volunteer, donate, or ask questions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-[#0B1F3F] mb-8">Contact Information</h2>
                  <p className="text-lg text-[#6B7280] leading-relaxed mb-8">
                    Whether you need assistance, want to volunteer, or have questions about our programs, we're here to
                    help.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#0B1F3F]/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#0B1F3F] mb-2">Phone</h3>
                        <a href="tel:+17705680063" className="text-[#2d5a8c] hover:underline text-lg font-medium">
                          +1-770-568-0063
                        </a>
                        <p className="text-sm text-[#6B7280] mt-1">Monday - Friday, 9am - 5pm EST</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#0B1F3F]/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#0B1F3F] mb-2">Email</h3>
                        <a
                          href="mailto:info@goodneighborfund.org"
                          className="text-[#2d5a8c] hover:underline text-lg font-medium break-all"
                        >
                          info@goodneighborfund.org
                        </a>
                        <p className="text-sm text-[#6B7280] mt-1">We respond within 24 hours</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#0B1F3F]/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#0B1F3F] mb-2">Location</h3>
                        <p className="text-[#6B7280] text-lg">
                          Loganville, Georgia
                          <br />
                          United States
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#0B1F3F]/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#0B1F3F] to-[#2d5a8c] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#0B1F3F] mb-2">Office Hours</h3>
                        <div className="text-[#6B7280] space-y-1">
                          <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                          <p>Saturday - Sunday: Closed</p>
                          <p className="text-sm mt-2">Emergency applications reviewed daily</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <Card className="p-10 shadow-2xl border-2 border-[#D1D9E6]">
                  <h2 className="text-3xl font-bold text-[#0B1F3F] mb-8">Send Us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-semibold text-[#0B1F3F] mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          required
                          className="w-full px-5 py-4 border-2 border-[#D1D9E6] rounded-xl focus:border-[#2d5a8c] focus:outline-none transition-colors text-[#0B1F3F]"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-semibold text-[#0B1F3F] mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          required
                          className="w-full px-5 py-4 border-2 border-[#D1D9E6] rounded-xl focus:border-[#2d5a8c] focus:outline-none transition-colors text-[#0B1F3F]"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#0B1F3F] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-5 py-4 border-2 border-[#D1D9E6] rounded-xl focus:border-[#2d5a8c] focus:outline-none transition-colors text-[#0B1F3F]"
                        placeholder="john.doe@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-[#0B1F3F] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-5 py-4 border-2 border-[#D1D9E6] rounded-xl focus:border-[#2d5a8c] focus:outline-none transition-colors text-[#0B1F3F]"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-[#0B1F3F] mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        required
                        className="w-full px-5 py-4 border-2 border-[#D1D9E6] rounded-xl focus:border-[#2d5a8c] focus:outline-none transition-colors text-[#0B1F3F] bg-white"
                      >
                        <option value="">Select a subject</option>
                        <option value="assistance">Apply for Assistance</option>
                        <option value="volunteer">Volunteer Opportunities</option>
                        <option value="donation">Donation Inquiry</option>
                        <option value="partnership">Partnership/Sponsorship</option>
                        <option value="provider">Healthcare Provider Referral</option>
                        <option value="general">General Question</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-[#0B1F3F] mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={6}
                        className="w-full px-5 py-4 border-2 border-[#D1D9E6] rounded-xl focus:border-[#2d5a8c] focus:outline-none resize-none transition-colors text-[#0B1F3F]"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    <div className="bg-[#F5F7FA] p-6 rounded-xl border-2 border-[#D1D9E6]">
                      <p className="text-sm text-[#6B7280] leading-relaxed">
                        <strong className="text-[#0B1F3F]">Privacy Notice:</strong> Your information is protected with
                        HIPAA-level care. We never share personal information without explicit consent. Fields marked
                        with * are required.
                      </p>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#0B1F3F] text-white hover:bg-[#0a1930] hover:scale-105 py-7 rounded-xl text-lg font-semibold shadow-xl transition-all duration-300"
                    >
                      Send Message
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-24 bg-gradient-to-br from-[#F5F7FA] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-[#0B1F3F] text-center mb-16">Quick Links</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#0B1F3F]/20">
                <h3 className="text-2xl font-bold text-[#0B1F3F]">Need Assistance?</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Learn about our programs and how to apply for help with medical equipment, ramps, formula, or holiday
                  support.
                </p>
                <Button
                  asChild
                  className="bg-[#0B1F3F] text-white hover:bg-[#0a1930] px-6 py-3 rounded-xl font-semibold"
                >
                  <a href="/programs">View Programs</a>
                </Button>
              </Card>

              <Card className="p-8 text-center space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#0B1F3F]/20">
                <h3 className="text-2xl font-bold text-[#0B1F3F]">Want to Help?</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Make a donation to support our mission of preventing isolation, injury, and malnutrition in our
                  community.
                </p>
                <Button
                  asChild
                  className="bg-[#0B1F3F] text-white hover:bg-[#0a1930] px-6 py-3 rounded-xl font-semibold"
                >
                  <a href="/donate">Donate Now</a>
                </Button>
              </Card>

              <Card className="p-8 text-center space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#0B1F3F]/20">
                <h3 className="text-2xl font-bold text-[#0B1F3F]">Have Questions?</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Find answers to common questions about eligibility, applications, privacy, and our programs.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-[#0B1F3F] text-[#0B1F3F] hover:bg-[#0B1F3F] hover:text-white px-6 py-3 rounded-xl font-semibold bg-transparent"
                >
                  <a href="/faq">View FAQ</a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
