import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Podcast App",
  description: "Listen and share podcasts",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-white-1`}>{children}</body>
    </html>
  );
}
