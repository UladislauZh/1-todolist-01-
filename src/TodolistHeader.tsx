import React from "react";

type TodolistHeaderPropsType = {
  title: string;
};

// С деструктуризацией

export const TodolistHeader = ({ title }: TodolistHeaderPropsType) => {
  return <h3>{title}</h3>;
};
