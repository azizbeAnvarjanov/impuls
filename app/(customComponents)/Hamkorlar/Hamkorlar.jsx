import React from "react";

import Slide from './Slide/Slide'

const Hamkorlar = () => {
  return (
    <div className="h-screen p-10">
      <div>
        <div>
          <h1 className="text-3xl uppercase relative mb-10">
            Hamkor universitetlar{" "}
            <span className="h-[2px] w-[10%] bg-[--brand_color] absolute left-0 bottom-[-10px]"></span>
          </h1>
          <Slide />
        </div>
      </div>
    </div>
  );
};

export default Hamkorlar;
