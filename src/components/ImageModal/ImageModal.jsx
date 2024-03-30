import Modal from "react-modal";
import styles from "./ImageModal.module.css";

export const ImageModal = ({ isOpen, onClose, urls, alt_description }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className={styles.modal}>
      <img src={urls.raw} alt={alt_description} />
    </Modal>
  );
};
