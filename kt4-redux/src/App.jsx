import React from 'react';
import { connect } from 'react-redux';
import { addProduct, increaseCount, decreaseCount } from './store/actions';
import CartItem from './components/CartItem/CartItem';
import './App.css';

function App({ products, addProduct, increaseCount, decreaseCount }) {
  function handleAdd() {
    const title = prompt('Введите название товара');
    if (title === null || !title.trim()) return;
    addProduct(title.trim());
  }

  return (
    <main className="container">
      <h1>Корзина</h1>
      <button className="add-button" onClick={handleAdd}>Добавить товар</button>
      <p className="hint">До 25 штук каждого товара. При уменьшении до нуля товар удаляется.</p>
      <div className="cart">
        {products.map(product => (
          <CartItem key={product.id} product={product}
            increaseCount={increaseCount} decreaseCount={decreaseCount} />
        ))}
      </div>
      {products.length === 0 && <p>В корзине пока пусто.</p>}
    </main>
  );
}

function mapStateToProps(state) {
  return { products: state };
}

export default connect(mapStateToProps, { addProduct, increaseCount, decreaseCount })(App);
