
import React from "react";
import "./Modal.scss";

const Modal = ({ modalActive, children }) => {
  return (
    <div className={modalActive ? "modal-wrap active" : "modal-wrap"}>
      <div
        className={modalActive ? "modal active" : "modal"}
        onClick={(e) => e.stopPropagation()}
        >
        {children}
      </div>
    </div>
  );
};
export default Modal;