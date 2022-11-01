import React from "react";

const TodoInput = () => {
  return (
    <div className="my-10">
      <input 
        className='input__text' 
        type='text' 
        placeholder='일감 입력하기'
      />
      <input 
        className='float-right w-24 text-sm mr-1 bg-transparent py-0.5 px-1 border border-gray-200' 
        type='submit' 
        value='제출'
      />
    </div>
  );
};

export default TodoInput;