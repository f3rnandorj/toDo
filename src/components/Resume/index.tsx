import React from "react";
import { Container, Created, Completed, Text, CountBox, Count } from "./styles";

interface Count {
  createdQuantity: number;
  concludedQuantity: number;
}

export function Resume({ createdQuantity, concludedQuantity }: Count) {
  return (
    <Container>
      <Created>
        <Text color="#4ea8de">Criadas</Text>
        <CountBox>
          <Count>{createdQuantity}</Count>
        </CountBox>
      </Created>
      <Completed>
        <Text color="#8284fa">Concluídas</Text>
        <CountBox>
          <Count>{concludedQuantity}</Count>
        </CountBox>
      </Completed>
    </Container>
  );
}
