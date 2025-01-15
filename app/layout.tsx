import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import FooterSection from "./sections/FooterSection";




export const metadata: Metadata = {
  title: "Caribe tattoo",
  // description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased text-yellow-50`}
      >
        <div className='relative min-h-screen'>
          <Navbar />
          {children}
        </div>
        <FooterSection />
      </body>

    </html>
  );
}
