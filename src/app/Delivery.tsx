'use client';

import { useState, useRef, useEffect, useCallback, lazy, Suspense, memo } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';

// 1. Ленивая загрузка ВСЕХ компонентов
const BeeAnimation = dynamic(() => import('@/components/BeeAnimation'), {
  loading: () => <div className="bee-skeleton" />,
  ssr: false
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="footer-skeleton" />,
  ssr: true
});

// 2. Мемоизированные константы (не пересоздаются при рендере)
const MAP_POSITION: [number, number] = [43.315713, 40.408009];
const WHATSAPP_LINK = "https://wa.me/794029382983";

// 3. Типы для TypeScript
interface DeliveryOption {
  id: number;
  title: string;
  description: string;
  link: string;
  linkText: string;
  isMap?: boolean;
}

interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

// 4. Мемоизированный компонент для DeliveryInfo (оптимизация перерисовок)
const DeliveryInfoItem = memo(({ 
  title, 
  description, 
  link, 
  linkText, 
  isMap = false 
}: DeliveryOption) => {
  const linkHref = isMap 
    ? `https://www.google.com/maps/dir/?api=1&destination=${MAP_POSITION[0]},${MAP_POSITION[1]}`
    : link;

  return (
    <div className="delivery-info-item">
      <Image
        src="https://i.postimg.cc/kgG3kfXt/check.png"
        alt="Галочка подтверждения"
        width={24}
        height={24}
        loading="lazy"
        quality={75}
      />
      <div className="delivery-info-content">
        <h3>{title}</h3>
        <p>
          {description}
          {' '}
          <a
            href={linkHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-link"
          >
            {linkText}
            <Image
              src="https://i.postimg.cc/nL96pJqk/Arrow-11.png"
              alt="Стрелка"
              width={16}
              height={16}
              className="arrow-icon"
              loading="lazy"
            />
          </a>
        </p>
      </div>
    </div>
  );
});

DeliveryInfoItem.displayName = 'DeliveryInfoItem';

const Delivery = () => {
  // 5. Оптимизированные состояния
  const [homeMenuOpen, setHomeMenuOpen] = useState(false);
  const homeMenuRef = useRef<HTMLDivElement>(null);

  // 6. useCallback для всех обработчиков
  const toggleMenu = useCallback(() => {
    setHomeMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setHomeMenuOpen(false);
  }, []);

  // 7. Оптимизированный useEffect с requestIdleCallback
  useEffect(() => {
    // Критичные мета-теги
    document.title = "Доставка и оплата | Дом мёда Абхазии";

    const metaTags = [
      { name: 'description', content: 'Условия доставки и оплаты натурального абхазского мёда. Быстрая доставка по России.' },
      { name: 'keywords', content: 'доставка мёда, оплата, абхазский мёд, самовывоз' },
      { property: 'og:title', content: 'Доставка мёда из Абхазии' }
    ];

    const createdElements: HTMLMetaElement[] = [];

    // Используем requestIdleCallback для не критичных операций
    const idleId = requestIdleCallback(() => {
      metaTags.forEach(tag => {
        const meta = document.createElement('meta');
        if ('name' in tag) meta.name = tag.name;
        if ('property' in tag) meta.setAttribute('property', tag.property);
        meta.content = tag.content;
        document.head.appendChild(meta);
        createdElements.push(meta);
      });
    });

    // 8. Оптимизированный обработчик клика вне меню
    const handleClickOutside = useCallback((event: MouseEvent) => {
      if (homeMenuRef.current && !homeMenuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    }, [closeMenu]);

    // Отложенная подписка на событие
    const timeoutId = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 100);

    return () => {
      cancelIdleCallback(idleId);
      clearTimeout(timeoutId);
      document.removeEventListener('mousedown', handleClickOutside);
      createdElements.forEach(el => document.head.removeChild(el));
    };
  }, [closeMenu]);

  // 9. Мемоизированные данные для рендеринга
  const deliveryOptions = useCallback((): DeliveryOption[] => [
    {
      id: 1,
      title: "Отправка Почтой России",
      description: "По России — транспортной компанией СДЭК или Почтой России. Для уточнения деталей доставки",
      link: WHATSAPP_LINK,
      linkText: "написать в WhatsApp"
    },
    {
      id: 2,
      title: "Самовывоз",
      description: "Забрать продукцию можно в Доме Мёда — Республика Абхазия, Бзыбское ущелье.",
      link: "",
      linkText: "Построить маршрут",
      isMap: true
    }
  ], []);

  // 10. Оптимизированный рендеринг навигации с правильной типизацией
  const navItems = useCallback((): NavItem[] => [
    { label: "О нас", href: "/about" },
    { label: "Каталог", href: "/catalog" },
    { label: "Доставка и оплата", href: "/delivery", isActive: true }
  ], []);

  const modalNavItems = useCallback((): NavItem[] => [
    { label: "Главная", href: "/" },
    ...navItems()
  ], [navItems]);

  return (
    <div className='delivery'>
      {/* 11. Suspense для ленивых компонентов */}
      <Suspense fallback={<div className="bee-skeleton" />}>
        <BeeAnimation />
      </Suspense>

      {/* 12. Оптимизированный хедер */}
      <header className="delivery-header">
        <div className="delivery-header-content">
          <Link 
            href="/" 
            className="delivery-logo-header"
            prefetch={false}
            aria-label="На главную"
          >
            <Image
              src='https://i.postimg.cc/PxtsJWs9/logohoney_1.png'
              alt="Логотип Дом мёда Абхазии"
              width={160}
              height={53}
              priority={true}
              quality={85}
              fetchPriority="high"
            />
          </Link>

          <button 
            className="delivery-burger" 
            onClick={toggleMenu}
            aria-label="Открыть меню"
            aria-expanded={homeMenuOpen}
          >
            <Image
              src="https://i.postimg.cc/2jW5tjX8/burger.png"
              alt="Иконка меню"
              width={24}
              height={24}
              loading="eager"
              quality={75}
            />
          </button>

          <nav className="delivery-header-links" aria-label="Основная навигация">
            {navItems().map((item) => (
              <Link
                key={item.href} // href всегда string, поэтому key безопасен
                href={item.href}
                className={item.isActive ? 'active' : ''}
                prefetch={false}
                aria-current={item.isActive ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* 13. Основной контент */}
      <main>
        {/* Герой-секция */}
        <section 
          className="delivery-fourth-block" 
          role="banner"
          aria-label="Информация о доставке"
        >
          <div className="delivery-story-content">
            <h4 className="section-subtitle" data-aos="fade-up">Доставка</h4>
            <h2 className="section-title" data-aos="fade-up">
              Быстрая доставка и возможность самовывоза
            </h2>
            <p className="section-description" data-aos="fade-up">
              Мы тщательно упаковываем каждую баночку, чтобы сохранить вкус, аромат и тепло, 
              с которым она была создана.
            </p>
          </div>
        </section>

        {/* Декоративный элемент */}
        <div className="beeDelivery" aria-hidden="true">
          <Image
            src="https://i.postimg.cc/VNN6Zj3y/bee_Delivery.png"
            alt="Декоративное изображение пчелы"
            width={120}
            height={120}
            loading="lazy"
            quality={70}
          />
        </div>

        {/* Информация о доставке */}
        <section className="delivery-info" aria-labelledby="delivery-options">
          <h2 id="delivery-options" className="visually-hidden">Способы доставки</h2>
          {deliveryOptions().map((option) => (
            <DeliveryInfoItem
              key={option.id}
              {...option}
            />
          ))}
        </section>
      </main>

      {/* 14. Мобильное меню с оптимизацией */}
      {homeMenuOpen && (
        <div 
          className="delivery-modal-overlay" 
          onClick={closeMenu}
          role="presentation"
        >
          <div 
            className="delivery-modal" 
            ref={homeMenuRef}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Меню навигации"
          >
            <nav>
              <ul className="delivery-modal-list">
                {modalNavItems().map((item) => (
                  <li key={`modal-${item.href}`}> {/* Используем префикс для key */}
                    <Link 
                      href={item.href} 
                      onClick={closeMenu}
                      aria-current={item.isActive ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <button
              className="delivery-modal-close"
              onClick={closeMenu}
              aria-label="Закрыть меню"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}

      {/* 15. Футер с ленивой загрузкой */}
      <Suspense fallback={<div className="footer-skeleton" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

// 16. Оптимизация экспорта
export default memo(Delivery);