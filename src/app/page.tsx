import CardPage from "@/components/Card/Card";
import Header from "@/components/Header/Header";
import NavBar from "@/components/Shared/NavBar/NavBar";
import NavBarBelow from "@/components/Shared/NavBarBelow";

export default function Home() {
  return (
    <div className="min-h-screen ml-[139px] mr-[139px]  bg-purple-950">
      <NavBar />
      <NavBarBelow />
      <Header />
      <CardPage />
    </div>
  );
}
