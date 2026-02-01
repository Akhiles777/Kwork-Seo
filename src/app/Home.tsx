'use client';

import { useState, useRef, useEffect } from 'react';
import '@/styles/home.css';
import BeeAnimation from '@/components/BeeAnimation';
import 'leaflet/dist/leaflet.css';
import { categories } from '@/data/categories';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import Footer from '@/components/Footer';
import Link from 'next/link';

const cards = [
  {
    img: "https://i.postimg.cc/Yqd2GgGm/Frame_1333.png",
    title: "Альпийские луга с липой",
    description: "Ароматный мёд с мягким вкусом, полезный для укрепления иммунитета.",
    price: "1350 руб. за кг",
  },
  {
    img: "https://i.postimg.cc/9XtQ2scL/Frame_1329.png",
    title: "Каштановый мёд",
    description: "Темный натуральный мёд с легкой горчинкой, полезен для сердца.",
    price: "1350 руб. за кг",
  },
  {
    img: "https://i.postimg.cc/L4B8SGHm/Frame_1330.png",
    title: "Бортевой мёд",
    description: "Мёд c насыщенным вкусом и уникальным ароматом диких горных цветов.",
    price: "1350 руб. за кг",
  },
  {
    img: "https://i.postimg.cc/YqrqC89x/Frame_1332.png",
    title: "Цитрусовый мёд",
    description: "Мёд с освежающим цитрусовым вкусом, который подарит энергию и бодрость.",
    price: "1350 руб. за кг",
  },
];

const MapWithNoSSR = dynamic(() => import('@/components/MapComponent'), { ssr: false });
const position: [number, number] = [43.315713, 40.408009];

const Home = () => {
  const [homeMenuOpen, setHomeMenuOpen] = useState(false);
  const homeMenuRef = useRef<HTMLDivElement | null>(null);
  const contactsRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const scrollToContacts = () => {
    contactsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setHomeMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (homeMenuRef.current && !homeMenuRef.current.contains(target)) {
        setHomeMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="home">
      <BeeAnimation />
      <BeeAnimation />

      <header className="home-header">
        <div className="home-header-content">
        <li className="logo-header-li"><Link href="/" className="logo-header">
        <img src="https://i.postimg.cc/PxtsJWs9/logohoney_1.png" alt="Логотип Дом мёда Абхазии" loading="lazy" /></Link></li>

          <button className="home-burger" onClick={() => setHomeMenuOpen(true)}>
            <img src="https://i.postimg.cc/2jW5tjX8/burger.png" alt="Меню" loading="lazy" />
          </button>

          <div className="header-links">
          <li><Link href="/about">О нас</Link></li>
              <li><Link href="/catalog">Каталог</Link></li>
              <li><Link href="/delivery">Доставка и оплата</Link></li>
            <button className="footer-content-buttom-button" onClick={scrollToBottom}>
  Контакты
</button>

          </div>
          <div className="header-div"></div>
        </div>
        <hr className="header-hr" />
      </header>

      <div className="home-content">
        <div className="home-first-block">
          <img src="https://i.postimg.cc/nr2gWQyk/honey.png" alt="Изображение мёда" className="header-honey" loading="lazy" />

          <section className="home-categories-section">
            <h2 className="home-categories-title">АРШБА. ДОМ МЁДА</h2>
            <p className="home-categories-subtitle">
              Наш мед собирается в экологически чистых альпийских лугах Абхазии, где пчелы питаются нектаром редких горных цветов.
            </p>

            <div className="home-categories-grid">
  {categories.map((cat, index) => (
    <div key={index} className={`home-category-card ${cat.className}`}>
      <img src={cat.img} alt={cat.altText} className="category-img" />
    </div>
  ))}
</div>
          </section>

          <div className="home-third-block" data-aos="fade-up">
            <div className="background"></div>
            <div className="overlay"></div>

            <div className="home-third-block-text">
              <h2 className="home-third-block-text-h2">
                Мы бережно собираем мёд с пасек, окружённых горами, солнцем и чистым воздухом.
              </h2>

              <ul className="home-third-block-text-ul">
                <li className="home-third-block-text-li">
                  <img src="https://i.postimg.cc/kgG3kfXt/check.png" alt="Иконка проверки" className="li-icon" />
                  <p>Собственное производство</p>
                </li>
                <li className="home-third-block-text-li">
                  <img src="https://i.postimg.cc/kgG3kfXt/check.png" alt="Иконка проверки" className="li-icon" />
                  <p>Гарантия качества</p>
                </li>
                <li className="home-third-block-text-li">
                  <img src="https://i.postimg.cc/kgG3kfXt/check.png" alt="Иконка проверки" className="li-icon" />
                  <p>Натуральные продукты</p>
                </li>
              </ul>

              <a href="/catalog" className="home-third-block-text-button">Смотреть продукцию</a>
            </div>
          </div>

          <section className="top-section">
          <h1 className="top-section-h2">
  Мёд из Абхазии –&nbsp;
  <span className="top-section-second-span">
    горный, экологически чистый, без добавок
  </span>
</h1>
            <p className="top-section-description">От пчелиного улья до вашего дома</p>
            <div className="top-section-cards">
              {cards.map((card, i) => (
                <div className="news-section-card" key={i}>
                  <img
                    src={card.img}
                    className="top-bank-img"
                    alt={card.title}
                    loading="lazy"
                  />

                  <div className="news-section-card-info">
                    <p className="news-section-card-h2">{card.title}</p>
                    <p className="news-section-card-description">{card.description}</p>
                    <p className="news-section-card-price">{card.price}</p>

                    <a
                      href="https://wa.me/79409948837"
                      target="_blank"
                      className="home-link-button"
                      rel="noreferrer noopener"
                    >
                      Связаться с продавцом
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <a href="/catalog" className="home-top-goods-button">Смотреть все товары</a>
          </section>

          <section className="home-fourth-block" style={{ backgroundImage: `url('https://i.postimg.cc/DzFzwgS8/bees.png')` }}>
            <div className="story-content">
              <p className="text-gray-600 mb-6" data-aos="fade-up">Наша история</p>
              <h3 className="text-2xl font-semibold mb-4" data-aos="fade-up">
               <span>Дом мёда - </span>это семейное дело, выросшее из любви к пчёлам и уважения к природе. <br />Мы не просто собираем мёд - мы храним традиции и передаём их из поколения в поколение
              </h3>

              <Link href="/about" className="story-btn" data-aos="fade-up">Читать еще</Link>
            </div>
          </section>

          <section className="home-fifth-block">
            <div className="home-fifth-block-text">
              <h2 className="home-fifth-block-text-h2">Почему выбирают нас</h2>

              <ul className="home-fifth-block-text-ul">
                <li className="home-fifth-block-text-li">
                  <img src="https://i.postimg.cc/kgG3kfXt/check.png" className="home-third-li-icon" alt="Иконка проверки" />
                  <p>Свои пасеки и пчёлы под заботой</p>
                </li>
                <li className="home-fifth-block-text-li">
                  <img src="https://i.postimg.cc/kgG3kfXt/check.png" className="home-third-li-icon" alt="Иконка проверки" />
                  <p>Мёд из экологически чистых мест</p>
                </li>
                <li className="home-fifth-block-text-li">
                  <img src="https://i.postimg.cc/kgG3kfXt/check.png" className="home-third-li-icon" alt="Иконка проверки" />
                  <p>Прямые поставки - от улья до вашего дома</p>
                </li>
                <li className="home-fifth-block-text-li">
                  <img src="https://i.postimg.cc/kgG3kfXt/check.png" className="home-third-li-icon" alt="Иконка проверки" />
                  <p>Тепло и душа в каждой баночке</p>
                </li>
              </ul>
              <a href="/catalog" className="home-fifth-block-text-button">Смотреть продукцию</a>
            </div>

            <div className="home-fifth-block-img">
              <img src="https://i.postimg.cc/QdhV1LmV/bee.png" alt="Пчела" className="home-fifth-block-3imgs" loading="lazy" />
            </div>
          </section>

          <section className="home-seventh" ref={contactsRef}>
            <div className="home-seventh-map">
          <MapWithNoSSR />
          <div className="home-seventh-form">
            <div className="home-seventh-form-content">
          <p className="contact-h2">Контакты</p>
          <a href="tel:+79409948837" className="contact-phone-img phone-contact">
            <img src="https://i.postimg.cc/G2QX3nXs/phone.png" className='contact-phone-image' alt="Телефон" loading="lazy" /> +7 (940) 994-88-37
          </a>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-phone-img phone-contact"
          >
            <img src="https://i.postimg.cc/m2Z0H8Mg/location.png" className='contact-location' alt="Адрес" loading="lazy" />
            <div className="contact-address">
              <p>Республика Абхазия, Бзыбское ущелье</p>
              <p className="contact-address-secondP">(построить маршрут)</p>
            </div>
          </a>
          <a href="mailto:arshba27@mail.ru" className="contact-phone-img phone-contact">
            <img src="https://i.postimg.cc/XJwTwPQd/gmail.png" className='contact-phone-image' alt="Электронная почта" loading="lazy" />
            arshba27@mail.ru
          </a>
          <div className="contact-links">
                  <a href="https://wa.me/79409948837" target="_blank" rel="noreferrer noopener">
                    <img src="https://i.postimg.cc/zBjxDYxh/WA.png" alt="WhatsApp" loading="lazy" />
                  </a>
                  <a href="https://instagram.com/alpiskiy_med" className="instagram-btn" target="_blank" rel="noreferrer noopener">
                    <img src="https://i.postimg.cc/VNPcQy7b/Inst.png" alt="Instagram" loading="lazy" />
                  </a>

                  <button
  onClick={() => {
    navigator.clipboard.writeText('+79409948837');
    alert('Номер скопирован');
  }}
  className="max-btn"
  aria-label="Скопировать номер MAX"
>
  <img
    src="https://i.postimg.cc/SK9nfNgC/max.png"
    alt="MAX"
    loading="lazy"
  />
</button>
                </div>
          </div>
        </div>
        </div>
      </section>
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
              <li>
                <button onClick={scrollToContacts}>Контакты</button>
              </li>
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

export default Home;
