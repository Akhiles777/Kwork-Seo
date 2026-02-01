'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import '@/styles/home.css';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/data/categories';

// Ленивая загрузка тяжелых компонентов
const BeeAnimation = dynamic(() => import('@/components/BeeAnimation'), {
  loading: () => <div className="bee-animation-placeholder" />,
  ssr: false
});

const MapWithNoSSR = dynamic(() => import('@/components/MapComponent'), { 
  ssr: false,
  loading: () => <div className="map-placeholder" />
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="footer-placeholder" />
});

// Данные вынесены в константы для переиспользования
const CARDS = [
  {
    id: 1,
    img: "https://i.postimg.cc/Yqd2GgGm/Frame_1333.png",
    title: "Альпийские луга с липой",
    description: "Ароматный мёд с мягким вкусом, полезный для укрепления иммунитета.",
    price: "1350 руб. за кг",
    slug: "alpine-honey"
  },
  {
    id: 2,
    img: "https://i.postimg.cc/9XtQ2scL/Frame_1329.png",
    title: "Каштановый мёд",
    description: "Темный натуральный мёд с легкой горчинкой, полезен для сердца.",
    price: "1350 руб. за кг",
    slug: "chestnut-honey"
  },
  {
    id: 3,
    img: "https://i.postimg.cc/L4B8SGHm/Frame_1330.png",
    title: "Бортевой мёд",
    description: "Мёд c насыщенным вкусом и уникальным ароматом диких горных цветов.",
    price: "1350 руб. за кг",
    slug: "wild-honey"
  },
  {
    id: 4,
    img: "https://i.postimg.cc/YqrqC89x/Frame_1332.png",
    title: "Цитрусовый мёд",
    description: "Мёд с освежающим цитрусовым вкусом, который подарит энергию и бодрость.",
    price: "1350 руб. за кг",
    slug: "citrus-honey"
  },
] as const;

const MAP_POSITION: [number, number] = [43.315713, 40.408009];
const PHONE_NUMBER = '+79409948837';
const EMAIL = 'arshba27@mail.ru';

const Home = () => {
  const [homeMenuOpen, setHomeMenuOpen] = useState(false);
  const homeMenuRef = useRef<HTMLDivElement | null>(null);
  const contactsRef = useRef<HTMLDivElement | null>(null);

  // Оптимизированные функции скролла
  const scrollToBottom = useCallback(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }, []);

  const scrollToContacts = useCallback(() => {
    contactsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setHomeMenuOpen(false);
  }, []);

  // Оптимизированный обработчик клика вне меню
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (homeMenuRef.current && !homeMenuRef.current.contains(event.target as Node)) {
        setHomeMenuOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Функция копирования номера телефона
  const copyPhoneNumber = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(PHONE_NUMBER);
      alert('Номер телефона скопирован в буфер обмена!');
    } catch (err) {
      console.error('Ошибка копирования:', err);
    }
  }, []);

  return (
    <>
      {/* Schema.org разметка для SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Дом мёда Абхазии",
            "description": "Натуральный горный мёд из экологически чистых районов Абхазии",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Абхазия",
              "addressRegion": "Бзыбское ущелье"
            },
            "telephone": PHONE_NUMBER,
            "email": EMAIL,
            "image": "https://i.postimg.cc/PxtsJWs9/logohoney_1.png",
            "priceRange": "₽₽",
            "openingHours": "Mo-Su 09:00-20:00"
          })
        }}
      />

      <div className="home">
        {/* Анимация пчел - 2 экземпляра для визуального эффекта */}
        <BeeAnimation />
        <BeeAnimation />

        {/* Хедер с семантической разметкой */}
        <header className="home-header" role="banner">
          <div className="home-header-content">
            <div className="logo-header-li">
              <Link 
                href="/" 
                className="logo-header" 
                aria-label="Дом мёда Абхазии - переход на главную"
              >
                <Image 
                  src="https://i.postimg.cc/PxtsJWs9/logohoney_1.png" 
                  alt="Логотип Дом мёда Абхазии - натуральный абхазский мёд" 
                  width={180}
                  height={60}
                  priority
                  quality={85}
                />
              </Link>
            </div>

            {/* Мобильное меню */}
            <button 
              className="home-burger" 
              onClick={() => setHomeMenuOpen(true)}
              aria-label="Открыть меню"
              aria-expanded={homeMenuOpen}
            >
              <Image 
                src="https://i.postimg.cc/2jW5tjX8/burger.png" 
                alt="Иконка меню" 
                width={24}
                height={24}
                loading="eager"
              />
            </button>

            {/* Десктопная навигация */}
            <nav className="header-links" aria-label="Основная навигация">
              <ul>
                <li><Link href="/about" prefetch={false}>О нас</Link></li>
                <li><Link href="/catalog" prefetch={false}>Каталог</Link></li>
                <li><Link href="/delivery" prefetch={false}>Доставка и оплата</Link></li>
              </ul>
              <button 
                className="footer-content-buttom-button" 
                onClick={scrollToBottom}
                aria-label="Перейти к контактам"
              >
                Контакты
              </button>
            </nav>
            <div className="header-div"></div>
          </div>
          <hr className="header-hr" aria-hidden="true" />
        </header>

        <main className="home-content" role="main">
          <div className="home-first-block">
            {/* Декоративное изображение */}
            <Image 
              src="https://i.postimg.cc/nr2gWQyk/honey.png" 
              alt="Натуральный абхазский мёд в сотах" 
              className="header-honey"
              width={400}
              height={300}
              loading="lazy"
              quality={80}
            />

            {/* Секция категорий */}
            <section className="home-categories-section" aria-labelledby="categories-title">
              <h1 id="categories-title" className="home-categories-title">
                АРШБА. ДОМ МЁДА
              </h1>
              <p className="home-categories-subtitle">
                Наш мед собирается в экологически чистых альпийских лугах Абхазии, 
                где пчелы питаются нектаром редких горных цветов.
              </p>

              <div className="home-categories-grid">
                {categories.map((cat) => (
                  <div key={cat.altText} className={`home-category-card ${cat.className}`}>
                    <Image 
                      src={cat.img} 
                      alt={cat.altText} 
                      className="category-img"
                      width={300}
                      height={200}
                      loading="lazy"
                      quality={85}
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Секция преимуществ */}
            <section className="home-third-block" data-aos="fade-up">
              <div className="background" aria-hidden="true"></div>
              <div className="overlay" aria-hidden="true"></div>

              <div className="home-third-block-text">
                <h2 className="home-third-block-text-h2">
                  Мы бережно собираем мёд с пасек, окружённых горами, солнцем и чистым воздухом.
                </h2>

                <ul className="home-third-block-text-ul">
                  {[
                    { text: "Собственное производство" },
                    { text: "Гарантия качества" },
                    { text: "Натуральные продукты" }
                  ].map((item, index) => (
                    <li key={index} className="home-third-block-text-li">
                      <Image 
                        src="https://i.postimg.cc/kgG3kfXt/check.png" 
                        alt="Галочка подтверждения" 
                        className="li-icon"
                        width={20}
                        height={20}
                        loading="lazy"
                      />
                      <p>{item.text}</p>
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/catalog" 
                  className="home-third-block-text-button"
                  aria-label="Перейти к каталогу продукции"
                >
                  Смотреть продукцию
                </Link>
              </div>
            </section>

            {/* Основная секция товаров */}
            <section className="top-section" aria-labelledby="main-products-title">
              <h2 id="main-products-title" className="top-section-h2">
                Натуральный мед из Абхазии –&nbsp;
                <span className="top-section-second-span">
                  горный, экологически чистый, без добавок
                </span>
              </h2>
              <p className="top-section-description">От пчелиного улья до вашего дома</p>
              
              <div className="top-section-cards">
                {CARDS.map((card) => (
                  <article 
                    key={card.id} 
                    className="news-section-card"
                    itemScope
                    itemType="https://schema.org/Product"
                  >
                    <Image
                      src={card.img}
                      className="top-bank-img"
                      alt={`${card.title} - натуральный абхазский мёд`}
                      width={280}
                      height={200}
                      loading="lazy"
                      quality={85}
                      itemProp="image"
                    />

                    <div className="news-section-card-info">
                      <h3 className="news-section-card-h2" itemProp="name">
                        {card.title}
                      </h3>
                      <p className="news-section-card-description" itemProp="description">
                        {card.description}
                      </p>
                      <p className="news-section-card-price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                        <span itemProp="price">1350</span>
                        <span itemProp="priceCurrency">RUB</span> за кг
                      </p>

                      <a
                        href={`https://wa.me/${PHONE_NUMBER.replace('+', '')}?text=Здравствуйте!%20Интересует%20${encodeURIComponent(card.title)}`}
                        target="_blank"
                        className="home-link-button"
                        rel="noopener noreferrer"
                        aria-label={`Связаться по WhatsApp о ${card.title}`}
                      >
                        Связаться с продавцом
                      </a>
                    </div>
                  </article>
                ))}
              </div>

              <Link 
                href="/catalog" 
                className="home-top-goods-button"
                aria-label="Смотреть весь каталог товаров"
              >
                Смотреть все товары
              </Link>
            </section>

            {/* Секция истории */}
            <section 
              className="home-fourth-block" 
              style={{ backgroundImage: `url('https://i.postimg.cc/DzFzwgS8/bees.png')` }}
              aria-label="Наша история"
            >
              <div className="story-content">
                <p className="text-gray-600 mb-6" data-aos="fade-up">Наша история</p>
                <h3 className="text-2xl font-semibold mb-4" data-aos="fade-up">
                  <span>Дом мёда - </span>это семейное дело, выросшее из любви к пчёлам и уважения к природе. 
                  <br />Мы не просто собираем мёд - мы храним традиции и передаём их из поколения в поколение
                </h3>

                <Link 
                  href="/about" 
                  className="story-btn" 
                  data-aos="fade-up"
                  aria-label="Читать полную историю компании"
                >
                  Читать еще
                </Link>
              </div>
            </section>

            {/* Секция преимуществ компании */}
            <section className="home-fifth-block" aria-labelledby="advantages-title">
              <div className="home-fifth-block-text">
                <h2 id="advantages-title" className="home-fifth-block-text-h2">
                  Почему выбирают наш абхазский мёд
                </h2>

                <ul className="home-fifth-block-text-ul">
                  {[
                    "Свои пасеки и пчёлы под заботой",
                    "Мёд из экологически чистых мест",
                    "Прямые поставки - от улья до вашего дома",
                    "Тепло и душа в каждой баночке"
                  ].map((item, index) => (
                    <li key={index} className="home-fifth-block-text-li">
                      <Image 
                        src="https://i.postimg.cc/kgG3kfXt/check.png" 
                        className="home-third-li-icon" 
                        alt="Преимущество" 
                        width={20}
                        height={20}
                        loading="lazy"
                      />
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/catalog" 
                  className="home-fifth-block-text-button"
                  aria-label="Перейти к каталогу продукции"
                >
                  Смотреть продукцию
                </Link>
              </div>

              <div className="home-fifth-block-img">
                <Image 
                  src="https://i.postimg.cc/QdhV1LmV/bee.png" 
                  alt="Пчела собирает нектар" 
                  className="home-fifth-block-3imgs" 
                  width={300}
                  height={250}
                  loading="lazy"
                  quality={80}
                />
              </div>
            </section>

            {/* Секция контактов */}
            <section className="home-seventh" ref={contactsRef} aria-labelledby="contacts-title">
              <div className="home-seventh-map">
                <MapWithNoSSR />
                <div className="home-seventh-form">
                  <div className="home-seventh-form-content">
                    <h3 id="contacts-title" className="contact-h2">Контакты</h3>
                    
                    <a href={`tel:${PHONE_NUMBER}`} className="contact-phone-img phone-contact">
                      <Image 
                        src="https://i.postimg.cc/G2QX3nXs/phone.png" 
                        className='contact-phone-image' 
                        alt="Телефон" 
                        width={24}
                        height={24}
                        loading="lazy"
                      /> 
                      {PHONE_NUMBER}
                    </a>
                    
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${MAP_POSITION[0]},${MAP_POSITION[1]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-phone-img phone-contact"
                    >
                      <Image 
                        src="https://i.postimg.cc/m2Z0H8Mg/location.png" 
                        className='contact-location' 
                        alt="Локация на карте" 
                        width={24}
                        height={24}
                        loading="lazy"
                      />
                      <div className="contact-address">
                        <p>Республика Абхазия, Бзыбское ущелье</p>
                        <p className="contact-address-secondP">(построить маршрут)</p>
                      </div>
                    </a>
                    
                    <a href={`mailto:${EMAIL}`} className="contact-phone-img phone-contact">
                      <Image 
                        src="https://i.postimg.cc/XJwTwPQd/gmail.png" 
                        className='contact-phone-image' 
                        alt="Электронная почта" 
                        width={24}
                        height={24}
                        loading="lazy"
                      />
                      {EMAIL}
                    </a>
                    
                    <div className="contact-links">
                      <a 
                        href={`https://wa.me/${PHONE_NUMBER.replace('+', '')}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Написать в WhatsApp"
                      >
                        <Image 
                          src="https://i.postimg.cc/zBjxDYxh/WA.png" 
                          alt="WhatsApp иконка" 
                          width={32}
                          height={32}
                          loading="lazy"
                        />
                      </a>
                      <a 
                        href="https://instagram.com/alpiskiy_med" 
                        className="instagram-btn" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Перейти в Instagram"
                      >
                        <Image 
                          src="https://i.postimg.cc/VNPcQy7b/Inst.png" 
                          alt="Instagram иконка" 
                          width={32}
                          height={32}
                          loading="lazy"
                        />
                      </a>

                      <button
                        onClick={copyPhoneNumber}
                        className="max-btn"
                        aria-label="Скопировать номер телефона"
                      >
                        <Image
                          src="https://i.postimg.cc/SK9nfNgC/max.png"
                          alt="Иконка копирования"
                          width={32}
                          height={32}
                          loading="lazy"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>

        {/* Мобильное меню */}
        {homeMenuOpen && (
          <div
            className="home-modal-overlay"
            onClick={() => setHomeMenuOpen(false)}
            role="presentation"
          >
            <div
              className="home-modal"
              ref={homeMenuRef}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Мобильное меню"
            >
              <nav>
                <ul className="home-modal-list">
                  <li><Link href="/" onClick={() => setHomeMenuOpen(false)}>Главная</Link></li>
                  <li><Link href="/about" onClick={() => setHomeMenuOpen(false)}>О нас</Link></li>
                  <li><Link href="/catalog" onClick={() => setHomeMenuOpen(false)}>Каталог</Link></li>
                  <li><Link href="/delivery" onClick={() => setHomeMenuOpen(false)}>Доставка и оплата</Link></li>
                  <li>
                    <button onClick={scrollToContacts}>Контактыc</button>
                  </li>
                </ul>
              </nav>

              <button
                className="home-modal-close"
                onClick={() => setHomeMenuOpen(false)}
                aria-label="Закрыть меню"
              >
                Закрыть
              </button>
            </div>
          </div>
        )}
        
        <Footer />
      </div>
    </>
  );
};

export default Home;