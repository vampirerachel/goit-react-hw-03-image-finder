import React from 'react';
import styles from './styles.module.css';

const Modal = ({ image, onClose }) => {
  const { largeImageURL, tags } = image;

  return (
    <div className={styles.Overlay} onClick={onClose}>
      <div className={styles.Modal}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
};

export default Modal;
