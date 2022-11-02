import { List } from "@mui/material";
import React, { useState } from "react";
import {Form} from "../../components/Form";
import {TodoItem} from "../../components/TodoItem";
import { Container, Key } from "./styled";

export function Home() {
    const [todos, setTodos] = useState([]);
    const addTodo = (todo) => {
      setTodos([...todos, todo]);
    };
  
    const deleteTodo = (id) => {
      var filtered = todos.filter((todo) => todo.id !== id);
      setTodos(filtered);
    };
  
    return (
      <Container>
        <Form addTodo={addTodo} />
        <List sx={{ marginTop: "1em" }}>
          {todos.map((todo) => (
            <Key key={todo.id}>
              <TodoItem todo={todo} deleteTodo={deleteTodo} />
            </Key>
          ))}
        </List>
      </Container>
    );
  }