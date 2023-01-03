import React from "react";
import { useTasks } from "../../context/Tasks";
import { Container, Created, Completed, Text, CountBox, Count } from "./styles";

export function Resume() {
  const { tasksData, concludedTasks } = useTasks();

  return (
    <Container>
      <Created>
        <Text color="#4ea8de">Criadas</Text>
        <CountBox>
          <Count>{tasksData.length}</Count>
        </CountBox>
      </Created>
      <Completed>
        <Text color="#8284fa">Concluídas</Text>
        <CountBox>
          <Count>{concludedTasks.length}</Count>
        </CountBox>
      </Completed>
    </Container>
  );
}
