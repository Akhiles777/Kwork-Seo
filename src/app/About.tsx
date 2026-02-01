'use client';

import { useState, useRef } from 'react'; import Link from 'next/link'; import dynamic from 'next/dynamic'; import BeeAnimation from '@/components/BeeAnimation'; import '@/styles/about.css'; import Footer from '@/components/Footer';
import Image from 'next/image';

const MapWithNoSSR = dynamic(() => import('@/components/MapComponent'), { ssr: false });

const position: [number, number] = [43.315713, 40.408009];

const About = () => {
  const [homeMenuOpen, setHomeMenuOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const homeMenuRef = useRef<HTMLDivElement | null>(null);

  const images = [
    "https://i.postimg.cc/kg6YQZg1/P7.png",
    "https://i.postimg.cc/G21fhQdh/P2_(2).png",
    "https://i.postimg.cc/htf6CvpY/P1.png",
    "https://i.postimg.cc/ZYHQ4pQx/P4.png",
    "https://i.postimg.cc/W1FYGK15/P5.png"
  ];

  const scrollToBottom = () => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  const handleCloseModalAndScroll = () => { setHomeMenuOpen(false); scrollToBottom(); };

  const getPrevIndex = () => (index - 1 + images.length) % images.length;
  const getNextIndex = () => (index + 1) % images.length;

  return (
    <div className='about'>
      <BeeAnimation />

      <header className="about-header">
        <div className="about-header-content">
          <Link href="/" className="about-logo-header">
            <Image src="https://i.postimg.cc/PxtsJWs9/logohoney_1.png" alt="Logo" />
          </Link>

          <button className="about-burger" onClick={() => setHomeMenuOpen(true)}>
            <Image src="https://i.postimg.cc/2jW5tjX8/burger.png" alt="menu" />
          </button>

          <div className="about-header-links">
            <Link href="/about">О нас</Link>
            <Link href="/catalog">Каталог</Link>
            <Link href="/delivery">Доставка и оплата</Link>
            <button className="about-contact-button" onClick={scrollToBottom}>
              Контакты
            </button>
          </div>
        </div>
        <hr className="header-hr" />
      </header>

      <div className="about-content">
        <div className="about-content-first-block">
        <p className='about-content-first-block-p' ><span className='about-text-span'>Дом мёда</span> - это семейное дело с историей более 37 лет, выросшее из любви к пчёлам и глубокого уважения к природе. Мы не просто собираем мёд — мы бережно сохраняем традиции пчеловодства и передаём их из поколения в поколение, сохраняя натуральность и честность продукта. <br /> <br />Летом, в июле, мы вывозим ульи на альпийские луга Абхазии, расположенные на высоте около 2000-2500 метров над уровнем моря, где произрастают более 300 видов лекарственных растений. Это чисто экологическая зона — в радиусе 600 км нет промышленных объектов, автомобильных трасс и агрессивного земледелия, что позволяет получать мёд самого высокого качества.<br /> <br />Альпийский мёд не имеет аналогов. Высокогорный климат, редкие лекарственные растения и короткий период цветения создают уникальный нектар, который пчёлы превращают в по-настоящему ценный продукт. Такой мед — результат чистой экосистемы, высоты, на которой находятся ульи, и богатства растительности.</p>
        </div>

        <div className="about-content-second-block">
          <div className="carousel">
            <div className="carousel-track">
              <Image src={images[getPrevIndex()]} className="small" alt="" onClick={() => setIndex(getPrevIndex())} />
              <Image src={images[index]} className="big" alt="" onClick={() => setIndex(getNextIndex())} />
              <Image src={images[getNextIndex()]} className="small" alt="" onClick={() => setIndex(getNextIndex())} />
            </div>
          </div>

          <div className="about-content-third-block">
          <p className='about-content-third-block-p'>Наши пчёлы собирают мёд из альпийского лекарственного разнотравья, липы, каштана, акациевого, цитрусового, бортевого и диких горных цветов. Каждый сорт обладает своим характером, ароматом и пользой — вкус напрямую зависит от того, какие травы и цветы цвели в конкретный сезон.</p>
          <p className='about-content-third-block-p'> Мёд — это не просто лакомство.
          Это энергия гор, сила природы и результат терпеливого труда. Он наполняет день теплом, поддерживает здоровье и напоминает о том, что всё настоящее рождается в тишине, уважении и любви к своему делу.</p>
          </div>
        </div>

        <div className="about-content-fifth-block">
          <div className="about-card">
            <Image src="https://i.postimg.cc/xCC0gnNj/about_Card1.png" alt="" className="aboutCard1" />
            <h2>Собственное производство</h2>
            <p>Более 37 лет собираем мёд на альпийских лугах Абхазии, контролируя каждый этап.</p>
          </div>
          <div className="about-card">
            <Image src="https://i.postimg.cc/HLWcDG8h/about_Card2.png" alt="" className="aboutCard1" />
            <h2>Гарантия качества</h2>
            <p>Альпийский мёд с высоты более 2000 м, без примесей и промышленной обработки, где растут более 300 видов лекарственных растений.</p>
          </div>
          <div className="about-card">
            <Image src="https://i.postimg.cc/yxRWXs2d/about_Card3.png" alt="" className="aboutCard1" />
            <h2>Натуральные продукты</h2>
            <p>Только чистый горный мёд с дикорастущих трав, сохраняющий вкус и пользу.</p>
          </div>
        </div>
      </div>

      <section className="about-seventh">
        <MapWithNoSSR />

        <div className="about-seventh-form">
          <div className="about-seventh-form-content">
          <p className="about-contact-h2">Контакты</p>
          <a href="tel:+79409948837" className="contact-phone-img phone-contact">
            <Image src="https://i.postimg.cc/G2QX3nXs/phone.png" className='contact-phone-image' alt="Телефон" loading="lazy" /> +7 (940) 994-88-37
          </a>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-phone-img phone-contact"
          >
            <Image src="https://i.postimg.cc/m2Z0H8Mg/location.png" className='contact-location' alt="Адрес" loading="lazy" />
            <div className="contact-address">
              <p>Республика Абхазия, Бзыбское ущелье</p>
              <p className="about-contact-address-secondP">(построить маршрут)</p>
            </div>
          </a>
          <a href="mailto:arshba27@mail.ru" className="contact-phone-img phone-contact">
            <img src="https://i.postimg.cc/XJwTwPQd/gmail.png" className='contact-phone-image' alt="Электронная почта" loading="lazy" />
            arshba27@mail.ru
          </a>
          <div className="about-contact-links">
                  <a href="https://wa.me/79409948837" target="_blank" rel="noreferrer noopener">
                    <Image src="https://i.postimg.cc/zBjxDYxh/WA.png" alt="WhatsApp" loading="lazy" />
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
  <Image
    src="https://i.postimg.cc/SK9nfNgC/max.png"
    alt="MAX"
    loading="lazy"
  />
</button>
                </div>
                </div>
        </div>
      </section>

      {homeMenuOpen && ( <div className="home-modal-overlay" onClick={() => setHomeMenuOpen(false)}> <div className="home-modal" ref={homeMenuRef} onClick={(e) => e.stopPropagation()}> <ul className="home-modal-list"> <li><Link href="/">Главная</Link></li> <li><Link href="/about">О нас</Link></li> <li><Link href="/catalog">Каталог</Link></li> <li><Link href="/delivery">Доставка и оплата</Link></li> <li><button onClick={handleCloseModalAndScroll}>Контакты</button></li> </ul> <button className="home-modal-close" onClick={() => setHomeMenuOpen(false)}>Закрыть</button> </div> </div> )}

            <Footer />
    </div>
  );
};

export default About;
