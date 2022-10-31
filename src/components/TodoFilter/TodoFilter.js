import React from "react";

const TodoFilter = () => {
  return (
    <div className="flex flex-row items-end flex-1">
      <button className="text-sm mr-1 bg-transparent py-0.5 px-1 border border-gray-200">전체</button>/
      <button className="text-sm mr-1 bg-transparent py-0.5 px-1 border border-gray-200">완료</button>/
      <button className="text-sm bg-transparent py-0.5 px-1 border border=gray-200">미완료</button>
    </div>
  );
};

export default TodoFilter;