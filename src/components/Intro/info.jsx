import React from "react";
import UnderlinedSpan from "../utils/Span";

const H1 = ({ children }) => (
  <h1 className="text-2xl md:text-4xl font-bold pb-2 md:pb-4 ">{children}</h1>
);

const info = () => {
  return (
    <div className="grid place-content-center">
      <H1>
        Nice to meet you!
        <br />I am <UnderlinedSpan>Govardhan</UnderlinedSpan>.
      </H1>
      <h3 className="text-xs md:text-sm">
        Based in Bengaluru, India. I'm a front end developer passionate about
        building user friendly web apps and always open to experiment around
        with the latest technologies.
      </h3>
      <h2 className="text-sm md:text-base pt-2">
        <UnderlinedSpan>Contact me</UnderlinedSpan>
      </h2>
    </div>
  );
};

export default info;
