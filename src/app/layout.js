import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Error",
  description: "Error Webpage Unavailable",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
       {/* <link rel="icon" href="/vsrcsel.svg" type="image/png" sizes="32x32" /> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
