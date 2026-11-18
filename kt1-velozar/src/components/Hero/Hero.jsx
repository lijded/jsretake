import React from 'react';
import dino from '../../images/dino.png';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <h1>Веломастерская “Велозар”</h1>
        <p>Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.</p>
      </div>
      <img className={styles.dino} src={dino} alt="Динозавр на велосипеде" />
    </section>
  );
}
