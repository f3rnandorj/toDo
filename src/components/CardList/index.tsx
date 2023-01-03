import React from "react";

import { EvilIcons } from "@expo/vector-icons";

import Checkbox, { Container, Assignment, DeleteButton } from "./styles";
import { useTasks } from "../../context/Tasks";

interface Assignment {
  text: string;
}

export function CardList({ text }: Assignment) {
  const { taskIsConcluded, toggleConcludedTasks, removeTask } = useTasks();

  const isChecked = taskIsConcluded(text);

  return (
    <Container>
      <Checkbox
        value={isChecked}
        onValueChange={() => toggleConcludedTasks(text)}
        color={isChecked ? "#8284fa" : "#4ea8de"}
      />
      <Assignment
        color={isChecked ? "#808080" : "#f2f2f2"}
        textDecoration={isChecked ? "line-through" : "none"}
      >
        {text}
      </Assignment>
      <DeleteButton onPress={() => removeTask(text)}>
        <EvilIcons name="trash" size={32} color="#808080" />
      </DeleteButton>
    </Container>
  );
}
