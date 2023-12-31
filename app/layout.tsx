import "./globals.css";
import type { Metadata } from "next";

import { Navbar, Footer } from "@/components";

export const metadata: Metadata = {
  title: "Emulsion AI",
  description: "Empowering Businesses With Personalized AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon.png"
          type="image/png"
          sizes="<generated>"
        />
      </head>
      <body className="bg-[#040C18]">
        <section className="mx-6 my-7 sm:mx-16 sm:my-10">
          <Navbar />

          {children}
        </section>
        <Footer />
      </body>
    </html>
  );
}
