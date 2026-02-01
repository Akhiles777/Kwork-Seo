'use client';

import { useState, useRef, useEffect } from 'react';
import BeeAnimation from '@/components/BeeAnimation';
import '@/styles/delivery.css';
import Link from 'next/link';
import Footer from '@/components/Footer';

const position: [number, number] = [43.315713, 40.408009];

const Delivery = () => {
  const [homeMenuOpen, setHomeMenuOpen] = useState(false);
  const homeMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.title = "Доставка и оплата | Дом мёда";

    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "Узнайте условия доставки и самовывоза натурального мёда из Абхазии. Быстрая и безопасная доставка по России. Оплата при получении.";
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement("meta");
    metaKeywords.name = "keywords";
    metaKeywords.content =
      "доставка мёда, оплата мёда, доставка из Абхазии, мёд из Абхазии, горный мёд, самовывоз мёда, Дом мёда Абхазии";
    document.head.appendChild(metaKeywords);

    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
    };
  }, []);

  return (
    <div className='delivery'>
      <BeeAnimation />

      <header className="delivery-header">
        <div className="delivery-header-content">

        <li className="logo-header-li"><Link href="/"  className="delivery-logo-header">
        <img src='https://i.postimg.cc/PxtsJWs9/logohoney_1.png' alt="Logo" /></Link></li>

          <button className="delivery-burger" onClick={() => setHomeMenuOpen(true)}>
            <img src="https://i.postimg.cc/2jW5tjX8/burger.png" alt="menu" />
          </button>
          <div className="delivery-header-links">
          <li><Link href="/about">О нас</Link></li>
              <li><Link href="/catalog">Каталог</Link></li>
              <li><Link href="/delivery">Доставка и оплата</Link></li>
          </div>
        </div>
      </header>

      <section className="delivery-fourth-block" style={{ backgroundImage: `url('https://i.postimg.cc/rpt6ps48/delivery_Photo.png')` }} >
        <div className="delivery-story-content">
          <h4 className="text-gray-600 mb-6" data-aos="fade-up">Доставка</h4>
          <h3 className="text-2xl font-semibold mb-4" data-aos="fade-up">
            Быстрая доставка и возможность самовывоза.
          </h3>
          <p className="text-gray-600 mb-6" data-aos="fade-up">
            Мы тщательно упаковываем каждую баночку, чтобы сохранить вкус, аромат и тепло, с которым она была создана.
          </p>
        </div>
      </section>

      <div className="beeDelivery">
        <img src="https://i.postimg.cc/VNN6Zj3y/bee_Delivery.png" alt="" />
      </div>

      <div className="delivery-info">
        <div className="delivery-info-up">
          <img src="https://i.postimg.cc/kgG3kfXt/check.png" alt="" />
          <div className="delivery-info-h2-p">
            <h2>Отправка Почтой России</h2>
            <p className='delivery-info-p'>
              По России — транспортной компанией СДЭК или Почтой России.  
              Для уточнения деталей доставки
              <a
                href="https://wa.me/794029382983"
                target="_blank"
                rel="noopener noreferrer"
                className="phone-contact"
              >
                написать в WhatsApp <img src="https://i.postimg.cc/nL96pJqk/Arrow-11.png" alt="arrow" className='arrow-address'/>
              </a>
            </p>
          </div>
        </div>

        <div className="delivery-info-buttom">
          <img src="https://i.postimg.cc/kgG3kfXt/check.png" alt="" />
          <div className="delivery-info-h2-p">
            <h2>Самовывоз</h2>
            <p className='delivery-info-p'>
              Забрать продукцию можно в Доме Мёда — Республика Абхазия, Бзыбское ущелье.
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="phone-contact"
              >
                Построить маршрут <img src="https://i.postimg.cc/nL96pJqk/Arrow-11.png" alt="arrow" className='arrow-address' />
              </a>
            </p>
          </div>
        </div>
      </div>

      {homeMenuOpen && (
        <div className="home-modal-overlay" onClick={() => setHomeMenuOpen(false)}>
          <div className="home-modal" ref={homeMenuRef} onClick={(e) => e.stopPropagation()}>
            <ul className="home-modal-list">
            <li><Link href="/">Главная</Link></li>
              <li><Link href="/about">О нас</Link></li>
              <li><Link href="/catalog">Каталог</Link></li>
              <li><Link href="/delivery">Доставка и оплата</Link></li>
            </ul>
            <button className="home-modal-close" onClick={() => setHomeMenuOpen(false)}>
              Закрыть
            </button>
          </div>
        </div>
      )}
      <Footer className='delivery-footer'/>
    </div>
  );
};

export default Delivery;
