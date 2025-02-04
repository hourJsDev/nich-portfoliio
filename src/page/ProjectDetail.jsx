import React, { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router";
import { PiArrowElbowLeft } from "react-icons/pi";
import { project } from "../db/data";
const ProjectDetail = () => {
  const { id } = useParams();
  const state = useMemo(() => {
    const projectDetail = project.find((p) => p.id === Number(id));
    return projectDetail;
  }, []);

  return (
    <div className="fadeIn mt-[30px]">
      <h2 className="text-[80px] max-md:text-[30px]  text-[#eeeeee] font-bold">
        0{state?.id}.
      </h2>
      <h3 className="text-[80px] max-md:text-[20px] max-md:w-[auto] w-[500px] font-bold">
        {state.name}
      </h3>
      {!state?.isNoMainImage && (
        <div className="w-full  ">
          <img className="w-full  object-contain" src={state.image} alt="" />
        </div>
      )}
      {state.images.length > 4 && (
        <div className="w-full  ">
          <img
            className="w-full  object-contain"
            src={state.images[0]}
            alt=""
          />
        </div>
      )}
      <div className="flex flex-wrap justify-between">
        {state.images.map((img, index) => {
          if (state.images.length > 4 && index === 0) return null;
          return (
            <div className="w-[49%] mt-[20px] ">
              <img className="w-full h-full object-cover" src={img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectDetail;
