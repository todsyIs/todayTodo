import React from "react";
import Question from "../../assets/Icon/question.png";
const RoundBtn = () => {
  return (
    <button className="rounded-full bg-[#D9D9D9] flex items-center justify-center">
      <img src={Question} alt="Black question mark" className=" p-2" />
    </button>
  );
};

export default RoundBtn;
