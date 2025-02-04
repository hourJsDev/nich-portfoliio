import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router";

const Layout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, [location]);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Layout;
