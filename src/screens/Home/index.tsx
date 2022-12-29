import React, { useState } from "react";

import { Header } from "../../components/Header";
import { Form } from "../../components/Form";
import { Resume } from "../../components/Resume";
import { CardList } from "../../components/CardList";

import { Container, Line } from "./styles";
import { Alert } from "react-native";

export function Home() {
  const [nameTask, setNameTask] = useState("");
  const [assignment, setAssignment] = useState<string[]>([]);

  function addNewTask() {
    setAssignment((prevState) => [...prevState, nameTask]);
    Alert.alert(
      "Missão adicionada!",
      "Não se esqueça de verificar as tarefas do dia..."
    );
    setNameTask("");
  }

  function removeAssignment() {}

  return (
    <>
      <Header />
      <Container>
        <Form value={nameTask} setValue={setNameTask} addTask={addNewTask} />
        <Resume />
        <Line />

        <CardList onRemove={removeAssignment}>{"Fh"}</CardList>
      </Container>
    </>
  );
}
