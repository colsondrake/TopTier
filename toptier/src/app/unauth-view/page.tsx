import Navbar from "@/components/Navbar";
import Content from "@/components/Content";

export default function Home() {
    return (
    <div>
        <header>
          <Navbar isLoggedIn={false}/>
        </header>
        <Content />
      </div>
    );
} // unauth-view Home component
