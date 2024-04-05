import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import MainNavbar from "@/components/navbars/main-navbar";
import Footer from "@/components/footer";
import ThemeProvider from "@/providers/theme-provider";
import NavigateToTop from "@/components/shared/navigate-to-top";

const inter = Inter({ subsets: ["latin"] });

const logoFont = localFont({
  src: "../../public/fonts/logo/Logo_Semibold.ttf",
  variable: "--font-logo",
  weight: "600",
});


export const metadata: Metadata = {
  title: "Moobie | Watch Movies Online.",
  description: "Browse a different collection of movies only on Moobie.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        url: "/assets/logos/moobie-light-icon.svg",
        href: "/assets/logos/moobie-light-icon.svg",
      },
      {
        media: "(prefers-color-scheme: light)",
        url: "/assets/logos/moobie-dark-icon.svg",
        href: "/assets/logos/moobie-dark-icon.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${logoFont.variable} antialiased`}>
        <ThemeProvider>
          <MainNavbar />
          <main className="min-h-[calc(100dvh-80px)] h-full">{children}</main>

          {/* MAIN FOOTER */}
          <footer>
            <Footer />
          </footer>

          {/* TO TOP BUTTON */}
          <NavigateToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
