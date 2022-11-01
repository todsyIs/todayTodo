import React from "react";

const MainBtn = ({ title, handleClick }) => {
  return (
    <button
      className="  bg-[#D9D9D9] rounded-md p-7"
      onClick={() => {
        handleClick();
      }}
    >
      <p className=" text-2xl font-semibold">{title}</p>
    </button>
  );
};

export default MainBtn;
