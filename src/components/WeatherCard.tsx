import React from "react";
import { IoIosSunny } from "react-icons/io";

type Props = {
  day: string;
  condition: string;
  min: number | string;
  max: number | string;
};

const WeatherCard = (props: Props) => {
  return (
    <div className="shadow-md flex flex-col items-center bg-white w-fit px-3 py-2 rounded-xl space-y-3">
      <span className="capitalize text-sm">{props.day.substring(0, 3)}</span>
      <span className="animate-spin-slow">
        <IoIosSunny className="text-[#ffaa00] scale-[1.9]" />
      </span>
      <div className="flex text-sm space-x-1">
        <span className="flex font-semibold">
          {props.max}
          <span className="text-xs flex">o</span>
        </span>
        <span className="flex font-semibold text-darkerTextGrey">
          {props.min}
          <span className="text-xs flex">o</span>
        </span>
      </div>
    </div>
  );
};

export default WeatherCard;
