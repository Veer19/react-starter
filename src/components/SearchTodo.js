import { useState } from "react";

const SearchTodo = ({ searchItem, setSearchItem }) => {
  return (
    <div>
      <input
        placeholder="Search tasks"
        type="text"
        value={searchItem}
        onChange={(event) => {
          setSearchItem(event.target.value);
        }}
      ></input>
    </div>
  );
};
export default SearchTodo;
