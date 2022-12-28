import React, { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";

import Checkbox, { Container, Assignment, DeleteButton } from "./styles";

export function CardList() {
  const [isChecked, setChecked] = useState(false);

  return (
    <Container>
      <Checkbox
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? "#8284fa" : "#4ea8de"}
      />
      {<Assignment>Hello world</Assignment>}
      <DeleteButton onPress={() => {}}>
        <EvilIcons name="trash" size={32} color="#808080" />
      </DeleteButton>
    </Container>
  );
}
