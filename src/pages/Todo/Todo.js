import React from "react";
import TodoFilter from '../../components/TodoFilter/TodoFilter';
import TodoItemList from '../../components/TodoItemList/TodoItemList';


const Todo = () => {
  return (
    <div>
      <div className="big-container">
        <div className="small-container">
          <div className="title">
            <h1>오늘의 할 일</h1>
            <TodoFilter />
          </div>
          <TodoItemList />
        
        </div>
      </div>
    </div>
  );
};

export default Todo;