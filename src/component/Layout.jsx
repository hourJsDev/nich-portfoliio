import React, { useEffect } from "react";
import { Outlet, useLocation, useParams } from "react-router";
import ToTopButton from "./ToTopButton";

const Layout = () => {
  const location = useLocation();
  const { id } = useParams();
  const date = new Date();
  useEffect(() => {
    if (location.pathname.includes("projects") && !id) {
      document.title = "My Project";
    } else if (location.pathname.includes("cv")) {
      document.title = "My CV";
    } else if (!id) {
      document.title = "Son Sreynich";
    }
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, [location]);
  return (
    <div>
      <Outlet />
      {!["", "/"].includes(location.pathname) && (
        <div className="max-md:text-[10px] mt-[20px] text-[15px] p-[5px]">
          &copy; {date.getFullYear()} Son Sreynich. All Rights Reserved.
        </div>
      )}
      <ToTopButton />
    </div>
  );
};

export default Layout;
