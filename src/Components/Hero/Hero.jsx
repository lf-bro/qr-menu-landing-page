import React from "react";
import Ellipse from "../assets/Ellipse.png";

const Hero = () => {
  return (
    <div className="h-[100vh] w-[100vw] mx-[10vw]">
      {/* green ellipse image fixed in the background for hero section */}
      <img
        src={Ellipse}
        alt="ellipse"
        className="absolute -z-1 top-0 right-0 w-[70vw]"
      />
      <div className="mt-[40vh] flex flex-col gap-5">
        <h1 className="text-7xl font-semibold text-[var(--green)]">Delicious</h1>
        <h3 className="text-5xl font-semibold">Order Smart. Eat Fresh</h3>
        <p className="text-lg">Scan, Choose, Enjoy Your Meal The Modern Way Bitch.</p>
        <button className="w-45 bg-[var(--green)] text-[var(--white)] px-5 py-3 rounded-full">Order Now</button>
      </div>
    </div>
  );
};

export default Hero;
