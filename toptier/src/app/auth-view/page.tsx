import Navbar from "@/components/Navbar";
import Content from "@/components/Content";

export default function Home() {
    return (
    <div>
        <header>
          <Navbar isLoggedIn={true}/>
        </header>
        <Content />
      </div>
    );
} // auth-view Home component
