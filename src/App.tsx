import { useEffect, useState } from "react";

import { SelectedPage } from "./@types/type";
import { Navbar } from "@/scenes/navbar";

import { Home } from "@/scenes/Home";
import { Benefits } from "@/scenes/Benefits";
import { OurClass } from "./scenes/OurClass";
import { Contact } from "./scenes/Contact";
import { Footer } from "./scenes/Footer/Footer";

export function App() {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.HOME);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.HOME);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClass setSelectedPage={setSelectedPage} />
      <Contact setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}
