import React from "react";

const TodoItemList = () => {
  return (
    
    <form>
    <div className="smallContainer">
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
                </div>
        <div className="share">
          <input
            className="shareBtn"
            type="submit"
            value="SNS 공유"
          />
                </div>
                
            </form>
            
  );
};

export default TodoItemList;