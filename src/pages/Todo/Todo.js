import React from "react";
import TodoFilter from '../../components/TodoFilter/TodoFilter';
import TodoItemList from '../../components/TodoItemList/TodoItemList';


const Todo = () => {
  return (
    <div>
      <div className="flex justify-center py-10">
        <div className="flex flex-col border py-7 px-5 max-w-md min-w-screens-x">
          <div className="flex flex-col">
            <div className="flex flex-row space-x-16 flex-1">
            <h1 className="text-4xl font-bold flex-2">오늘의 할 일</h1>
            <TodoFilter />
          </div>
          <TodoItemList />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Todo;