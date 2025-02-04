import React from "react";
import { Link } from "react-router";
import { FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa6";
import { TbArrowElbowRight } from "react-icons/tb";
import { AiOutlineAppstore } from "react-icons/ai";
const Home = () => {
  return (
    <section className="fadeIn flex flex-col gap-[40px]">
      <div>
        {/* name  */}
        <h1 className="text-[130px] max-md:text-[50px] font-bold">
          SON SREYNICH
        </h1>
        {/* title  */}
        <div className="flex gap-[20px] max-md:mt-[20px]">
          <div className="w-[100px]  max-md:w-[50px] max-md:h-[50px] h-[100px] rounded-full border border-[black]  overflow-hidden">
            <img
              className="w-full h-full  bg-[#eeeeee] object-cover"
              src={"/images/logo.jpg"}
              alt=""
            />
          </div>
          <h2 className="uppercase max-md:text-[15px] text-[30px] font-bold">
            architecture student <br />
            portfolio
          </h2>
        </div>
        {/* social media  */}
        <div className="flex flex-col gap-[15px] mt-[15px]">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/son-sreynich-082855293"
          >
            <FaLinkedin />
          </a>
          <a target="_blank" href="https://www.instagram.com/_shi_nick_">
            <FaInstagram />
          </a>

          <a target="_blank" href="https://t.me/son_srey_nich">
            <FaTelegram />
          </a>
        </div>
      </div>
      <div className="flex">
        {/* description  */}
        <div className="w-[40%]  max-md:w-full flex flex-col gap-[40px]">
          <p className="text-[18px] max-md:text-[16px] ">
            Hello, my name is SreyNich Son. I'm a student at Norton University
            of Architecture and Urban Planning. Now I want to show you about me
            and all the projects that I was doing. Here is the below for going
            to do.
          </p>
          <div className="flex gap-[30px] max-md:gap-[10px]">
            <Link to={"/cv"}>
              <button className="bg-[black] max-md:text-[14px] before:transition-all before:duration-150 before:ease-linear hover:before:bottom-[5px] hover:before:right-[5px] flex items-center gap-[10px] text-[white] px-[20px] py-[9px] text-[15px] rounded-[3px] relative before:absolute before:w-full before:h-full before:bg-[#46f610] before:right-[-5px] before:z-[-1] before:rounded-[3px] before:bottom-[-5px]">
                View CV
                <TbArrowElbowRight style={{ color: "white !important" }} />
              </button>
            </Link>
            <Link to={"/projects"}>
              <button className="bg-[white] max-md:text-[14px] before:transition-all before:ease-linear before:duration-150 hover:before:bottom-[5px] hover:before:right-[5px] flex items-center gap-[10px] border border-[black] px-[20px] py-[9px] text-[15px] rounded-[3px] relative before:absolute before:w-full before:h-full before:bg-none before:right-[-5px] before:z-[-1] before:rounded-[3px] before:bottom-[-5px] before:border before:border-[black]">
                See My Projects
                <AiOutlineAppstore />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
