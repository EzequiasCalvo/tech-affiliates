"use client";

import { usePathname, useSearchParams } from "next/navigation";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { FaCode, FaGoogle, FaMicrosoft, FaAws } from "react-icons/fa";
import { SiCoursera, SiUdemy, SiIbm } from "react-icons/si";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";

import CategoryBox from "../CategoryBox";
import Container from "../Container";

export const categories = [
  {
    label: "Google",
    icon: FaGoogle,
    description: "This course is from Google!",
  },
  {
    label: "Udemy",
    icon: SiUdemy,
    description: "This property is in Udemy!",
  },
  {
    label: "Azure",
    icon: FaMicrosoft,
    description: "This course is from Microsoft Azure!",
  },
  {
    label: "Coursera",
    icon: SiCoursera,
    description: "This course is in Coursera!",
  },
  {
    label: "IBM",
    icon: SiIbm,
    description: "This course is from IBM!",
  },
  {
    label: "AWS",
    icon: FaAws,
    description: "This course is from AWS!",
  },
  {
    label: "Programming",
    icon: FaCode,
    description: "Programming courses!",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "This property is an ancient castle!",
  },
  {
    label: "Caves",
    icon: GiCaveEntrance,
    description: "This property is in a spooky cave!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property offers camping activities!",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This property is in arctic environment!",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This property is in the desert!",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This property is in a barn!",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This property is brand new and luxurious!",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
