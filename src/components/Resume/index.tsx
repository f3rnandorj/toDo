import React from "react";
import { Container, Created, Completed, Text, Count } from "./styles";

export function Resume() {
  return (
    <Container>
      <Created>
        <Text color="#4ea8de">Criadas</Text>
        <Count></Count>
      </Created>
      <Completed>
        <Text color="#8284fa">Concluídas</Text>
        <Count></Count>
      </Completed>
    </Container>
  );
}
