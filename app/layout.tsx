import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Good Neighbor Fund | Supporting Health & Mobility Needs",
  description:
    "Supporting Georgia neighbors with mobility, nutrition, and dignity when insurance falls short. DME grants, wheelchair ramps, tube feeding support, and holiday stockings.",
  icons: {
    icon: "/images/favicon.svg",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
