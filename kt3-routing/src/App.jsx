import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    fetch('https://fakestoreapi.com/products', { signal: controller.signal })
      .then(response => {
        if (!response.ok) throw new Error('Ошибка загрузки товаров');
        return response.json();
      })
      .then(data => setProducts(data))
      .catch(error => {
        if (error.name !== 'AbortError') setError('Не удалось загрузить товары. Попробуйте обновить страницу.');
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return (
    <main className="container">
      <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/products" element={
          <ProductsPage products={products} loading={loading} error={error} />
        } />
        <Route path="/product/:id" element={
          <ProductPage products={products} loading={loading} error={error} />
        } />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
}
