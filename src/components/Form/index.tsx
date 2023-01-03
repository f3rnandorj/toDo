import React, { useState } from "react";
import { AddToDo, Input, SendButton } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useTasks } from "../../context/Tasks";

export function Form() {
  const [value, setValue] = useState("");
  const { addNewTask } = useTasks();

  function handleAddNewTask(task: any) {
    addNewTask(task);
    setValue("");
  }

  return (
    <>
      <AddToDo>
        <Input
          placeholder="Adicione uma nova tarefa"
          value={value}
          onChangeText={setValue}
        />
        <SendButton onPress={() => handleAddNewTask(value)}>
          <Ionicons name="add-circle-outline" size={24} color="#f2f2f2" />
        </SendButton>
      </AddToDo>
    </>
  );
}
