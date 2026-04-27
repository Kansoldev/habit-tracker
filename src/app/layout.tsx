import type { Metadata } from "next";
import { Baloo_Chettan_2 } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Habit Tracker",
  description: "",
};

const balloChettan = Baloo_Chettan_2({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={balloChettan.className}>
      <body>{children}</body>
    </html>
  );
}
