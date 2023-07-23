import { useState } from "react";
import { TempUnit } from ".";

type linkType = "week" | "today" | "none";
type tempType = "c" | "f";

const MainSectionHeader = () => {
  const [activeLink, setActiveLink] = useState<linkType>("none");
  const [activeTemp, setActiveTemp] = useState<tempType>("c");

  const handleLinkClick = (type: linkType) => {
    if (type === activeLink) setActiveLink("none");
    else setActiveLink(type);
  };
  return (
    <div className="flex justify-between items-center">
      <div className="flex space-x-3 text-lg">
        <a
          onClick={() => handleLinkClick("today")}
          className={`${
            activeLink === "today"
              ? "text-black underline underline-offset-8"
              : "text-darkerTextGrey"
          } cursor-pointer`}
        >
          Today
        </a>
        <a
          onClick={() => handleLinkClick("week")}
          className={`${
            activeLink === "week"
              ? "text-black underline underline-offset-8"
              : "text-darkerTextGrey"
          } cursor-pointer`}
        >
          Week
        </a>
      </div>
      <div className="flex space-x-6 items-center">
        <div
          onClick={() => setActiveTemp("c")}
          className={`${
            activeTemp === "c" ? "bg-black text-white" : "bg-white text-black"
          } text-xl  hover:cursor-pointer flex  w-8 h-8 font-semibold justify-center rounded-full`}
        >
          <span className="text-xs">o</span>
          <span className="pt-1 text-lg">C</span>
        </div>
        <div
          onClick={() => setActiveTemp("f")}
          className={`${
            activeTemp === "f" ? "bg-black text-white" : "bg-white text-black"
          } text-xl  hover:cursor-pointer flex w-8 h-8 font-semibold justify-center rounded-full`}
        >
          <span className="text-xs">o</span>
          <span className="pt-1 text-lg">F</span>
        </div>
        <div className="hover:scale-110 transition-transform duration-500 hover:cursor-pointer">
          <img
            className="rounded-lg"
            src="https://i.pravatar.cc/40?img=56"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default MainSectionHeader;
