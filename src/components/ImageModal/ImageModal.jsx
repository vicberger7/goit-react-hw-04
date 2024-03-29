import Modal from "react-modal";
import styles from "./ImageModal.module.css";

export const ImageModal = ({ isOpen, onClose, imageUrl, alt }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className={styles.modal}>
      <img src={imageUrl} alt={alt} />
    </Modal>
  );
};
