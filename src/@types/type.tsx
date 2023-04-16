export enum SelectedPage {
  HOME = "home",
  BENEFITS = "benefits",
  OUR_CLASSES = "our-classes",
  CONTACT = "contact",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
};

export interface ClassTypes {
  name: string;
  description?: string;
  image: string;
};
