import React from "react";
import "./App.css";
import { Todolist } from "./Todolist";

// CRUD
// - Повторение, дублирование
// - Создание структуры

export type TaskType = {
  id?: number;
  title: string;
  isDone: boolean;
};

function App() {
  // BLL
  const todolistTitle_1 = "What to learn";
  // const todolistTitle_2 = "What to buy";

  const tasks_1: Array<TaskType> = [
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "React", isDone: false },
  ];
  // const tasks_2: TaskType[] = [
  //   { id: 4, title: "Meat", isDone: true },
  //   { id: 5, title: "Beer", isDone: true },
  //   { id: 6, title: "Water", isDone: false },
  // ];

  // UI
  return (
    <div className="App">
      <Todolist title={todolistTitle_1} tasks={tasks_1} />
      {/* Todolist({title : "What to learn"}), tasks: task_1 */}
      {/* <Todolist title={todolistTitle_2} tasks={tasks_2} /> */}
    </div>
  );
}

export default App;
