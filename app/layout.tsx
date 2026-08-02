import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/layout/theme-provider";
import { SmoothScrollProvider } from "@/components/layout/smooth-scroll-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { ScrollProgressBar } from "@/components/ui/scroll-progress-bar";
import { BackToTop } from "@/components/ui/back-to-top";
import { CommandMenu } from "@/components/ui/command-menu";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { StructuredData } from "@/components/shared/structured-data";
import { siteConfig } from "@/constants/site";
import { buildMetadata } from "@/lib/metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = buildMetadata();

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <StructuredData />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={150}>
            <SmoothScrollProvider>
              <LoadingScreen />
              <ScrollProgressBar />
              <CursorGlow />
              <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
              >
                Skip to content
              </a>
              <Navbar />
              <main id="main-content" className="relative overflow-x-clip">
                {children}
              </main>
              <Footer />
              <BackToTop />
              <CommandMenu />
              <Toaster position="bottom-right" richColors />
            </SmoothScrollProvider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
