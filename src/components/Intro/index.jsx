import React from "react";
import Info from "./info";
import mypic from "../../assets/mypic.jpg";
import Divider from "../utils/divider";

const index = () => {
  return (
    <section>
      <article className="flex flex-col md:flex-row md:flex-row-reverse">
        <img
          src={mypic}
          alt="display pic"
          className="w-[320px] md:w-4/12 aspect-square object-contain md:rounded-3xl"
        />
        <Info />
      </article>
      <Divider />
    </section>
  );
};

export default index;
