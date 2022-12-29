import React, { useState } from "react";
import { Alert, Keyboard } from "react-native";

import { Header } from "../../components/Header";
import { Form } from "../../components/Form";
import { Resume } from "../../components/Resume";
import { CardList } from "../../components/CardList";

import imgList from "../../assets/clipboard.png";
import FlatList, { Container, Line, Img, EmptyText } from "./styles";

export function Home() {
  const [nameTask, setNameTask] = useState("");
  const [assignment, setAssignment] = useState<string[]>([]);

  function addNewTask() {
    setAssignment((prevState) => [...prevState, nameTask]);
    Keyboard.dismiss();
    setNameTask("");
  }

  function removeAssignment(nameTask: string) {
    Alert.alert("Remover", `Deseja remover essa tarefa?`, [
      {
        text: "Sim",
        onPress: () =>
          setAssignment((prevState) =>
            prevState.filter((task) => task !== nameTask)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <>
      <Header />
      <Container>
        <Form value={nameTask} setValue={setNameTask} addTask={addNewTask} />
        <Resume createdQuantity={assignment.length} />
        <FlatList
          data={assignment}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <CardList
              key={item}
              onRemove={() => removeAssignment(item)}
              text={item}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <>
              <Line />
              <Img source={imgList} />
              <EmptyText style={{ fontWeight: "bold" }}>
                Você ainda não tem tarefas cadastradas
              </EmptyText>
              <EmptyText>Crie tarefas e organize seus itens a fazer</EmptyText>
            </>
          )}
        />
      </Container>
    </>
  );
}
