import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { auth } from "@/auth";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: 'gemified_education_platform',
  description: 'Created with v0',
  generator: 'v0.app',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {session &&  <Navbar/>}
        {children}
        <Analytics />
      </body>
    </html>
  )
}
