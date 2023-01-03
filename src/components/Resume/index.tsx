import React from "react";
import { useTasks } from "../../context/Tasks";
import { Container, Created, Completed, Text, CountBox, Count } from "./styles";

export function Resume() {
  const { tasksData, concludedTasks, showsTasks, showsCheckedTasks } =
    useTasks();

  return (
    <Container>
      <Created onPress={showsTasks}>
        <Text color="#4ea8de">Criadas</Text>
        <CountBox>
          <Count>{tasksData.length}</Count>
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
