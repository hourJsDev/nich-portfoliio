import React from "react";
import { Outlet, Link, useLocation, useParams } from "react-router";
import { PiArrowElbowLeft } from "react-icons/pi";
const ProjectLayout = () => {
  const { id } = useParams();

  return (
    <div>
      <div className="flex items-center max-md:flex-col max-md:items-start justify-between">
        <h1 className="text-[40px] max-md:text-[20px]">MY PROJECTS</h1>
        <div className="flex gap-[30px] max-md:justify-between max-md:w-full items-center">
          <div className="h-[2px] max-md:w-[100px]  w-[600px] bg-[#d2d2d2]"></div>
          <Link to={`/${id ? "projects" : ""}`}>
            <button className="bg-[white]  before:transition-all before:ease-linear before:duration-150 hover:before:bottom-[5px] hover:before:right-[5px] flex items-center gap-[10px] border border-[black] px-[20px] py-[9px] text-[15px] rounded-[3px] relative before:absolute before:w-full before:h-full before:bg-none before:right-[-5px] before:z-[-1] before:rounded-[3px] before:bottom-[-5px] before:border before:border-[black]">
              <PiArrowElbowLeft />
              {id ? "Go Back To Projects Page" : "Go Back"}
            </button>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default ProjectLayout;
