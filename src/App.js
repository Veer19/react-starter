import { useState } from "react";
import AddTodo from "components/AddTodo";
import SearchTodo from "components/SearchTodo";
import ListTodo from "components/ListTodo";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  const filterTodoList = () => {
    const filteredList = todoList.filter((item) =>
      item.toLowerCase().includes(searchItem.toLowerCase())
    );
    return filteredList;
  };
  return (
    <div>
      <h1>To Do List</h1>
      <AddTodo setTodoList={setTodoList}> </AddTodo>
      <SearchTodo searchItem={searchItem} setSearchItem={setSearchItem}></SearchTodo>
      <ListTodo searchItem={searchItem} todoList={todoList}></ListTodo>
    </div>
  );
};
export default App;
