import Logo from "./Logo";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Navbar({ isDarkMode, handleDarkMode }) {
  let navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Features", link: "/features" },
    { name: "Sign in", link: "/sign-in" },
    { name: "Contributors", link: "/contributors" },
  ];
  const linksMapped = navLinks.map((link) => (
    <NavLink
      to={link.link}
      key={link.name}
      className={`p-4 text-[#f6f6f695] hover:text-white ${
        link.link === "/sign-in" ? "md:hidden" : ""
      }`}
      onClick={() => setIsMobNavbarOpen(false)}
    >
      {link.name}
    </NavLink>
  ));

  const [isMobNavbarOpen, setIsMobNavbarOpen] = useState(false);
  function toggleMobileNavbar() {
    setIsMobNavbarOpen((isMobNavbarOpen) => !isMobNavbarOpen);
  }

  return (
    <nav className="top-0 z-[999] sticky flex justify-between items-center bg-black opacity-1 drop-shadow-2xl mx-auto p-1 w-full font-geologica text-lg text-white">
      <NavLink to="/">
        <Logo />
      </NavLink>
      {/* Normal Navbar */}
      <div className="md:flex justify-center items-center hidden mx-auto">
        <nav className="mx-auto">{linksMapped}</nav>
      </div>
      <NavLink
        to="/sign-in"
        className="md:flex hidden p-4 text-[#f6f6f695] hover:text-white"
      >
        Sign in
      </NavLink>
      {/* Dark Mode Button */}
      <button
        className="top-5 right-7 md:right-0 md:static fixed mr-4 w-6 h-6"
        onClick={handleDarkMode}
      >
        {isDarkMode ? (
          <Sun className="text-[#f6f6f695] hover:text-[orange]" />
        ) : (
          <Moon className="text-[#f6f6f695] hover:text-indigo-600" />
        )}
      </button>
      {/* Mobile Navbar */}
      <div className="right-0 fixed md:hidden">
        <button
          onClick={toggleMobileNavbar}
          className="mx-2 text-[#f6f6f6cd] hover:text-white"
        >
          {isMobNavbarOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMobNavbarOpen ? (
        <div className="top-[100%] right-[0] absolute flex flex-col flex-wrap items-center bg-black opacity-1 w-screen h-screen text-3xl transition-all {2%}">
          {linksMapped}
        </div>
      ) : (
        ""
      )}
    </nav>
  );
}
