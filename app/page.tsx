import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Users,
  HandHeart,
  Target,
  Eye,
  Flag,
  CheckCircle2,
  FileText,
  CreditCard,
  UserCheck,
  DollarSign,
  Armchair as Wheelchair,
  Gift,
  Utensils,
  Home,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Gradient Background */}
        {/* Updated gradient to use semantic tokens */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent" />

        {/* Subtle Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container relative z-10 mx-auto px-4 py-20 text-center">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Updated text colors to use semantic tokens */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-primary-foreground text-balance">
              When Insurance Falls Short,
              <span className="block mt-2 bg-gradient-to-r from-primary-foreground to-primary-foreground/80 bg-clip-text text-transparent">
                We Step In
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto text-pretty">
              Providing essential health and mobility support to individuals and families facing medical challenges
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button
                asChild
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:scale-105 text-lg px-10 py-7 rounded-2xl font-semibold shadow-2xl transition-all duration-300"
              >
                <Link href="/donate">Donate Today</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 hover:scale-105 text-lg px-10 py-7 rounded-2xl font-semibold bg-transparent backdrop-blur-sm transition-all duration-300"
              >
                <Link href="/programs">Our Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How You Can Assist */}
      {/* Updated background and text colors to use semantic tokens */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">how you can assist</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Updated card colors to use semantic tokens */}
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 p-8 text-center space-y-4 hover:bg-primary-foreground/15 transition-all duration-300">
              <div className="w-16 h-16 mx-auto bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <DollarSign className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold">Donate</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Your financial support helps us provide essential medical equipment and supplies to those in need
              </p>
            </Card>
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 p-8 text-center space-y-4 hover:bg-primary-foreground/15 transition-all duration-300">
              <div className="w-16 h-16 mx-auto bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <HandHeart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold">Volunteer</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Join our team and make a direct impact in your community by helping those facing health challenges
              </p>
            </Card>
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 p-8 text-center space-y-4 hover:bg-primary-foreground/15 transition-all duration-300">
              <div className="w-16 h-16 mx-auto bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold">Spread The Word</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Share our mission with friends and family to help us reach more people who need assistance
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us */}
      {/* Updated background and text colors to use semantic tokens */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-8">about us</h2>
            <div className="prose prose-lg max-w-none text-card-foreground leading-relaxed space-y-6">
              <p>
                Good Neighbor Health & Mobility Project is dedicated to supporting individuals and families facing
                health challenges and mobility needs. We step in when insurance falls short, providing essential medical
                equipment, supplies, and support services.
              </p>
              <p>
                Our direct-to-vendor payment model ensures that 100% of your donation goes directly to helping those in
                need. We work with licensed professionals and maintain HIPAA-level privacy protection for all
                recipients.
              </p>
              <p>
                Through our DME Micro-Grants, Wheelchair Ramp Program, Tube Feeding Support, and Holiday Stocking
                initiative, we provide fast-turnaround assistance that makes a real difference in people's lives.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 rounded-2xl font-semibold"
              >
                <Link href="#donate">Donate Today!</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 rounded-2xl font-semibold bg-transparent"
              >
                <Link href="/programs">Our Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Goal */}
      {/* Updated background color to use semantic token */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          {/* Updated text colors to use semantic tokens */}
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-6">Mission, Vision & Goal</h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-3xl mx-auto">
            Our commitment to preventing isolation, injury, and malnutrition through timely, practical support
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Updated card border colors to use semantic tokens */}
            <Card className="p-8 text-center space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/10">
              {/* Updated gradient colors to use semantic tokens */}
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg">
                <Target className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Mission</h3>
              <p className="text-neutral-foreground leading-relaxed text-pretty">
                To prevent isolation, injury, and malnutrition by providing timely, practical support that allows
                patients and families to remain safe and independent in their own homes
              </p>
            </Card>
            <Card className="p-8 text-center space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/10">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg">
                <Eye className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Vision</h3>
              <p className="text-neutral-foreground leading-relaxed text-pretty">
                A community where no one faces health challenges alone, and everyone has access to the medical equipment
                and support they need to thrive
              </p>
            </Card>
            <Card className="p-8 text-center space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/10">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg">
                <Flag className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Goal</h3>
              <p className="text-neutral-foreground leading-relaxed text-pretty">
                To serve 100+ families in Year 1 through our four core programs, building a sustainable model for
                long-term community health support
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Approach & Safeguards - NEW SECTION */}
      {/* Updated background gradient to use semantic tokens */}
      <section className="py-24 bg-gradient-to-br from-neutral to-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              {/* Updated text colors to use semantic tokens */}
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Approach & Safeguards</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Your generosity deserves accountability. Here's how we ensure every dollar makes a difference
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Donor Trust & Transparency */}
              <Card className="p-8 space-y-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  {/* Updated gradient colors to use semantic tokens */}
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Direct Vendor Payments</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Your donations go straight to suppliers and contractors, never as cash to applicants. This reduces
                      risk and maximizes impact.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 space-y-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <UserCheck className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Licensed & Insured Contractors</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      All ramp construction and installations are performed by certified, licensed, and insured
                      professionals with strict safety protocols.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 space-y-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Privacy-First Practices</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We protect patient information with HIPAA-level care and strict confidentiality protocols. Your
                      privacy is non-negotiable.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 space-y-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Transparent Reporting</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Quarterly impact updates show exactly how funds are used, how many neighbors we've helped, and
                      where your donations went.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 rounded-2xl font-semibold bg-transparent"
              >
                <Link href="/approach">Learn More About Our Approach</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Process */}
      {/* Updated background color to use semantic token */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            {/* Updated text colors to use semantic tokens */}
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">How We Help</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our streamlined process ensures fast, dignified assistance with maximum transparency
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Updated card border colors to use semantic tokens */}
            <Card className="p-8 space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20">
              {/* Updated gradient and text colors to use semantic tokens */}
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg">
                1
              </div>
              <FileText className="w-10 h-10 text-accent" />
              <h3 className="text-xl font-bold text-foreground">Application</h3>
              <p className="text-muted-foreground leading-relaxed">
                Simple request form - no PHI required, no complex paperwork
              </p>
            </Card>
            <Card className="p-8 space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg">
                2
              </div>
              <CheckCircle2 className="w-10 h-10 text-accent" />
              <h3 className="text-xl font-bold text-foreground">Review</h3>
              <p className="text-muted-foreground leading-relaxed">
                Quick turnaround - often same-week for urgent needs
              </p>
            </Card>
            <Card className="p-8 space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg">
                3
              </div>
              <CreditCard className="w-10 h-10 text-accent" />
              <h3 className="text-xl font-bold text-foreground">Direct Payment</h3>
              <p className="text-muted-foreground leading-relaxed">
                We pay vendors directly - maximum impact, full transparency
              </p>
            </Card>
            <Card className="p-8 space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg">
                4
              </div>
              <UserCheck className="w-10 h-10 text-accent" />
              <h3 className="text-xl font-bold text-foreground">Follow-Up</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ongoing support to ensure your needs are fully met
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs */}
      {/* Updated background color to use semantic token */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            {/* Updated text colors to use semantic tokens */}
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Programs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Fast-turnaround assistance when insurance falls short
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <Link href="/programs/dme-grants" className="group">
              {/* Updated card border colors to use semantic tokens */}
              <Card className="p-8 space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full border-2 border-transparent hover:border-primary/20">
                {/* Updated gradient colors to use semantic tokens */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Wheelchair className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">DME Micro-Grants</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fast-turnaround micro-grants ($100-$500) for critical equipment like rollators with seats,
                  heel-protective boots, and fall-alert devices
                </p>
              </Card>
            </Link>
            <Link href="/programs/wheelchair-ramps" className="group">
              <Card className="p-8 space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full border-2 border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Home className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Wheelchair Ramps</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Funding and coordinating construction of safe home access ramps through licensed and insured
                  contractors with strict safety protocols
                </p>
              </Card>
            </Link>
            <Link href="/programs/tube-feeding" className="group">
              <Card className="p-8 space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full border-2 border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Utensils className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Tube Feeding Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Direct-to-vendor subsidies ensuring patients reliant on enteral nutrition have consistent access to
                  medically necessary formula
                </p>
              </Card>
            </Link>
            <Link href="/programs/holiday-stockings" className="group">
              <Card className="p-8 space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full border-2 border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Gift className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Holiday Stockings</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Annual program delivering comfort and care items to patients during the holiday season, easing the
                  burden of illness with dignity
                </p>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Year 1 Impact Goals - NEW SECTION */}
      {/* Updated gradient colors to use semantic tokens */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Year 1 Impact Goals</h2>
            {/* Updated text color to use semantic token */}
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              We're committed to measurable results. Track our progress as we work to serve our community
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Updated card colors to use semantic tokens */}
            <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 p-8 text-center space-y-4 hover:bg-primary-foreground/15 transition-all duration-300 hover:scale-105">
              <div className="text-5xl font-bold text-primary-foreground">100+</div>
              <h3 className="text-xl font-semibold">Holiday Stockings</h3>
              <p className="text-primary-foreground/80 text-sm">Delivered to patients in need</p>
            </Card>
            <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 p-8 text-center space-y-4 hover:bg-primary-foreground/15 transition-all duration-300 hover:scale-105">
              <div className="text-5xl font-bold text-primary-foreground">30+</div>
              <h3 className="text-xl font-semibold">DME Micro-Grants</h3>
              <p className="text-primary-foreground/80 text-sm">Awarded ($100-$500 each)</p>
            </Card>
            <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 p-8 text-center space-y-4 hover:bg-primary-foreground/15 transition-all duration-300 hover:scale-105">
              <div className="text-5xl font-bold text-primary-foreground">10+</div>
              <h3 className="text-xl font-semibold">Months of Formula</h3>
              <p className="text-primary-foreground/80 text-sm">Funded for tube-feeding patients</p>
            </Card>
            <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 p-8 text-center space-y-4 hover:bg-primary-foreground/15 transition-all duration-300 hover:scale-105">
              <div className="text-5xl font-bold text-primary-foreground">5+</div>
              <h3 className="text-xl font-semibold">Wheelchair Ramps</h3>
              <p className="text-primary-foreground/80 text-sm">Constructed or funded</p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:scale-105 px-10 py-7 rounded-2xl font-semibold shadow-xl transition-all duration-300"
            >
              <Link href="/impact">View Our Impact Dashboard</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      {/* Updated gradient colors to use semantic tokens */}
      <section id="donate" className="py-24 bg-gradient-to-br from-neutral to-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <div>
              {/* Updated text colors to use semantic tokens */}
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Make a Donation</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Your contribution makes a direct impact. See exactly how your donation helps:
              </p>
            </div>

            {/* Donation Impact Breakdown */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Updated card border colors to use semantic tokens */}
              <Card className="p-8 space-y-3 border-2 border-border hover:border-accent hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl font-bold text-foreground">$25</div>
                <p className="text-muted-foreground font-medium">Supplies for one holiday stocking</p>
              </Card>
              <Card className="p-8 space-y-3 border-2 border-border hover:border-accent hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl font-bold text-foreground">$100</div>
                <p className="text-muted-foreground font-medium">One complete DME micro-grant</p>
              </Card>
              <Card className="p-8 space-y-3 border-2 border-border hover:border-accent hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl font-bold text-foreground">$250</div>
                <p className="text-muted-foreground font-medium">One month of tube feeding formula</p>
              </Card>
              <Card className="p-8 space-y-3 border-2 border-border hover:border-accent hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl font-bold text-foreground">$500</div>
                <p className="text-muted-foreground font-medium">Partial wheelchair ramp funding</p>
              </Card>
              <Card className="p-8 space-y-3 border-2 border-border hover:border-accent hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl font-bold text-foreground">$1,500</div>
                <p className="text-muted-foreground font-medium">Complete wheelchair ramp</p>
              </Card>
              {/* Updated card border and background colors to use semantic tokens */}
              <Card className="p-8 space-y-3 border-2 border-accent bg-gradient-to-br from-neutral to-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl font-bold text-foreground">Custom</div>
                <p className="text-muted-foreground font-medium">Any amount helps!</p>
              </Card>
            </div>

            <div className="pt-8">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-success to-success/90 text-success-foreground hover:from-success/90 hover:to-success/80 hover:scale-105 px-12 py-8 rounded-2xl text-xl font-bold shadow-2xl transition-all duration-300"
              >
                <Link href="/donate">Donate Now</Link>
              </Button>
            </div>

            {/* Updated text colors to use semantic tokens */}
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              <strong className="text-foreground">100% of your donation</strong> goes directly to helping those in need
              through our direct-to-vendor payment model. All donations are tax-deductible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* Updated background color to use semantic token */}
      <section id="contact" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Updated text color to use semantic token */}
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16">Get in Touch</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  {/* Updated text colors to use semantic tokens */}
                  <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                  <div className="space-y-6 text-muted-foreground">
                    <div className="flex items-start gap-4">
                      {/* Updated gradient colors to use semantic tokens */}
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-primary-foreground"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Location</p>
                        <p>Loganville, Georgia, United States</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-primary-foreground"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Phone</p>
                        <p>+1-770-568-0063</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-primary-foreground"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Email</p>
                        <p>info@goodneighborfund.org</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="p-8 space-y-6 shadow-xl">
                {/* Updated text color to use semantic token */}
                <h3 className="text-2xl font-bold text-foreground">Send Us a Message</h3>
                <div className="space-y-4">
                  {/* Updated input border colors to use semantic tokens */}
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-5 py-4 border-2 border-border rounded-xl focus:border-accent focus:outline-none transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-5 py-4 border-2 border-border rounded-xl focus:border-accent focus:outline-none transition-colors"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    className="w-full px-5 py-4 border-2 border-border rounded-xl focus:border-accent focus:outline-none resize-none transition-colors"
                  />
                  {/* Updated button colors to use semantic tokens */}
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 py-6 rounded-xl text-lg font-semibold shadow-lg transition-all duration-300">
                    Send Message
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
