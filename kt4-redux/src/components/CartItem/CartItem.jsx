import React from 'react';
import styles from './CartItem.module.css';

export default function CartItem({ product, increaseCount, decreaseCount }) {
  return (
    <article className={styles.item}>
      <h2>{product.title}</h2>
      <div className={styles.counter}>
        <button aria-label={`Увеличить: ${product.title}`} disabled={product.count === 25}
          onClick={() => increaseCount(product.id)}>+</button>
        <span>{product.count}</span>
        <button aria-label={`Уменьшить: ${product.title}`}
          onClick={() => decreaseCount(product.id)}>−</button>
      </div>
    </article>
  );
}
