import React from "react";
import { useTasks } from "../../context/Tasks";
import { Container, Created, Completed, Text, CountBox, Count } from "./styles";

export function Resume() {
  const { concludedTasks, showsTasks, showsCheckedTasks, tasksFromBehind } =
    useTasks();

  return (
    <Container>
      <Created onPress={showsTasks}>
        <Text color="#4ea8de">Criadas</Text>
        <CountBox>
          <Count>{tasksFromBehind.length}</Count>
        </CountBox>
      </Created>
      <Completed onPress={showsCheckedTasks}>
        <Text color="#8284fa">Concluídas</Text>
        <CountBox>
          <Count>{concludedTasks.length}</Count>
        </CountBox>
      </Completed>
    </Container>
  );
}
