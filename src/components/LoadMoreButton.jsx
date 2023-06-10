import React from 'react';
import styles from './styles.module.css';

const LoadMoreButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.Button}>
      Load More
    </button>
  );
};

export default LoadMoreButton;
