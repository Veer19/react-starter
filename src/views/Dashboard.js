import { useState } from "react";
import AddTodo from "components/AddTodo";
import SearchTodo from "components/SearchTodo";
import ListTodo from "components/ListTodo";
import FilterStatus from "components/FilterStatus";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";
const Dashboard = () => {
  const [todoList, setTodoList] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [searchStatus, setSearchStatus] = useState("All");
  return (
    <div>
      {/* <h1>To Do List</h1> */}

      <Row>
        <Col>
          <AddTodo setTodoList={setTodoList}> </AddTodo>
        </Col>
        <Col>
          <SearchTodo searchItem={searchItem} setSearchItem={setSearchItem}></SearchTodo>
        </Col>
        <Col>
          <FilterStatus
            searchStatus={searchStatus}
            setSearchStatus={setSearchStatus}
          ></FilterStatus>
        </Col>
      </Row>
      {/* <AddTodo setTodoList={setTodoList}> </AddTodo>
      <SearchTodo searchItem={searchItem} setSearchItem={setSearchItem}></SearchTodo> */}
      <ListTodo searchItem={searchItem} todoList={todoList} searchStatus={searchStatus}></ListTodo>
    </div>
  );
};
export default Dashboard;
