import Welcome from "@/components/Welcome";
import Navbar from "@/components/Navbar";

export default function WelcomePage() {
    return (
        <div>
            <Navbar isLoggedIn={false}/>
            <Welcome />
        </div>
    );
} // welcome page Home component