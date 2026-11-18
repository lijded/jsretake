import React from 'react';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about} aria-label="О нашей мастерской">
      <div>
        <p>Приехав к нам однажды, многие наши клиенты становятся постоянными, а часть из них даже друзьями.</p>
        <p>А также в нашей мастерской можно отремонтировать электросамокат и электровелосипед.</p>
      </div>
    </section>
  );
}
