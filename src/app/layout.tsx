import "../sass/globals.sass";
import { Header } from "../components/shared/Header";
import { Footer } from "../components/shared/Footer";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin-ext"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
