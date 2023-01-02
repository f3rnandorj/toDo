import React, { useContext } from "react";

import { EvilIcons } from "@expo/vector-icons";

import Checkbox, { Container, Assignment, DeleteButton } from "./styles";
import { ContextValue, MyContext } from "../../screens/Home";

interface Assignment {
  text: string;
  onRemove: () => void;
}

export function CardList({ text, onRemove }: Assignment) {
  const { taskIsConcluded, toggleConcludedTasks } =
    useContext<ContextValue>(MyContext);
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
      <DeleteButton onPress={onRemove}>
        <EvilIcons name="trash" size={32} color="#808080" />
      </DeleteButton>
    </Container>
  );
}
