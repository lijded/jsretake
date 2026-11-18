import React, { useState } from 'react';
import ProductItem from './components/ProductItem/ProductItem';
import './App.css';

export default function App() {
  const data = [
    { id: 1, name: 'Велосипед', price: 1000, count: 1 },
    { id: 2, name: 'Самокат', price: 700, count: 1 },
    { id: 3, name: 'Ролики', price: 1300, count: 2 },
    { id: 4, name: 'Сноуборд', price: 19000, count: 4 }
  ];
  const [products, setProducts] = useState(data);

  function addProduct() {
    const answer = prompt('Введите название и цену товара', 'Велосипед 1000');
    if (answer === null) return;

    const words = answer.trim().split(/\s+/);
    const price = Number(words.pop().replace(',', '.'));
    const name = words.join(' ');

    if (!name || !Number.isFinite(price) || price < 0) {
      alert('Введите название и неотрицательную цену. Например: Велосипед 1000');
      return;
    }

    setProducts([...products, { id: Date.now(), name, price, count: 1 }]);
  }

  function changeCount(id, step) {
    setProducts(products.map(product => {
      if (product.id !== id) return product;
      return { ...product, count: Math.min(25, product.count + step) };
    }).filter(product => product.count > 0));
  }

  function deleteProduct(id) {
    setProducts(products.filter(product => product.id !== id));
  }

  return (
    <main className="container">
      <h1>Список товаров</h1>
      <button className="add-button" onClick={addProduct}>Добавить товар</button>
      <p className="hint">Двойной щелчок по карточке удаляет товар. Максимум — 25 штук.</p>
      <div className="products">
        {products.map(product => (
          <ProductItem key={product.id} product={product}
            changeCount={changeCount} deleteProduct={deleteProduct} />
        ))}
      </div>
      {products.length === 0 && <p>Список пуст. Добавьте товар.</p>}
    </main>
  );
}
