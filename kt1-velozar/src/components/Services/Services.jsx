import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import styles from './Services.module.css';

export default function Services() {
  const services = [
    { title: 'Годовое ТО', color: '#22356f' },
    { title: 'Выравнивание колес', color: '#0052c1' },
    { title: 'Настройка переключателей', color: '#76b58b' }
  ];

  return (
    <section className={styles.services} id="services" aria-label="Услуги">
      {services.map(service => (
        <ServiceCard key={service.title} title={service.title} color={service.color} />
      ))}
    </section>
  );
}
