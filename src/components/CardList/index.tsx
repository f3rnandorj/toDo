import React, { createContext, useContext } from "react";

import { EvilIcons } from "@expo/vector-icons";

import Checkbox, { Container, Assignment, DeleteButton } from "./styles";
import { ContextValue, MyContext } from "../../screens/Home";

interface Assignment {
  text: string;
  onRemove: () => void;
}

export function CardList({ text, onRemove }: Assignment) {
  const { isChecked, setChecked } = useContext<ContextValue>(MyContext);

  return (
    <Container>
      <Checkbox
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? "#8284fa" : "#4ea8de"}
      />
      <Assignment>{text}</Assignment>
      <DeleteButton onPress={onRemove}>
        <EvilIcons name="trash" size={32} color="#808080" />
      </DeleteButton>
    </Container>
  );
}
