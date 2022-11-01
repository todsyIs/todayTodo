import React from "react";

const MainInput = ({ placeholder, type }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className=" bg-secondary bg-opacity-40  p-4 w-96 my-2 rounded-md  focus:outline-primary"
    />
  );
};

export default MainInput;
