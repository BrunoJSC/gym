import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import Logo from "@/assets/Logo.png";
import { Link } from "./Link";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/@types/type";
import { ActionButton } from "@/components/ActionButton";

interface NavbarProps {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (page: SelectedPage) => void;
}

export function Navbar({ selectedPage, setSelectedPage, isTopOfPage }: NavbarProps) {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const flexBetween = "flex justify-between items-center";
  const navbarBackground = isTopOfPage ? "bg-transparent" : "bg-primary-100 drop-shadow-xl";

  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  return (
    <nav>
      <div className={`${navbarBackground}${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div  className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img src={Logo} alt="LOGO" />

            {/* RIGHT SIDE */}

            {isAboveMediumScreen ?
            (
              <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link page="Home" selectPage={selectedPage} setSelectPage={setSelectedPage} />
                <Link page="Benefits" selectPage={selectedPage} setSelectPage={setSelectedPage} />
                <Link page="Our classes" selectPage={selectedPage} setSelectPage={setSelectedPage} />
                <Link page="Contact" selectPage={selectedPage} setSelectPage={setSelectedPage} />
              </div>
              <div className={`${flexBetween} gap-8`}>
                <p>Sign In</p>
                <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
              </div>
            </div>
            ) : (
              <button className="rounded-full bg-secondary-500 p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                 <Bars3Icon className="w-6 h-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* MENU MOBILE MODAL */}
      {!isAboveMediumScreen && isMenuToggled && (
         <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
           {/* CLOSE BUTTON */}
           <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="w-6 h-6 text-white" />
              </button>
           </div>
            {/* MENU ITEMS */}
            <div className="flex flex-col items-center gap-8 p-12">
              <Link page="Home" selectPage={selectedPage} setSelectPage={setSelectedPage} />
              <Link page="Benefits" selectPage={selectedPage} setSelectPage={setSelectedPage} />
              <Link page="Our classes" selectPage={selectedPage} setSelectPage={setSelectedPage} />
              <Link page="Contact" selectPage={selectedPage} setSelectPage={setSelectedPage} />
            </div>
         </div>
      )}
    </nav>
  );
}
