// custom types
type TextFieldTypes =  'text' | "date" | "number";


export interface ITextField{
  _id?: string;
  type?:TextFieldTypes;
  textValue: string;
  changeHandler:(textValue:string)=>void;
  placeholder?:string;
  inputProps?:{};
  // [key: string]: any;
}

export interface ITextArea {
  rows?: number;
  cols?: number;
  textValue: string;
  changeHandler: (textValue: string) => void;
  inputProps?: {};
}