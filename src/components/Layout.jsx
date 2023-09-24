import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-light-grayish-cyan-bg px-6 pb-10 xl:pb-20 flex flex-col gap-3 bg-mobile sm:bg-desktop bg-no-repeat bg-contain">
      {children}
    </div>
  );
};

export default Layout;
