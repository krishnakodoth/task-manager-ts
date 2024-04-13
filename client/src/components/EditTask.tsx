import React, { FC, MouseEventHandler, useState } from "react";
import DialogBox from "./DialogBox";
import { updateTaskApi } from "../api/taskApis";
import { ITasks } from "../types/task";
import Button from "../ui/Button";
import TextField from "../ui/TextField";
import TextArea from "../ui/TextArea";
import SelectItem from "../ui/SelectItem";

interface IEditTask {
  task: ITasks;
  onClose?: () => void;
}

const EditTask: FC<IEditTask> = ({ task, onClose }) => {
  const [title, setTitle] = useState<string>(task.title);
  const [description, setDescription] = useState<string>(task.description);
  const [status, setStatus] = useState<string | undefined>(task.status);

  const updateTask = () => {
    updateTaskApi(task._id, {
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
        <TextField
          type={"text"}
          textValue={title}
          changeHandler={setTitle}          
        />
        </div>
        <div>
        <TextArea
          textValue={description}
          changeHandler={setDescription}          
        />
        </div>
        <div>
          <SelectItem
          selected={status}
          listOptions={[{id:"todo",value:"todo"},{id:"done",value:"done"}]}
          changeHandler={setStatus}
          />
        </div>
        <div className="button-row">
          <Button
            buttonText={"Update"}
            varient="primary"
            //@ts-ignore -- Need to check and typed
            clickHandler={updateTask}
          />
          <Button
            buttonText={"Cancel"}
            varient="secondary"
            //@ts-ignore -- Need to check and typed
            clickHandler={onClose}
          />
        </div>
      </div>
    </DialogBox>
  );
};

export default EditTask;
