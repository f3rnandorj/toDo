import React, { createContext, useState, useContext } from "react";
import { Alert, Keyboard } from "react-native";

type TasksContextData = {
  tasksData: string[];
  concludedTasks: string[];
  tasksFromBehind: string[];
  addNewTask: (task: string) => void;
  removeTask: (task: string) => void;
  toggleConcludedTasks: (task: string) => void;
  taskIsConcluded: (task: string) => boolean;
  showsTasks: () => void;
  showsCheckedTasks: () => void;
  showsNotCheckedTasks: () => void;
};

const TasksContext = createContext<TasksContextData>({} as TasksContextData);

const TasksProvider = ({ children }: any) => {
  const [tasksData, setTasksData] = useState<string[]>([]);
  const [concludedTasks, setConcludedTasks] = useState<string[]>([]);
  const [tasksFromBehind, setTasksFromBehind] = useState<string[]>([]);

  //Order tasks by checked or not checked
  tasksData.sort((a) => (concludedTasks.includes(a) ? 1 : -1));

  const notCheckedTasks = tasksData.filter(
    (task) => !concludedTasks.includes(task)
  );

  function addNewTask(task: string) {
    setTasksData((prevState) => [...prevState, task]);
    setTasksFromBehind((prevState) => [...prevState, task]);
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

          setTasksFromBehind((prevState) =>
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

  function taskIsConcluded(task: string) {
    return concludedTasks.includes(task);
  }

  //returns the value of completed list of tasks
  function showsTasks() {
    setTasksData(tasksFromBehind);
  }

  function showsCheckedTasks() {
    setTasksData(concludedTasks);
  }

  //It's can be used to shows the not checked array of tasks
  function showsNotCheckedTasks() {
    setTasksData(notCheckedTasks);
  }

  return (
    <TasksContext.Provider
      value={{
        tasksData,
        concludedTasks,
        tasksFromBehind,
        addNewTask,
        removeTask,
        toggleConcludedTasks,
        taskIsConcluded,
        showsTasks,
        showsCheckedTasks,
        showsNotCheckedTasks,
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

export { TasksProvider, useTasks };
