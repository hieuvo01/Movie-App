import type { Metadata } from "next";
import "./globals.css";
import Header from "./src/components/header";
import { ThemeProvider } from "@/components/ui/provider";
import Footer from "./src/components/footer";

export const metadata: Metadata = {
  title: "iMovies",
  description: "movie app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-[#1a1c29] ">
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            {/* <Footer /> */}
          </ThemeProvider>
          </body>
    </html>
  );
}
