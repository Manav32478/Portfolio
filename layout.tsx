import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Manav Sarvaiya - Full Stack Web Developer",
  description:
    "Portfolio of Manav Sarvaiya, a passionate B.Tech IT student and full stack web developer specializing in modern web technologies.",
  keywords: "web developer, full stack, react, node.js, portfolio, manav sarvaiya",
  authors: [{ name: "Manav Sarvaiya" }],
  openGraph: {
    title: "Manav Sarvaiya - Full Stack Web Developer",
    description: "Portfolio showcasing projects and skills in web development",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
