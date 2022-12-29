import React from "react";
import { AddToDo, Input, SendButton } from "./styles";
import { Ionicons } from "@expo/vector-icons";

interface Form {
  value: string;
  setValue: (value: string) => void;
  addTask: () => void;
}

export function Form({ value, setValue, addTask }: Form) {
  return (
    <>
      <AddToDo>
        <Input
          placeholder="Adicione uma nova tarefa"
          value={value}
          onChangeText={setValue}
        />
        <SendButton onPress={addTask}>
          <Ionicons name="add-circle-outline" size={24} color="#f2f2f2" />
        </SendButton>
      </AddToDo>
    </>
  );
}
