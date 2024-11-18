import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Frontend Developer Portfolio",
  description: "A showcase of my frontend development skills and projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-br from-background-light to-primary/10 dark:from-background-dark dark:to-primary/20 text-text-light dark:text-text-dark min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
