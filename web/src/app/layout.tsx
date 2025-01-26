import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const globalFont = localFont({
  src: './PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard'
})

export const metadata: Metadata = {
  title: "Onsaemiro Manager Web",
  description: "Hello! this is Onsaemiro Manager Web",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${globalFont.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
