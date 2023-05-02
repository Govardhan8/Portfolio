import React from "react";
import Info from "./info";
import mypic from "../../assets/mypic.jpg";
import Divider from "../utils/divider";

const index = () => {
  return (
    <section>
      <article className="flex flex-col md:flex-row md:flex-row-reverse">
        <div className="flex w-full justify-center">
          <img
            src={mypic}
            alt="display pic"
            className="w-full md:min-w-[320px] md:w-4/12 aspect-square object-contain md:rounded-3xl"
          />
        </div>
        <Info />
      </article>
      <Divider />
    </section>
  );
};

export default index;
