import React from "react";
import TodoShare from '../../components/TodoShare/TodoShare';

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
          className="mr-3 bg-transparent py-0.5 px-1 border border-gray-300 rounded" 
        >수정</button>
        <button 
          type='button' 
          className="bg-transparent py-0.5 px-1 border border-gray-300 rounded"
        >삭제</button>
      </div>
      <TodoShare />
    </div>
  );
};

export default TodoItem;
