import React from "react";
import { useNavigate } from "react-router";
import { project } from "../db/data";
function chunkArray(arr, size) {
  return arr.reduce(
    (acc, _, i) => (i % size === 0 ? [...acc, arr.slice(i, i + size)] : acc),
    []
  );
}
const Projects = () => {
  const router = useNavigate();
  return (
    <div className="fadeIn my-[100px] flex w-full flex-col gap-[50px] ">
      {chunkArray(project, 3).map((p, index) => (
        <div key={index} className="flex w-full justify-end gap-[30px]">
          {p.map((p1) => (
            <div
              onClick={() => router("/projects/" + p1.id.toString())}
              className={`w-[${
                p1.id % 3 === 0 ? "40%" : "300px"
              }] max-md:w-[30%] max-md:h-[230px] h-[600px] flex flex-col gap-[20px]`}
              key={p1.name}
            >
              <div>
                <h2 className="text-[70px] max-md:text-[18px] font-bold text-[#eeeeee]">
                  0{p1.id}.
                </h2>
                <p className="text-[18px] max-md:text-[15px] font-semibold">
                  {p1.name}
                </p>
              </div>
              <div
                className={`w-full ${
                  !p1.isContain && " bg-[#eeeeee]"
                } rounded-[3px] overflow-hidden h-full`}
              >
                <img
                  className={`w-full h-full object-${
                    p1.isContain ? "contain" : "cover"
                  }`}
                  src={p1.image}
                  alt={p1.name}
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Projects;
