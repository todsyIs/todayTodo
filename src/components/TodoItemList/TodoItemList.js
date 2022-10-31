import React from "react";
import TodoInput from '../../components/TodoInput/TodoInput';
import TodoItem from '../../components/TodoItem/TodoItem';

const TodoItemList = () => {
  return (
  <form>
    <div className="h-96 my-5">
      <TodoInput />
      <TodoItem />
    </div>
  </form>      
  );
};

export default TodoItemList;