import styles from "./ImageCard.module.css";

export const ImageCard = ({ item: { alt, src } }) => {
  return (
    <div className={styles.gridItem}>
      <div className={styles.thumb}>
        <img src={src.large} alt={alt} />
      </div>
    </div>
  );
};
