import React from "react";
import { CrossButton, DivStickyModal } from "./ModalStyled";

const Modal = ({ children, closeModal }) => {
  return (
    <DivStickyModal className="modal">
      <div className="modal-content">
        <CrossButton onClick={closeModal}>X</CrossButton>
        {children}
      </div>
    </DivStickyModal>
  );
};

export default Modal;
