import { ImageCard } from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

export const ImageGallery = ({ images }) => {
  return (
    <ul className={styles.gallery}>
      <li>
        <div>
          {images.map((item) => (
            <ImageCard key={item.id} item={item} />
          ))}
        </div>
      </li>
    </ul>
  );
};
