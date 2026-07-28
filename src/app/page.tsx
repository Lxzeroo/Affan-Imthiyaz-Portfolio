import Masthead from "@/components/Masthead";
import Hero from "@/components/Hero";
import Lede from "@/components/Lede";
import Casework from "@/components/Casework";
import Forensics from "@/components/Forensics";
import KnownWhereabouts from "@/components/KnownWhereabouts";
import FileReport from "@/components/FileReport";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Masthead />
      <main>
        <Hero />
        <Lede />
        <Casework />
        <Forensics />
        <KnownWhereabouts />
        <FileReport />
      </main>
      <Footer />
    </>
  );
}
