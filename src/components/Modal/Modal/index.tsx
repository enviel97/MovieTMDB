import React, { useEffect, useState } from "react";
import useModalStyles from "../styles/Modal.styles";

const Modal = ({ id, active = false, children }: IModalProps) => {
  const [_active, setActive] = useState(active);

  const styles = useModalStyles();

  useEffect(() => {
    setActive(active);
  }, [active]);

  return (
    <div id={id} className={`${styles.modal} ${_active ? "active" : ""}`}>
      {children}
    </div>
  );
};
export default Modal;
