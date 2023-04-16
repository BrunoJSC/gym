import { SelectedPage } from "@/@types/type";

import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, y: 9 },
  visible: { opacity: 1, y: 1 },
}

interface BenefitProps {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (page: SelectedPage) => void;
}

export function Benefit({ icon, title, description, setSelectedPage }: BenefitProps) {
  return (
   <motion.div variants={childVariant} className="rounded-md mt-5 border-2 border-gray-100 px-5 py-16 text-center">
    <div className="mb-4 flex justify-center">
      <div className="rounded-full border-2 border-gray-100 bg-gray-100 p-4">
        {icon}
      </div>
    </div>

    <h4 className="font-bold">{title}</h4>
    <p className="my-3">{description}</p>
    <AnchorLink
     className="text-sm font-bold text-primary-500 underline"
     onClick={() => setSelectedPage(SelectedPage.CONTACT)}
      href={`#${SelectedPage.CONTACT}`}
    >
      Learn More
    </AnchorLink>
   </motion.div>
  )
}
