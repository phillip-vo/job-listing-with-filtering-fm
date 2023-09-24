import React from "react";
import BackgroundHeader from "./BackgroundHeader";

const Layout = ({ children }) => {
  return (
    <>
      <BackgroundHeader />
      <div className="min-h-screen bg-light-grayish-cyan-bg px-6 pb-10 xl:pb-20 flex flex-col gap-3">
        {children}
      </div>
    </>
  );
};

export default Layout;
