import React, { FC,memo } from "react";

type TOptionList = {id:string,value:string}
export interface ISelectItem {
  multiple?: boolean;
  selected: string | undefined;
  listOptions:TOptionList[];
  changeHandler: (textValue: string) => void;
  inputProps?: {};
}

// --- Can be improve for option group / multiple etc
const SelectItem: FC<ISelectItem> = ({
  changeHandler,
  multiple = false,
  selected = "",
  listOptions=[],
  inputProps = {},
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeHandler(e.target.value);
  };
  return (
    <select
      multiple={multiple}
      className="input-text"
      value={selected}
      onChange={handleChange}
      {...inputProps}
    >
      {
        listOptions.length > 0 ? listOptions.map((row,i)=>
          <option key={`key-${i}-${row.id}`} value={row.id}>{row.value} </option>
        )
        :
        <option value={""}>--</option>
      }
    </select>
  );
};

export default memo(SelectItem);
