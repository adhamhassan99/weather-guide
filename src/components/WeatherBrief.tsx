import React from "react";
import { TempUnit } from ".";

type Props = {
  temperature?: string;
  day?: string;
  hour?: string;
};

const WeatherBrief = ({
  temperature = "20",
  day = "monday",
  hour = "16:20",
}: Props) => {
  return (
    <div className="flex flex-col gap-4 text-black">
      <div className="text-7xl  relative">
        {temperature}
        <TempUnit />
      </div>
      <div className="flex gap-1 text-lg">
        <div className="capitalize text-black">{day}, </div>{" "}
        <div className=" text-textGrey">{hour}</div>
      </div>
    </div>
  );
};

export default WeatherBrief;
