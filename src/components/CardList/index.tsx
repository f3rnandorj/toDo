import React, { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";

import CheckBox, { Container, Assignment, SendButton } from "./styles";

export function CardList() {
  const [checked, setChecked] = useState(false);

  return (
    <Container>
      <CheckBox
        appearance="circular"
        status="info"
        checked={checked}
        onChange={(nextChecked) => setChecked(nextChecked)}
      ></CheckBox>
      {<Assignment>Hello world</Assignment>}
      <SendButton onPress={() => {}}>
        <EvilIcons name="trash" size={40} />
      </SendButton>
    </Container>
  );
}
