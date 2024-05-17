import { useState } from "react";

const ListTodo = ({ searchItem, todoList }) => {
  const filterTodoList = () => {
    const filteredList = todoList.filter((item) =>
      item.toLowerCase().includes(searchItem.toLowerCase())
    );
    return filteredList;
  };

  return (
    <div>
      {todoList.length == 0 ? (
        <p>No tasks</p>
      ) : filterTodoList().length == 0 ? (
        <p>No item found</p>
      ) : (
        filterTodoList().map((todoItem, index) => {
          return <p key={index}>{todoItem}</p>;
        })
      )}
    </div>
  );
};
export default ListTodo;
