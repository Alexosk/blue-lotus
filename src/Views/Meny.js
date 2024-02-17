import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MenuNav } from "../Components";

export const Meny = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="container content mb-5 ">
      <MenuNav />
    </div>
  );
};
