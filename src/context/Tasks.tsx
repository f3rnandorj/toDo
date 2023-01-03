import React, { createContext, useState, useContext } from "react";
import { Alert, Keyboard } from "react-native";

type TasksContextData = {
  tasksData: string[];
  concludedTasks: string[];
  addNewTask: (task: string) => void;
  removeTask: (task: string) => void;
  toggleConcludedTasks: (task: string) => void;
  taskIsConcluded: (task: string) => boolean;
};

const TasksContext = createContext<TasksContextData>({} as TasksContextData);

const TasksProvider = ({ children }: any) => {
  const [tasksData, setTasksData] = useState<string[]>([]);
  const [concludedTasks, setConcludedTasks] = useState<string[]>([]);

  function addNewTask(task: string) {
    setTasksData((prevState) => [...prevState, task]);
    Keyboard.dismiss();
  }

  function removeTask(value: string) {
    Alert.alert("Remover", `Deseja remover essa tarefa?`, [
      {
        text: "Sim",
        onPress: () => {
          setTasksData((prevState) =>
            prevState.filter((task) => task !== value)
          );
          setConcludedTasks((prevState) =>
            prevState.filter((concludedTask) => concludedTask !== value)
          );
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  function toggleConcludedTasks(task: string) {
    if (concludedTasks.includes(task)) {
      setConcludedTasks((prevState) =>
        prevState.filter((concludedTask) => concludedTask !== task)
      );
    } else {
      setConcludedTasks((prevState) => [...prevState, task]);
    }
  }

  const taskIsConcluded = (task: string) => {
    return concludedTasks.includes(task);
  };

  return (
    <TasksContext.Provider
      value={{
        tasksData,
        concludedTasks,
        addNewTask,
        removeTask,
        toggleConcludedTasks,
        taskIsConcluded,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

function useTasks(): TasksContextData {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error("useTasks must be used within an TasksProvider");
  }

  return context;
}

export { TasksContext, TasksProvider, useTasks };
