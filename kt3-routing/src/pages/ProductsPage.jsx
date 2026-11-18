import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating/Rating';

export default function ProductsPage({ products, loading, error }) {
  if (loading) return <p>Загрузка товаров...</p>;
  if (error) return <p role="alert">{error}</p>;

  return (
    <>
      <h1>Список товаров</h1>
      <div className="products">
        {products.map(product => (
          <article className="product-card" key={product.id}>
            <h2><Link to={`/product/${product.id}`}>{product.title}</Link></h2>
            <Rating rate={product.rating.rate} />
          </article>
        ))}
      </div>
      {products.length === 0 && <p>Товаров пока нет.</p>}
    </>
  );
}
