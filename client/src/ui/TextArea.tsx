import React, { ChangeEvent, FC, memo } from "react";
import { ITextArea } from "../types/custom";

const TextArea: FC<ITextArea> = ({
  rows = 1,
  cols = 25,
  textValue,
  changeHandler,
  inputProps = {},
}) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    changeHandler(e.target.value);
  };
  return (
    <textarea
      className="input-text"
      rows={rows}
      cols={cols}
      value={textValue}
      onChange={handleChange}      
      {...inputProps}
    />
  );
};

export default memo(TextArea);
