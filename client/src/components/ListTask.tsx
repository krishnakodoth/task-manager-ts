import React, { useState, useEffect, FC } from "react";
import TaskItem from "./TaskItem";
import { getTaskListApi } from "../api/taskApis";
import {ITasks} from "../types/task"

const ListTask:FC = () => {
  const [tasks, setTasks] = useState<ITasks[]>([]);

  useEffect(() => {
    getTaskListApi()
      .then((res) => {
        const resultData:ITasks[] = [...res.data];
        resultData.sort((a, b) => {
          if (a.status === "todo" && b.status === "done") {
            return -1;
          } else if (a.status === "done" && b.status === "todo") {
            return 1;
          } else {
            return 0;
          }
        });
        setTasks(resultData);
      })
      .catch((err) => console.log(err));
  }, []);

  return <div className="list-task">{tasks.map(task => <TaskItem key={task._id} task={task} />)}</div>;
};

export default ListTask;
