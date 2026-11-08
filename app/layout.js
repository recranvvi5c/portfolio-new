import { Inter, JetBrains_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { profile } from "@/data/content";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata = {
  title: {
    default: `${profile.name} — Developer Portfolio`,
    template: `%s · ${profile.name}`,
  },
  description: `Portfolio of ${profile.name}, ${profile.role.toLowerCase()} building fast, accessible web apps.`,
  icons: { icon: `${basePath}/favicon.svg` },
};

// Applies the saved theme before paint to avoid a flash of the wrong theme.
const themeScript = `try{var t=localStorage.getItem("theme");if(t)document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body id="top">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
