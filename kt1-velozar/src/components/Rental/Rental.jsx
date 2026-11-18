import React from 'react';
import rental from '../../images/rental.jpg';
import styles from './Rental.module.css';

export default function Rental() {
  return (
    <section className={styles.rental} id="rental">
      <img src={rental} alt="Велосипеды для проката" />
      <div className={styles.text}>
        <h2>Прокат велосипедов</h2>
        <p>У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!</p>
      </div>
    </section>
  );
}
