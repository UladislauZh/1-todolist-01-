import React from "react";
import { TaskType } from "./App";
import { TodolistHeader } from "./TodolistHeader";
import { AddForm } from "./AddForm";
import { FilterButtons } from "./FilterButtons";

type TodolistPropsType = {
  title: string;
  tasks: TaskType[];
};

export const Todolist = (props: TodolistPropsType) => {
  // const {title, tasks} = props   Деструктуризация

  // условный рендеринг
  const tasksList =
    props.tasks.length === 0 ? (
      <span>Your todolist is empty</span>
    ) : (
      <ul>
        {props.tasks.map((t) => {
          return (
            <li>
              <input type="checkbox" checked={t.isDone} />
              <span>{t.title}</span>
            </li>
          );
        })}
      </ul>
    );

  return (
    <div className="todolist">
      <TodolistHeader title={props.title} />
      <AddForm />
      {/* <ul> */}
      {tasksList}
      {/* </ul> */}
      <FilterButtons />
    </div>
  );
};
