import React, { createContext, useState } from "react";
import { Alert, Keyboard } from "react-native";

import { Header } from "../../components/Header";
import { Form } from "../../components/Form";
import { Resume } from "../../components/Resume";
import { CardList } from "../../components/CardList";

import imgList from "../../assets/clipboard.png";
import FlatList, { Container, Line, Img, EmptyText } from "./styles";

export type ContextValue = {
  taskIsConcluded: (task: string) => boolean;
  toggleConcludedTasks: (task: string) => void;
};

export const MyContext = createContext<ContextValue>({
  taskIsConcluded: () => false,
  toggleConcludedTasks: () => {},
});

export function Home() {
  const [nameTask, setNameTask] = useState("");
  const [assignment, setAssignment] = useState<string[]>([]);
  const [concludedTasks, setConcludedTasks] = useState<string[]>([]);

  function addNewTask() {
    setAssignment((prevState) => [...prevState, nameTask]);
    Keyboard.dismiss();
    setNameTask("");
  }

  function removeAssignment(nameTask: string) {
    Alert.alert("Remover", `Deseja remover essa tarefa?`, [
      {
        text: "Sim",
        onPress: () => {
          setAssignment((prevState) =>
            prevState.filter((task) => task !== nameTask)
          );
          setConcludedTasks((prevState) =>
            prevState.filter((concludedTask) => concludedTask !== nameTask)
          );
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  const toggleConcludedTasks = (task: string) => {
    if (concludedTasks.includes(task)) {
      setConcludedTasks((prevState) =>
        prevState.filter((concludedTask) => concludedTask !== task)
      );
    } else {
      setConcludedTasks((prevState) => [...prevState, task]);
    }
  };

  const taskIsConcluded = (task: string) => {
    return concludedTasks.includes(task);
  };

  const contextValue: ContextValue = {
    taskIsConcluded,
    toggleConcludedTasks,
  };

  return (
    <>
      <MyContext.Provider value={contextValue}>
        <Header />
        <Container>
          <Form value={nameTask} setValue={setNameTask} addTask={addNewTask} />
          <Resume
            createdQuantity={assignment.length}
            concludedQuantity={concludedTasks.length}
          />
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
                <EmptyText>
                  Crie tarefas e organize seus itens a fazer
                </EmptyText>
              </>
            )}
          />
        </Container>
      </MyContext.Provider>
    </>
  );
}
