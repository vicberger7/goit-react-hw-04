import { ImageCard } from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

export const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={styles.gallery}>
      <li>
        <div>
          {images.map((item) => (
            <ImageCard
              key={item.id}
              item={item}
              onClick={() => onImageClick(item)}
            />
          ))}
        </div>
      </li>
    </ul>
  );
};
