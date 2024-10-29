import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Recent from "@/components/Recent";

export default function Home() {
  return (
    <body style={{ backgroundColor: "#FAF5F5" }}>
      <Header />
      <Hero />
      <Recent />
      <Featured />
      <Footer />
    </body>
  );
}
