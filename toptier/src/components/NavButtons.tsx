import React from "react";
import Link from 'next/link'

interface NavButtonsProps {
  isLoggedIn: boolean;
}

const handleClick = () => {
  localStorage.removeItem('token');
}

function NavButtons(props: NavButtonsProps) {

  return (
    <div>
      {/* if user is NOT logged in */}
      {!props.isLoggedIn && (
        <div className="flex gap-3 items-center max-md:gap-2 max-sm:ml-auto">
          <Link href="/login">
            <button 
              className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full shadow hover:bg-yellow-300 transition duration-300 mb-8">
              Login
            </button>
          </Link>
          <Link href="/sign-up">
            <button 
              className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full shadow hover:bg-yellow-300 transition duration-300 mb-8">
              Sign Up
            </button>
          </Link>
        </div>
      )}
      {/* if user IS logged in */}
      {props.isLoggedIn && (
        <div className="flex gap-3 items-center max-md:gap-2 max-sm:ml-auto">
          <Link href="/welcome">
            <button onClick={handleClick}
              className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full shadow hover:bg-yellow-300 transition duration-300">
              Logout
            </button>
          </Link>
          <Link href="/user-account">
            <button 
              className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full shadow hover:bg-yellow-300 transition duration-300">
              Account
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavButtons;
