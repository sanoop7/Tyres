import { createContext } from "react";

import cardImg1 from "../asset/icons/card-logo-1.png";
import cardImg2 from "../asset/icons/card-logo-2.png";
import cardImg3 from "../asset/icons/card-logo-3.png";

export const FeatureCategoryContext = createContext([
  {
    name: "STANDARD SERVICE",
    image: cardImg1,
    url: "/category/men",
    id: 1,
    desc: ["Oil Change", "Oil Filter Replacement", "Car Wash"],
  },
  {
    name: "PREMIUM SERVICE",
    image: cardImg2,
    url: "/category/women",
    id: 2,
    desc: [
      "Oil Change",
      "Oil Filter Replacement",
      "Air Filter Replacement ",
      "Computer Diagnostic",
      "AC Gas Top-Up",
      "Windscreen Washer Fluid",
      "Power Steering Fluid",
      "Car Wash",
    ],
  },
  {
    name: "SUPERB SERVICE",
    image: cardImg3,
    url: "/category/kids",
    id: 3,
    desc: [
      "Oil Change",
      "Oil Filter Replacement",
      "Air Filter Replacement ",
      "AC Filter Replacement",
      "Spark Plug Replacement",
      "Brake Pads Replacement",
      "Computer Diagnostic",
      "AC Gas Top-Up",
      "Windscreen Washer Fluid",
      "Power Steering Fluid",
      "Car Wash",
    ],
  },
]);
