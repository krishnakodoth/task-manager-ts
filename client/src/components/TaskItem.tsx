import React, { FC, useState } from "react";
import EditTask from "./EditTask";
import { deleteTaskApi } from "../api/taskApis";
import {ITasks} from "../types/task"

interface ITaskItem {
  task: ITasks;
}

const TaskItem:FC<ITaskItem> = ({task}) => {
  const [showEditDialog,setShowEditDialog] = useState<boolean>(false);
  
  const deleteTask = (taskId:string|undefined):void => {
    deleteTaskApi(taskId)
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };

  const onDialogClose = () => {
    setShowEditDialog(false);
  }

  return (
    <div className={`task-item ${task.status}`} key={task._id}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button className="btn primary" onClick={() => setShowEditDialog(true)}>Edit</button>
      <button className="btn secondary" onClick={() => deleteTask(task._id)}>Delete</button>
      {
        showEditDialog && (
          <EditTask 
          task={task}
          // onClose={()=>setShowEditDialog(false)}
          onClose={onDialogClose}
          />
        )
      }
    </div>
  );
};

export default TaskItem;
