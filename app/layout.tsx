import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'SFLY نوشهر | تیم حرفه‌ای اسکیت‌',
  description: 'تجربه هیجان و مهارت تیم حرفه‌ای اسکیت‌ SFLY نوشهر؛ پیشرو در اجرای حرکات حرفه‌ای، مسابقات اسکیت و توسعه فرهنگ اسکیت‌برد در ایران.',
  keywords: 'اسکیت‌, تیم اسکیت نوشهر, تیم حرفه‌ای اسکیت, SFLY نوشهر, حرکات اسکیت, مسابقات اسکیت‌, اسکیت ایران',
  authors: [{ name: 'SFLY نوشهر' }],
  creator: 'SFLY نوشهر',
  publisher: 'SFLY نوشهر',
  openGraph: {
    type: 'website',
    locale: 'fa_IR',
    url: 'https://sflynowshahar.ir',
    siteName: 'SFLY نوشهر',
    title: 'SFLY نوشهر | تیم حرفه‌ای اسکیت‌',
    description: 'تجربه هیجان و مهارت تیم حرفه‌ای اسکیت‌ SFLY نوشهر؛ پیشرو در اجرای حرکات حرفه‌ای و مسابقات اسکیت.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SFLY نوشهر | تیم حرفه‌ای اسکیت‌',
    description: 'تجربه هیجان و مهارت تیم حرفه‌ای اسکیت‌ SFLY نوشهر.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <body className="font-sans antialiased bg-background text-foreground">
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
