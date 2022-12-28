import React from "react";
import { AddToDo, Input, SendButton } from "./styles";
import { Ionicons } from "@expo/vector-icons";

export function Form() {
  return (
    <>
      <AddToDo>
        <Input placeholder="Adicione uma nova tarefa" />
        <SendButton onPress={() => {}}>
          <Ionicons name="add-circle-outline" size={24} color="#f2f2f2" />
        </SendButton>
      </AddToDo>
    </>
  );
}
