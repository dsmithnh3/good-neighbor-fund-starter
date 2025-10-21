"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      category: "General Questions",
      questions: [
        {
          q: "Who qualifies for assistance?",
          a: "We serve individuals and families facing health challenges and mobility needs when insurance coverage falls short. Eligibility is based on medical necessity, financial need, and available funding. We do not require extensive documentation or PHI for most programs.",
        },
        {
          q: "How do I apply for assistance?",
          a: "Applications can be submitted through our contact form or by calling us directly at +1-770-568-0063. The application process is simple and requires only basic information about your need and situation. No complex paperwork or medical records are required for initial applications.",
        },
        {
          q: "How long does the approval process take?",
          a: "Most applications are reviewed within 48 hours. Urgent needs are often approved same-week. We understand that medical needs can't wait, so we prioritize fast turnaround times while maintaining thorough review standards.",
        },
        {
          q: "Is this a loan or a gift?",
          a: "All assistance provided through Good Neighbor Fund is a gift, not a loan. There is no repayment required. We believe that those facing health challenges shouldn't have additional financial burdens.",
        },
      ],
    },
    {
      category: "Financial Questions",
      questions: [
        {
          q: "Do you require tax returns or financial statements?",
          a: "No. We do not require tax returns, bank statements, or extensive financial documentation. We ask basic questions about your financial situation to ensure assistance goes to those with genuine need, but we keep the process simple and dignified.",
        },
        {
          q: "How are funds distributed?",
          a: "We use a direct-to-vendor payment model. This means we pay suppliers, contractors, and medical vendors directly—never giving cash to applicants. This ensures transparency, reduces risk, and maximizes the impact of every donation.",
        },
        {
          q: "Are donations tax-deductible?",
          a: "Yes. Good Neighbor Health & Mobility Project is a 501(c)(3) nonprofit organization. All donations are tax-deductible to the full extent allowed by law. We provide donation receipts for your tax records.",
        },
        {
          q: "Can I designate my donation to a specific program?",
          a: "Yes. When donating, you can choose to support a specific program (Holiday Stockings, DME Micro-Grants, Tube Feeding, or Wheelchair Ramps) or allow us to direct funds where they're needed most.",
        },
      ],
    },
    {
      category: "Privacy & Security",
      questions: [
        {
          q: "Do you share my personal information?",
          a: "No. We protect patient information with HIPAA-level care and strict confidentiality protocols. We never share personal information without explicit consent. Your privacy is non-negotiable.",
        },
        {
          q: "What information do you collect?",
          a: "We collect only the minimum information necessary to process your application and provide assistance. This typically includes contact information, a description of your need, and basic financial situation. No Protected Health Information (PHI) is required for most programs.",
        },
        {
          q: "How do you protect my data?",
          a: "We use secure systems for data storage and transmission. Access to personal information is limited to authorized staff only. We follow industry best practices for data security and privacy protection.",
        },
      ],
    },
    {
      category: "Program-Specific Questions",
      questions: [
        {
          q: "What equipment is covered by DME Micro-Grants?",
          a: "We cover essential durable medical equipment that insurance denies or delays, typically in the $100-$500 range. This includes rollators with seats, heel-protective boots, fall-alert devices, shower chairs, transfer benches, reachers, and other mobility and safety equipment.",
        },
        {
          q: "Do wheelchair ramps meet building codes?",
          a: "Yes. All ramps are built by licensed and insured contractors following ADA standards and local building codes. Every ramp undergoes quality inspection before final approval and payment.",
        },
        {
          q: "What types of tube feeding formula do you support?",
          a: "We support all specialized enteral nutrition formulas prescribed by healthcare providers, including standard formulas, specialized metabolic formulas, high-calorie formulas, and pediatric formulas.",
        },
        {
          q: "When are Holiday Stockings distributed?",
          a: "Holiday Stockings are distributed annually in December. Applications are typically accepted starting in October. Each stocking is thoughtfully assembled with comfort items, personal care products, and seasonal treats.",
        },
      ],
    },
    {
      category: "Volunteering & Donations",
      questions: [
        {
          q: "How can I volunteer?",
          a: "We welcome volunteers for various activities including holiday stocking assembly, fundraising events, and community outreach. Contact us through our contact form or call us to learn about current volunteer opportunities.",
        },
        {
          q: "Can I donate items instead of money?",
          a: "Yes, especially for our Holiday Stockings program. We accept new comfort items, personal care products, and seasonal treats. Contact us to learn about current needs and donation drop-off locations.",
        },
        {
          q: "How do I know my donation is making a difference?",
          a: "We publish quarterly impact reports showing exactly how funds are used, how many neighbors we've helped, and specific outcomes by program. Transparency and accountability are core to our mission.",
        },
        {
          q: "Can businesses or organizations sponsor programs?",
          a: "We welcome corporate sponsorships and partnerships. Businesses can sponsor specific programs, fund multiple grants, or support our general operations. Contact us to discuss partnership opportunities.",
        },
      ],
    },
    {
      category: "Healthcare Providers",
      questions: [
        {
          q: "Can healthcare providers refer patients?",
          a: "Yes. We encourage healthcare providers to refer patients who are struggling with equipment denials, formula costs, or home access issues. The referral process is simple and requires minimal paperwork.",
        },
        {
          q: "Do you require medical documentation?",
          a: "For most programs, we do not require extensive medical documentation. A simple statement of medical necessity from a healthcare provider is often sufficient. We keep the process as simple as possible while ensuring appropriate use of funds.",
        },
      ],
    },
  ]

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
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">Frequently Asked Questions</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Find answers to common questions about our programs, application process, and how we help
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-3xl font-bold text-[#0B1F3F] mb-8">{category.category}</h2>
                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const globalIndex =
                      faqs.slice(0, categoryIndex).reduce((acc, cat) => acc + cat.questions.length, 0) + questionIndex
                    const isOpen = openIndex === globalIndex

                    return (
                      <Card
                        key={questionIndex}
                        className="overflow-hidden border-2 border-[#D1D9E6] hover:border-[#2d5a8c] transition-all duration-300"
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                          className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-[#F5F7FA] transition-colors"
                        >
                          <h3 className="text-xl font-semibold text-[#0B1F3F] pr-4">{faq.q}</h3>
                          <ChevronDown
                            className={`w-6 h-6 text-[#2d5a8c] flex-shrink-0 transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}
                        >
                          <div className="p-6 pt-0 text-[#6B7280] leading-relaxed text-lg border-t-2 border-[#D1D9E6]">
                            {faq.a}
                          </div>
                        </div>
                      </Card>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-24 bg-gradient-to-br from-[#F5F7FA] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3F]">Still Have Questions?</h2>
            <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
              We're here to help. Reach out to us directly and we'll be happy to answer any questions you have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                asChild
                size="lg"
                className="bg-[#0B1F3F] text-white hover:bg-[#0a1930] hover:scale-105 px-10 py-7 rounded-2xl font-semibold shadow-xl transition-all duration-300"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-[#0B1F3F] text-[#0B1F3F] hover:bg-[#0B1F3F] hover:text-white px-10 py-7 rounded-2xl font-semibold bg-transparent transition-all duration-300"
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
