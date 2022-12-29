import React, { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";

import Checkbox, { Container, Assignment, DeleteButton } from "./styles";

interface Assignment {
  children: string;
  onRemove: () => void;
}

export function CardList({ children, onRemove }: Assignment) {
  const [isChecked, setChecked] = useState(false);

  return (
    <Container>
      <Checkbox
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? "#8284fa" : "#4ea8de"}
      />

      <Assignment>{children}</Assignment>

      <DeleteButton onPress={onRemove}>
        <EvilIcons name="trash" size={32} color="#808080" />
      </DeleteButton>
    </Container>
  );
}
