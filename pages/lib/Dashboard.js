import Sidebar from "./component/Sidebar";
import Navbar from "./component/Navbar";

import React from "react";

const Component = () => {
  const header = () => {

  };
  return (
    <div className="bg-slate-50 h-screen">
      <Navbar
        heading={() => {
          header();
        }}
      />
      <div className="w-full inline-flex">
      <Sidebar />
   
    </div>
    </div>
  );
};

export default Component;
