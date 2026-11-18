import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Rating from '../components/Rating/Rating';
import NotFoundPage from './NotFoundPage';

export default function ProductPage({ products, loading, error }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(product => product.id === Number(id));

  if (loading) return <p>Загрузка товара...</p>;
  if (error) return <p role="alert">{error}</p>;
  if (!product) return <NotFoundPage />;

  return (
    <>
      <article className="product-detail">
        <h1>{product.title}</h1>
        <img src={product.image} alt={product.title} />
        <p>Цена: {product.price} $</p>
        <p>Описание: {product.description}</p>
        <Rating rate={product.rating.rate} />
      </article>
      <button className="back-button" onClick={() => navigate(-1)}>Назад</button>
    </>
  );
}
