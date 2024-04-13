import React, { FC } from "react";
import AddTask from "./components/AddTask"
import ListTask from "./components/ListTask";


const App:FC = () => {
  return (
    <div className="task-manager" data-test-id="task-manager-app">
      <h1>Task Manager</h1>
      <AddTask />
      <ListTask />
    </div>
  );
};

export default App;
