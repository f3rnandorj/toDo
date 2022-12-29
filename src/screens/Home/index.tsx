import React, { useState } from "react";

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

    setNameTask("");
  }

  function removeAssignment() {}

  return (
    <>
      <Header />
      <Container>
        <Form value={nameTask} setValue={setNameTask} addTask={addNewTask} />
        <Resume />
        <FlatList
          data={assignment}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <CardList key={item} onRemove={removeAssignment} text={item} />
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
