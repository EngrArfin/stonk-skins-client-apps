import CardPage from "@/components/Card/Card";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import LetMeKnow from "@/components/LetMeKnow/LetMeKnow";
import Nobody from "@/components/Nobody/Nobody";
import NavBar from "@/components/Shared/NavBar/NavBar";
import NavBarBelow from "@/components/Shared/NavBarBelow";
import Simplyfy from "@/components/Simplyfy/Simplyfy";

export default function Home() {
  return (
    <div className="min-h-screen lg:ml-[139px] lg:mr-[139px]  bg-purple-950">
      <NavBar />
      <NavBarBelow />
      <Header />
      <CardPage />
      <div className="bg-[#1b1b1b]">
        <Nobody />
        <LetMeKnow />
        <Simplyfy />
        <Footer />
      </div>
    </div>
  );
}
