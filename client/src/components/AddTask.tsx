import React, { FC, useState } from "react";
import { addNewTaskApi } from "../api/taskApis";
import TextField from "../ui/TextField";
import TextArea from "../ui/TextArea";
import Button from "../ui/Button";

const AddTask: FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const addTask = (): void => {
    addNewTaskApi({ title, description })
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <div className="add-task" data-test-id="add-task-component">
      <div>
        <TextField
          type={"text"}
          textValue={title}
          changeHandler={setTitle}
          inputProps={{
            placeholder: "Task Title",
            // id:"sampleId",
            // className:"textClass",
            // style:{border:'solid 1px red'}
          }}
        />
      </div>
      <div>
        <TextArea
          textValue={description}
          changeHandler={setDescription}
          inputProps={{
            placeholder: "Description",
            // id:"sampleId",
            // className:"textClass",
            // style:{border:'solid 1px red'}
          }}
        />
      </div>
      <div>
        <Button 
          buttonText={"Add Task"}
          varient="primary"
          clickHandler={addTask}
        />
      </div>
    </div>
  );
};

export default AddTask;
