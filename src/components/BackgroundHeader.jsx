import React from "react";
import { useMediaQuery } from "react-responsive";

const BackgroundHeader = () => {
  const isDesktopOrTablet = useMediaQuery({ query: "(min-width: 640px)" });
  return (
    <div className="bg-desaturated-dark-cyan fixed top-0 w-full z-0">
      <img
        src={
          isDesktopOrTablet
            ? "images/bg-header-desktop.svg"
            : "images/bg-header-mobile.svg"
        }
        alt="header"
        className="w-full"
      />
    </div>
  );
};

export default BackgroundHeader;
