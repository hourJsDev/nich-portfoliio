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
        <h1 className="text-[130px] max-md:text-[60px] font-bold">
          SON SREYNICH
        </h1>
        {/* title  */}
        <div className="flex gap-[20px]">
          <div className="w-[100px] h-[100px] rounded-full border border-[black] rounded-sm overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={"/images/logo.jpg"}
              alt=""
            />
          </div>
          <h2 className="uppercase max-md:text-[20px] text-[30px] font-bold">
            architecture portfolio
          </h2>
        </div>
        {/* social media  */}
        <div className="flex flex-col gap-[15px] mt-[15px]">
          <Link to={""}>
            <FaLinkedin />
          </Link>
          <Link to={""}>
            <FaInstagram />
          </Link>
          <Link to={""}>
            <FaTelegram />
          </Link>
        </div>
      </div>
      <div className="flex">
        {/* description  */}
        <div className="w-[40%] max-md:w-full flex flex-col gap-[40px]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque amet
            porro maiores labore, cumque ea explicabo enim quo quidem et iste
            earum fugiat sequi magnam dignissimos ipsam voluptas at voluptatum
            eum totam aspernatur. Porro optio in hic expedita quibusdam numquam
            voluptate voluptates alias cumque quod nisi corrupti, veritatis
            voluptas aperiam placeat harum. Rerum perferendis quaerat ipsum in
            libero deleniti obcaecati totam illum voluptatem quos tempore
            debitis ullam expedita soluta sapiente iusto incidunt, laboriosam
            distinctio unde labore itaque beatae voluptates. Cupiditate.
          </p>
          <div className="flex gap-[30px]">
            <Link to={"/projects"}>
              <button className="bg-[black] before:transition-all before:duration-150 before:ease-linear hover:before:bottom-[5px] hover:before:right-[5px] flex items-center gap-[10px] text-[white] px-[20px] py-[9px] text-[15px] rounded-[3px] relative before:absolute before:w-full before:h-full before:bg-[#46f610] before:right-[-5px] before:z-[-1] before:rounded-[3px] before:bottom-[-5px]">
                View CV
                <TbArrowElbowRight style={{ color: "white !important" }} />
              </button>
            </Link>
            <Link to={"/projects"}>
              <button className="bg-[white]  before:transition-all before:ease-linear before:duration-150 hover:before:bottom-[5px] hover:before:right-[5px] flex items-center gap-[10px] border border-[black] px-[20px] py-[9px] text-[15px] rounded-[3px] relative before:absolute before:w-full before:h-full before:bg-none before:right-[-5px] before:z-[-1] before:rounded-[3px] before:bottom-[-5px] before:border before:border-[black]">
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
