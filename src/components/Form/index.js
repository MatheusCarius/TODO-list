import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

import { Paper, Task } from "./styled";

export function Form({ addTodo }) {
  const [text, setText] = useState(null);
  const [id, setId] = useState(0);

  const todoCreate = (text) => {
    if (!text) return alert("Preencha uma tarefa");

    const todoObj = { text: text, id: id };
    setId(id + 1);
    addTodo(todoObj);
    setText("");
    document.getElementById("outlined-basic").value = null;
  };

  return (
    <Paper>
      <Task>
        <TextField
          id="outlined-basic"
          label="Tarefa"
          variant="outlined"
          onChange={(e) => setText(e.target.value)}
          fullWidth
        />
        <Button variant="text" onClick={() => todoCreate(text)}>
          ADICIONAR
        </Button>
      </Task>
    </Paper>
  );
}
