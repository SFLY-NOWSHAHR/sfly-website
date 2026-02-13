import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local'
import "./globals.css";


const IRANSansXV = localFont({
  src: [
    {
      path: '../public/fonts/IRANSansX-Regular.woff',
      weight: '400'
    },
    {
      path: '../public/fonts/IRANSansX-Bold.woff',
      weight: '600'
    },
    {
      path: '../public/fonts/IRANSansX-Black.woff',
      weight: '800'
    }
  ],
  variable: '--font-IRANSansXV',
  display: 'swap'
})

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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#39FF14',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" className="dark" style={{ colorScheme: 'dark' }}>
      <body className={`${IRANSansXV.className} font-sans antialiased bg-background text-foreground`}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
