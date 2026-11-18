import React from 'react';
import styles from './ProductItem.module.css';

export default function ProductItem({ product, changeCount, deleteProduct }) {
  return (
    <article className={styles.item} onDoubleClick={() => deleteProduct(product.id)}>
      <h2>{product.name}</h2>
      <p>Цена: {product.price} ₽</p>
      <div className={styles.counter} onDoubleClick={event => event.stopPropagation()}>
        <button aria-label={`Уменьшить: ${product.name}`}
          onClick={() => changeCount(product.id, -1)}>−</button>
        <span>{product.count}</span>
        <button aria-label={`Увеличить: ${product.name}`} disabled={product.count === 25}
          onClick={() => changeCount(product.id, 1)}>+</button>
      </div>
    </article>
  );
}
