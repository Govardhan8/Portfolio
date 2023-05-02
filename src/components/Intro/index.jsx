import React from "react";
import Info from "./info";

const index = () => {
  return (
    <section className="flex flex-col md:flex-row md:flex-row-reverse">
      <img
        src="src/assets/mypic.jpg"
        alt="display pic"
        className="w-[320px] md:w-4/12 aspect-square object-contain md:rounded-3xl"
      />
      <Info />
    </section>
  );
};

export default index;
