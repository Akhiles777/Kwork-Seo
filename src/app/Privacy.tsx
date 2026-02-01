'use client';

import '@/styles/privacy.css';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Image from 'next/image';

const PrivacyPolicy = () => {

    const [homeMenuOpen, setHomeMenuOpen] = useState(false);
      const homeMenuRef = useRef<HTMLDivElement | null>(null);

      useEffect(() => {
        if (!homeMenuOpen) return;
      
        const handleClickOutside = (event: MouseEvent) => {
          const target = event.target as Node;
          if (homeMenuRef.current && !homeMenuRef.current.contains(target)) {
            setHomeMenuOpen(false);
          }
        };
      
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }, [homeMenuOpen]);
      

  return (
    <div className="privacy-policy">
                 <header className="catalog-header">
                <div className="catalog-header-content">
                <li className="logo-header-li"><Link href="/" className="catalog-logo-header">
                <Image src='https://i.postimg.cc/PxtsJWs9/logohoney_1.png' alt="Logo" /></Link></li>
            
                    <button className="catalog-burger" onClick={() => setHomeMenuOpen(true)}>
                        <Image src="https://i.postimg.cc/2jW5tjX8/burger.png" alt="menu" />
                    </button>
                    <div className="privacy-header-links">
                    <li><Link href="/about">О нас</Link></li>
              <li><Link href="/catalog">Каталог</Link></li>
              <li><Link href="/delivery">Доставка и оплата</Link></li>
                    </div>
                </div>
                <hr className='header-hr' />
            </header>


      <div className="privacy-content">
      <h2>Политика конфиденциальности</h2>
        <h3>1. Введение</h3>
        <p className='policy-text'>
          Мы ценим вашу конфиденциальность и обязуемся защищать вашу личную информацию. Эта политика конфиденциальности объясняет, как мы собираем, используем и защищаем вашу личную информацию при использовании нашего сайта.
        </p>

        <h3>2. Собираемая информация</h3>
        <div className='policy-text'>
          Мы можем собирать следующие типы информации:
          <ul>
            <li>Личные данные, такие как имя, адрес электронной почты, номер телефона.</li>
            <li>Данные о вашем поведении на сайте, такие как страницы, которые вы посещаете, время, проведенное на сайте, и другие действия.</li>
            <li>Куки и другие технологии отслеживания для улучшения работы сайта.</li>
          </ul>
        </div>

        <h3>3. Как мы используем вашу информацию</h3>
        <div className='policy-text'>
          Собранная информация может использоваться для:
          <ul>
            <li>Обработки заказов и предоставления услуг.</li>
            <li>Улучшения пользовательского опыта на сайте.</li>
            <li>Отправки уведомлений о новостях и обновлениях.</li>
            <li>Ответов на запросы и обращения пользователей.</li>
          </ul>
        </div>

        <h3>4. Как мы защищаем вашу информацию</h3>
        <div className='policy-text'>
          Мы применяем меры безопасности для защиты ваших данных от несанкционированного доступа, потери или раскрытия. Однако мы не можем гарантировать полную безопасность ваших данных в интернете.
        </div>

        <h3>5. Ваши права</h3>
        <div className='policy-text'>
          У вас есть право:
          <ul>
            <li>Запрашивать доступ к своим личным данным.</li>
            <li>Просить исправить или удалить вашу личную информацию.</li>
            <li>Отказаться от получения маркетинговых материалов.</li>
          </ul>
        </div>

        <h3>6. Изменения в политике конфиденциальности</h3>
        <div className='policy-text'>
          Мы можем периодически обновлять эту политику конфиденциальности. Все изменения будут опубликованы на этой странице с новой датой обновления.
        </div>

        <h3>7. Контакты</h3>
        <div className='policy-text'>
          Если у вас есть вопросы или запросы относительно этой политики конфиденциальности, пожалуйста, свяжитесь с нами по электронной почте: 
          <a href="mailto:arshba27@mail.ru"> arshba27@mail.ru</a>.
        </div>
      </div>
      {homeMenuOpen && (
  <div
    className="home-modal-overlay"
    onClick={() => setHomeMenuOpen(false)}
  >
    <div
      className="home-modal"
      ref={homeMenuRef}
      onClick={(e) => e.stopPropagation()}
    >
      <ul className="home-modal-list">
      <li><Link href="/">Главная</Link></li>
              <li><Link href="/about">О нас</Link></li>
              <li><Link href="/catalog">Каталог</Link></li>
              <li><Link href="/delivery">Доставка и оплата</Link></li>
      </ul>

      <button
        className="home-modal-close"
        onClick={() => setHomeMenuOpen(false)}
      >
        Закрыть
      </button>
    </div>
  </div>
)}
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
