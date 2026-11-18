import React from 'react';
import styles from './Rating.module.css';

export default function Rating({ rate }) {
  const stars = Math.round(rate);
  return (
    <span className={styles.rating} aria-label={`Рейтинг: ${rate} из 5`}>
      {'★'.repeat(stars)}{'☆'.repeat(5 - stars)}
    </span>
  );
}
