import React from "react";

const TodoItem = () => {
  return (
    <div className="list">
                  <input
                    className="list__checkbox" 
                    type='checkbox'
                  />
                  <span className="list__content">강아지 산책</span>
                  <div>
                  <button 
                    type='button'
                    className="list__edit-btn" 
                  >수정</button>
                  <button 
                    type='button' 
                    className='list__delete-btn'
                  >삭제</button>
                </div>
                </div>
  );
};

export default TodoItem;