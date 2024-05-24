import { useState } from "react";
import AddTodo from "components/AddTodo";
import SearchTodo from "components/SearchTodo";
import ListTodo from "components/ListTodo";

const Dashboard = () => {
  const [todoList, setTodoList] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  return (
    <div>
      <h1>To Do List</h1>
      <AddTodo setTodoList={setTodoList}> </AddTodo>
      <SearchTodo searchItem={searchItem} setSearchItem={setSearchItem}></SearchTodo>
      <ListTodo searchItem={searchItem} todoList={todoList}></ListTodo>
    </div>
  );
};
export default Dashboard;
