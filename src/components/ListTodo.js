import { useState } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { Form, InputGroup } from "react-bootstrap";
import TodoStatus from "./TodoStatus";
import TodoName from "./TodoName";

const ListTodo = ({ searchItem, todoList, searchStatus, updateTodoStatus, updateTodoName }) => {
  const filterTodoList = () => {
    const filteredList = todoList.filter((item) => {
      if (searchStatus.toLowerCase() == "all") {
        return item.name.toLowerCase().includes(searchItem.toLowerCase());
      } else {
        return (
          item.name.toLowerCase().includes(searchItem.toLowerCase()) &&
          item.status.toLowerCase() == searchStatus.toLowerCase()
        );
      }
    });
    return filteredList;
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Task Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {todoList.length == 0 ? (
            <h4 className="p-3">No tasks</h4>
          ) : filterTodoList().length == 0 ? (
            <h4 className="p-3">No Search</h4>
          ) : (
            filterTodoList().map((todoItem, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <TodoName
                      name={todoItem.name}
                      todoIndex={index}
                      updateTodoName={updateTodoName}
                    />
                  </td>
                  <td>
                    <TodoStatus
                      status={todoItem.status}
                      todoIndex={index}
                      updateTodoStatus={updateTodoStatus}
                    />
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </Table>
    </div>
  );
};
export default ListTodo;
