import React, { memo,FC } from 'react'

interface IButton {
  buttonText: string;
  varient?:"default"|"primary"|"secondary";
  clickHandler: () => void;
  inputProps?: {};
}

const Button:FC<IButton> = ({
  buttonText,
  varient="default",
  clickHandler  
}) => {
  const className = `btn ${varient}`
  return (
    <button 
    className={className}
    onClick={clickHandler}
    >{buttonText}</button>
  )
}

export default memo(Button);