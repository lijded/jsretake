import React from 'react';
import logo from '../../images/logo.svg';
import styles from './Header.module.css';

export default function Header() {
  function showContacts() {
    alert('Контакты мастерской будут добавлены позже.');
  }

  return (
    <header className={styles.header}>
      <a href="#about" aria-label="Велозар — на главную">
        <img className={styles.logo} src={logo} alt="Велозар" />
      </a>
      <nav className={styles.menu}>
        <a href="#about">О нас</a>
        <a href="#services">Услуги</a>
        <a href="#rental">Аренда</a>
      </nav>
      <button className={styles.button} onClick={showContacts}>Связаться</button>
    </header>
  );
}
