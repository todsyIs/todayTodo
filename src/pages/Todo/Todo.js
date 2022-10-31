import React from 'react';

const Todo = () => {
  return (
    <div>
      <div className="big-container">
        <div className="small-container">
          <div className="title">
            <h1>오늘의 할 일</h1>
            <div className="filter">
              <button className="filter__all">전체</button>/
              <button className="filter__done">완료</button>/
              <button className="filter__yet">미완료</button>
            </div>
          </div>
          <div className="smallContainer">
            <form>
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
              <div className="lists">
                <div className="list">
                  <input
                    className="list__checkbox" 
                    type='checkbox'
                  />
                  <span className="list__content">강아지 산책</span>
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
            </form>
            </div>
        </div>
        <div className="share">
          <input
            className="shareBtn"
            type="submit"
            value="SNS 공유"
          />
        </div>
      </div>
    </div>
  );
};

export default Todo;