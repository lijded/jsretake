import React from 'react';
import workshop from '../../images/workshop.jpg';
import styles from './Offer.module.css';

export default function Offer() {
  return (
    <section className={styles.offer}>
      <div className={styles.text}>
        <h2>Что мы предлагаем</h2>
        <p>В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта. Все работы выполняем качественно и с душой.</p>
      </div>
      <img src={workshop} alt="Ремонт велосипеда в мастерской" />
    </section>
  );
}
