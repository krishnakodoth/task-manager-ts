import React, { FC, MouseEventHandler, useState } from "react";
import DialogBox from "./DialogBox";
import { updateTaskApi } from "../api/taskApis";
import {ITasks} from "../types/task"

interface IEditTask{
  task: ITasks;
  onClose:React.MouseEventHandler<HTMLButtonElement>
}

const EditTask:FC<IEditTask> = ({ task, onClose }) => {
  const [title, setTitle] = useState<string>(task.title);
  const [description, setDescription] = useState<string>(task.description);
  const [status, setStatus] = useState< string| undefined>(task.status);

  const updateTask = () => {
      updateTaskApi(task._id,{
        title,
        description,
        status,
      })
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <DialogBox>
      <div className="update-task">
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
        <div>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value={"todo"}>Todo</option>
            <option value={"done"}>Done</option>
          </select>
        </div>
        <div className="button-row">
          <button className="btn primary" onClick={updateTask}>
            Update
          </button>
          <button className="btn secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </DialogBox>
  );
};

export default EditTask;
