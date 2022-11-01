import React from "react";

const MainForm = ({ children }) => {
  return (
    <form className=" flex flex-col items-center  justify-center">
      {children}
    </form>
  );
};

export default MainForm;
