import { ThemeProvider } from "@/providers/theme-providers";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";

import "./globals.css";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Rodrigo Alarcón",
  description: "Rodrigo Alarcón portafolio web.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
