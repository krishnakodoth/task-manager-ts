import React, { FC } from "react";
import { createPortal } from "react-dom";

interface IDialogBox{
  children:React.ReactNode
}
const DialogBox:FC<IDialogBox> = ({children}) => {
  const modalDiv = (
    <>
      <div className="modal-overlay"></div>
      <div className="modal">{children}</div>
    </>
  );
  let portalDiv = document.getElementById("portal-root") as HTMLElement;
  return createPortal(modalDiv, portalDiv);
};

export default DialogBox;
