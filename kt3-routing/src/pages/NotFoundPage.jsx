import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>404 — страница не найдена</h1>
      <p>Такого адреса или товара нет.</p>
      <button onClick={() => navigate('/products')}>К списку товаров</button>
    </div>
  );
}
