import React from "react";
import { BsCloudy } from "react-icons/bs";

type Props = {};

const WeatherDetails = (props: Props) => {
  return (
    <div className="flex items-center gap-3">
      <BsCloudy />
      <span className="text-sm">Mostly cloudy</span>
    </div>
  );
};

export default WeatherDetails;
