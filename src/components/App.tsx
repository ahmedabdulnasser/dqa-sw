import Home from "../pages/Home.tsx";
import Contributors from "../pages/Contributors.tsx";
import About from "../pages/About.tsx";
import SignIn from "../pages/SignIn.tsx";
import NotFound from "../pages/NotFound.tsx";
import Hero from "./Header/Hero.tsx";
import Navbar from "./Header/Navbar.tsx";
import SignUp from "../pages/SignUp.tsx";
import Footer from "./Footer";
import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ChatWrapper from "./chat/ChatWrapper.tsx";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  function toggleDarkMode(): void {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <>
      <main
        className={`  md:bg-cover mb-0 min-h-screen text-white ${
          isDarkMode ? "bg-[#3A3B3C]" : "bg-[url('./hero-bg/bg-pls.jpg')]"
        }`}
      >
        <Navbar isDarkMode={isDarkMode} handleDarkMode={toggleDarkMode} />
        <Routes>
          <Route index element={<Hero />} />
          <Route path="/get-started" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/contributors" element={<Contributors />} />
          {/* <Route path="/chat" element={<ChatWrapper />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
