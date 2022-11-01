import React from "react";


const TodoItem = () => {
  return (
    <div className="flex flex-row my-5 border-b-2">
      <input
        className="flex-initial w-4 mr-3" 
        type='checkbox'
      />
      <span className="text-lg flex-initial w-8/12">강아지 산책</span>
      <div className="flex flex-row flex-initial float-right">
        <button 
          type='button'
          className="text-sm w-12 mr-1/12 bg-transparent py-0.5 px-1 border border-gray-200 rounded mr-2" 
        >수정</button>
        <button 
          type='button' 
          className="text-sm w-12 bg-transparent py-0.5 px-1 border border-gray-200 rounded"
        >삭제</button>
      </div>
    </div>
  );
};

export default TodoItem;
