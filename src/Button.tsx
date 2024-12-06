import React from "react";

type ButtonPropsType = {
  title: string;
};

// С деструктуризацией

export const Button = ({ title }: ButtonPropsType) => {
  return <button>{title}</button>;
};
