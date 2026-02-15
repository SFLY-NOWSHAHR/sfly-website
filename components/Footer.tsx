import Link from 'next/link'
import { Instagram, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Team Info */}
          <div className="max-w-80">
            <h3 className="text-lg font-bold text-primary mb-2">اسفلای نوشهر</h3>
            <p className="text-sm text-muted-foreground">
              تیم حرفه‌ای اسکیت‌ که با مهارت، سبک و اشتیاق، مرزهای این ورزش را جابه‌جا می‌کنند.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">لینک ها</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link href="/players" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  بازیکنان تیم
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  اخبار
                </Link>
              </li>
              <li>
                <Link href="/coach" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  مربی
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">مارا دنبال کنید</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/sflynoshahr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com/sflynoshahr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://facebook.com/sflynoshahr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-xs text-muted-foreground">
            تمام حقوق اين وب‌سايت نیز برای تیم اسفلای مازندران نوشهر است. {currentYear}&copy;
          </p>
        </div>
      </div>
    </footer>
  )
}
