import Lottie from "lottie-react";
import weatherAnimation from "../assets/weatherAnimation.json";

const WeatherAnimation = () => {
  return (
    <div className="mt-1">
      <Lottie animationData={weatherAnimation} loop={true} />
    </div>
  );
};

export default WeatherAnimation;
