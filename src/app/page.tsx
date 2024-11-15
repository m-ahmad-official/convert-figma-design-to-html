import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Recent from "@/components/Recent";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import { Heebo } from "next/font/google";
import "@/app/page.css";

const inter = Inter({ subsets: ["latin"], weight: ["500"] });
const heebo = Heebo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
});

export default function Home() {
  return (
    <body style={{ backgroundColor: "#FAF5F5" }}>
      <Header font={inter} />
      <Hero font={heebo} />
      <Recent font={heebo} />
      <Featured font={heebo} />
      <Footer font={heebo} />
    </body>
  );
}
