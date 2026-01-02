import type { Metadata } from "next";
import { Noto_Sans_Devanagari, Poppins } from "next/font/google";
import "./globals.css";

const notoSansDevanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "श्री सुंदरकांड | Shri Sunderkand",
  description: "श्री रामचरितमानस के सुंदरकांड का पाठ - हनुमान जी की लंका यात्रा का पवित्र वर्णन",
  keywords: ["Sunderkand", "सुंदरकांड", "Hanuman", "हनुमान", "Ramcharitmanas", "रामचरितमानस"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <body
        className={`${notoSansDevanagari.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
