import { SelectedPage } from "@/@types/type";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface LinkProps {
  page: string;
  selectPage: SelectedPage;
  setSelectPage: (page: SelectedPage) => void;
}

export function Link({ page, selectPage, setSelectPage }: LinkProps) {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "-") as SelectedPage;
  return (
   <AnchorLink
   href={`#${lowerCasePage}`}
   className={`${selectPage === lowerCasePage ? "text-primary-500" : ""}
   transition duration-500 ease-in-out hover:text-primary-300`}
   onClick={() => {
     setSelectPage(lowerCasePage);
   }}
   >
    {page}
  </AnchorLink>
  )
}
