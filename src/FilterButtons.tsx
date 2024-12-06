import React from "react";
import { Button } from "./Button";

// type FilterButtonsPropsType = {};

// С деструктуризацией

export const FilterButtons = () => {
  return (
    <div>
      <Button title="All" />
      <Button title="Active" />
      <Button title="Completed" />
      {/* <button>All</button>
    <button>Active</button>
    <button>Completed</button> */}
    </div>
  );
};
