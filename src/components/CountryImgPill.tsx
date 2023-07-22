import React from "react";
import NY from "../assets/ny.jpg";

type Props = {};

const CountryImgPill = (props: Props) => {
  return (
    <div className="relative max-w-[130px]">
      <img src={NY} className="rounded-xl" alt=""></img>
      <div className="capitalize absolute top-0 bottom-0 flex items-center justify-center left-0 right-0 text-white font-semibold">
        new york
      </div>
    </div>
  );
};

export default CountryImgPill;
