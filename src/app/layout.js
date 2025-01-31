import { Geist, Geist_Mono, DM_Sans, DM_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/global/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
    variable: "--font-dm-sans",
    subsets:["latin"]
})
const dmMono = DM_Mono({
    variable: "--font-dm-sans-mono",
    subsets:['latin'],
    weight:['400']
})
const poppins = Poppins({
    variable: "--font-poppins",
    subsets:['latin'],
    weight:['400']
})


export const metadata = {
  title: "AiVPN",
  description: "Most Advance vpn based on AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} ${dmMono.variable} ${poppins.variable} bg-theme-dark text-white antialiased`}
      >
      <Header />
        {children}
      </body>
    </html>
  );
}
