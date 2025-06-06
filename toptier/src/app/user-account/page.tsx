import CardGridUserScores from "@/components/CardGridUserScores";
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar isLoggedIn={true} isAccount={true}/>
      </header>
      <div className="flex">
        <main className="flex-1 p-6">
          <Card>
            <CardGridUserScores />
          </Card> 
        </main>
      </div>
    </div>
  );
} // show-items Home component
