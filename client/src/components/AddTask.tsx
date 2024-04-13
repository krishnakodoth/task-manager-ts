import React, { FC, useState } from "react";
import { addNewTaskApi } from "../api/taskApis";

const AddTask:FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const addTask = ():void => {
    addNewTaskApi({ title, description})
    .then(() => window.location.reload())
    .catch((err) => console.log(err));
  };

  return (
    <div className="add-task">
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
      </div>
      <div>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
      </div>
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
