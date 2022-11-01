import React from "react";
import TodoFilter from "../../components/TodoFilter/TodoFilter";
import TodoItemList from "../../components/TodoItemList/TodoItemList";
import TodoShare from "../../components/TodoShare/TodoShare";

const Todo = () => {
  return (
    <div>
      <div className="flex justify-center py-10">
        <div className="flex flex-col border py-7 px-5 max-w-md min-w-screens-x">
          <div className="flex flex-col">
            <div className="flex flex-row space-x-4 ">
              <h1 className="text-4xl font-bold flex-1/2">오늘의 할 일</h1>
              <TodoFilter />
            </div>
            <TodoItemList />
            <TodoShare />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
