import React, { createContext, useState } from "react";
import { Alert, Keyboard } from "react-native";

import { Header } from "../../components/Header";
import { Form } from "../../components/Form";
import { Resume } from "../../components/Resume";
import { CardList } from "../../components/CardList";

import { useTasks } from "../../context/Tasks";

import imgList from "../../assets/clipboard.png";
import FlatList, { Container, Line, Img, EmptyText } from "./styles";

export function Home() {
  const { tasksData } = useTasks();

  return (
    <>
      <Header />
      <Container>
        <Form />
        <Resume />
        <FlatList
          data={tasksData}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <CardList key={item} text={item} />}
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
