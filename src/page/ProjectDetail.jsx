import React, { useMemo } from "react";
import { useParams } from "react-router";
import { project } from "../db/data";
const ProjectDetail = () => {
  const { id } = useParams();

  const state = useMemo(() => {
    const projectDetail = project.find((p) => p.id === Number(id));
    document.title = projectDetail.name;
    return projectDetail;
  }, []);

  return (
    <div className="fadeIn mt-[30px]">
      <div className="flex flex-col">
        <h2 className="text-[80px]  max-md:text-[30px]  text-[#eeeeee] font-bold">
          0{state?.id}.
        </h2>
        <h3 className="text-[80px] max-md:text-[20px] max-md:w-[auto]  font-bold">
          {state.name}
        </h3>

        <div className=" p-[10px]  w-full bottom-0 flex flex-col gap-[10px] left-0">
          <p className="w-[50%] max-md:w-[90%] text-black text-[18px]">
            {state.description}
          </p>
          <p className="w-[50%] max-md:w-[90%] text-black text-[18px]">
            {state.description2}
          </p>
        </div>
      </div>
      {!state?.isNoMainImage && (
        <div className="w-full relative  bg-[#eeeeee] ">
          <img className="w-full  object-contain" src={state.image} alt="" />
        </div>
      )}
      {state.images.length > 4 && (
        <div className="w-full  bg-[#eeeeee] ">
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
            <div key={index} className="w-[49%]   bg-[#eeeeee] mt-[20px] ">
              <img className="w-full h-full object-cover" src={img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectDetail;
