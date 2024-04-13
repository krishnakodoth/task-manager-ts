import React, { FC, memo } from "react";
import { ITextField } from "../types/custom";

const TextField: FC<ITextField> = ({
  type,
  textValue,
  changeHandler,
  inputProps = {},
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeHandler(e.target.value);
  };
  return (
    <input
      className="input-text"
      type={type}
      value={textValue}
      onChange={handleChange}
      {...inputProps}
    />
  );
};

export default memo(TextField);
