import { PiArrowElbowLeft } from "react-icons/pi";
import { Link } from "react-router";
const Cv = () => {
  return (
    <div className="fadeIn">
      <div className="flex items-center max-md:flex-col max-md:items-start justify-between">
        <h1 className="text-[40px] max-md:text-[20px]">ABOUT ME</h1>
        <div className="flex gap-[30px] max-md:justify-between max-md:w-full items-center">
          <div className="h-[2px] max-md:w-[100px]  w-[600px] bg-[#d2d2d2]"></div>
          <Link to={"/"}>
            <button className="bg-[white]  before:transition-all before:ease-linear before:duration-150 hover:before:bottom-[5px] hover:before:right-[5px] flex items-center gap-[10px] border border-[black] px-[20px] py-[9px] text-[15px] rounded-[3px] relative before:absolute before:w-full before:h-full before:bg-none before:right-[-5px] before:z-[-1] before:rounded-[3px] before:bottom-[-5px] before:border before:border-[black]">
              <PiArrowElbowLeft />
              Go Back
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-[60px]">
        <img className="bg-[#eeeeee]"  src="/images/cv.png" alt="" />
      </div>
    </div>
  );
};

export default Cv;
