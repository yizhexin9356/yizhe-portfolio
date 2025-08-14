import "./globals.css";
import { ReactNode } from "react";
import Link from "next/link";

export const metadata = {
  title: "yizhe Xin — Portfolio",
  description: "Senior ML Engineer — Multi‑Agent, RAG, CV, Full‑Stack"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <header className="border-b border-white/10">
          <div className="container py-4 flex items-center justify-between">
            <Link href="/" className="font-semibold tracking-wide">
              yizhe Xin
            </Link>
            <nav className="flex gap-6 text-sm text-white/80">
              <a href="#about">关于</a>
              <a href="#portfolio">作品集</a>
              <a href="#experience">经历</a>
              <a href="#skills">技能</a>
              <a href="#contact">联系</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-white/10">
          <div className="container py-8 text-sm text-white/60">
            © {new Date().getFullYear()} yizhe Xin. Built with Next.js & TailwindCSS.
          </div>
        </footer>
      </body>
    </html>
  );
}
