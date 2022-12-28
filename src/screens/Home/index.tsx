import React from "react";
import { Header } from "../../components/Header";
import { Container, AddToDo, Input, SendButton } from "./styles";
import { Ionicons } from "@expo/vector-icons";

export function Home() {
  return (
    <>
      <Header />
      <Container>
        <AddToDo>
          <Input placeholder="Adicione uma nova tarefa" />
          <SendButton onPress={() => {}}>
            <Ionicons name="add-circle-outline" size={24} color="#f2f2f2" />
          </SendButton>
        </AddToDo>
      </Container>
    </>
  );
}
