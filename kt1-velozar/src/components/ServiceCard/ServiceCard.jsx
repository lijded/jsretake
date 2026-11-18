import React from 'react';
import styles from './ServiceCard.module.css';

export default function ServiceCard({ title, color }) {
  return (
    <article className={styles.card} style={{ backgroundColor: color }}>
      <h2>{title}</h2>
    </article>
  );
}
