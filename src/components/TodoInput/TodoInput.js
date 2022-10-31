import React from "react";

const TodoInput = () => {
  return (
    <div className="input">
      <input 
        className='input__text' 
        type='text' 
        placeholder='일감 입력하기'
      />
      <input 
        className='input__submit' 
        type='submit' 
        value='제출'
      />
    </div>
  );
};

export default TodoInput;