import React from "react";
import styles from "./styles.module.css";

const ImageGalleryItem = ({ image }) => {
  const { webformatURL, tags } = image; // Extract the necessary data from the image prop

  return (
    <li>
      <img className={styles.ImageGalleryItem} src={webformatURL} alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;


