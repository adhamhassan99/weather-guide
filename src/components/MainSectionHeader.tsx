import { useState } from "react";
import { useTempData } from "../hooks/useTempData";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { supabase } from "../supabaseClient";

type linkType = "week" | "today" | "none";
type tempType = "c" | "f";

const MainSectionHeader = () => {
  const { setTemp, temp } = useTempData((state) => state);
  const { userData } = useCurrentUser((state) => state);

  const [activeLink, setActiveLink] = useState<linkType>("none");

  const handleLinkClick = (type: linkType) => {
    if (type === activeLink) setActiveLink("none");
    else setActiveLink(type);
  };

  const handleTempChange = (newTemp: tempType) => {
    setTemp(newTemp);
  };

  const handleAvatarClick = async () => {
    await supabase.auth.signOut();
  };
  const handleLogin = () => {
    supabase.auth.signInWithPassword({
      email: "adham.hassan7499@gmail.com",
      password: "PassPass2023",
    });
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
          onClick={() => handleTempChange("c")}
          className={`${
            temp === "c" ? "bg-black text-white" : "bg-white text-black"
          } text-xl  hover:cursor-pointer flex  w-8 h-8 font-semibold justify-center rounded-full`}
        >
          <span className="text-xs">o</span>
          <span className="pt-1 text-lg">C</span>
        </div>
        <div
          onClick={() => handleTempChange("f")}
          className={`${
            temp === "f" ? "bg-black text-white" : "bg-white text-black"
          } text-xl  hover:cursor-pointer flex w-8 h-8 font-semibold justify-center rounded-full`}
        >
          <span className="text-xs">o</span>
          <span className="pt-1 text-lg">F</span>
        </div>
        {userData ? (
          <div
            onClick={handleAvatarClick}
            className="hover:scale-110 transition-transform duration-500 hover:cursor-pointer"
          >
            <img
              className="rounded-lg"
              src="https://i.pravatar.cc/40?img=56"
              alt=""
            />
          </div>
        ) : (
          <div
            onClick={handleLogin}
            className="capitalize hover:cursor-pointer hover:scale-125 transition-transform"
          >
            sign in
          </div>
        )}
      </div>
    </div>
  );
};

export default MainSectionHeader;
