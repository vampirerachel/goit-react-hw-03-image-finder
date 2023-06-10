import React from 'react';
import styles from './styles.module.css';

const ImageGalleryItem = ({ image, onClick }) => {
  const { webformatURL, tags } = image;

  return (
    <li className={styles.ImageGalleryItem}>
      <img src={webformatURL} alt={tags} onClick={onClick} />
    </li>
  );
};

export default ImageGalleryItem;



