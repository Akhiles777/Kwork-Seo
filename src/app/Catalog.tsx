'use client'; 

import { useState, useRef, useEffect, useMemo } from 'react';
import BeeAnimation from '@/components/BeeAnimation';
import '@/styles/catalog.css';
import Pagination from '@/components/Pagination';
import Link from 'next/link';
import products from '@/data/products';
import Footer from '@/components/Footer';

const Catalog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [homeMenuOpen, setHomeMenuOpen] = useState(false);
  const homeMenuRef = useRef<HTMLDivElement | null>(null);
  const [itemsPerPage, setItemsPerPage] = useState<number>(8);

  useEffect(() => {
    const handleResize = () => setItemsPerPage(window.innerWidth < 802 ? 6 : 8);
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = useMemo(() => Math.ceil(products.length / itemsPerPage), [itemsPerPage]);
  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return products.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, itemsPerPage]);

  return (
    <div className='catalog'>
      <BeeAnimation />

      <header className="catalog-header">
        <div className="catalog-header-content">
        <li className="logo-header-li"><Link href="/" className="catalog-logo-header">
          <img src='https://i.postimg.cc/PxtsJWs9/logohoney_1.png' alt="Logo" /></Link></li>
        
          <button className="catalog-burger" onClick={() => setHomeMenuOpen(true)}>
            <img src="https://i.postimg.cc/2jW5tjX8/burger.png" alt="menu" />
          </button>
          <div className="catalog-header-links">
          <li><Link href="/about">О нас</Link></li>
              <li><Link href="/catalog">Каталог</Link></li>
              <li><Link href="/delivery">Доставка и оплата</Link></li>
          </div>
        </div>
        <hr className='header-hr' />
      </header>

      <div className="categoryData-grid">
        {currentItems.map((product, index) => (
          <div className="categoryData-card" key={index}>
            <div
              className="categoryData-image"
              style={{ backgroundImage: `url(${product.img})` }}
            />
            <div className="categoryData-info">
              <h2>{product.title}</h2>
              <p className="subtitle">{product.subtitle}</p>
              <h2>{product.price}</h2>
              <a
                href="https://wa.me/79409948837"
                target="_blank"
                rel="noreferrer noopener"
                className="category-link-button"
              >
                Связаться с продавцом
              </a>
            </div>
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

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
  <Footer className="catalog-footer" />

    </div>
  );
};

export default Catalog;
