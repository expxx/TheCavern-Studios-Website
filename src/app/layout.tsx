import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "next-themes"

export const metadata = {
  title: "TheCavern Studios - Digital Solutions Crafted in The Cavern",
  description: "We build exceptional digital experiences that drive growth and transform businesses.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", margin: 0 }}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
      </body>
    </html>
  )
}
