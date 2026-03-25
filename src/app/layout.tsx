import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NewsTicker from "@/components/layout/NewsTicker";

const inter = Inter({
    subsets: ["latin"],
    variable: '--font-inter',
});

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ["latin"],
    variable: '--font-poppins',
});

export const metadata: Metadata = {
    title: "HSGA Telangana — Hindustan Scouts & Guides Association",
    description: "Official website of Hindustan Scouts & Guides Association — Telangana State. Empowering the youth through character building and leadership.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
            <body className="font-body antialiased">
                <NewsTicker />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
