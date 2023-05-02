import React from "react";
import Info from "./info";
import Divider from "../utils/divider";

const index = () => {
  return (
    <section>
      <article className="flex flex-col md:flex-row md:flex-row-reverse">
        <Info />
      </article>
      <Divider />
    </section>
  );
};

export default index;
