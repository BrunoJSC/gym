import { SelectedPage } from "@/@types/type";
import { ReactNode } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface ActionButtonProps {
  setSelectedPage: (page: SelectedPage) => void;
  children: ReactNode;
}

export function ActionButton({ setSelectedPage, children }: ActionButtonProps) {
  return (
    <AnchorLink className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white" onClick={() => setSelectedPage(SelectedPage.CONTACT)} href={`#${SelectedPage.CONTACT}`}>
       {children}
    </AnchorLink>
  );
}
