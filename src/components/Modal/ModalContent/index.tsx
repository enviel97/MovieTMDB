import React, { useRef } from "react";
import { IoCloseSharp } from "react-icons/io5";
import useModalStyles from "../styles/Modal.styles";

const ModalContent = ({
  onClose,
  className = "",
  children,
}: IModalContentProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const styles = useModalStyles();

  const closeModal = () => {
    if (!contentRef.current || !contentRef.current.parentNode) return;

    // onClose call
    onClose?.call(this);

    // remove icon
    const parent = contentRef.current.parentNode as HTMLElement;
    parent.classList.remove("active");
  };

  return (
    <div ref={contentRef} className={`${styles.modalContent} ${className}`}>
      {children}
      <div className={styles.modalContentClose} onClick={closeModal}>
        <IoCloseSharp />
      </div>
    </div>
  );
};

export default ModalContent;
