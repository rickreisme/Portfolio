import React, { useRef, useEffect } from 'react';
import { Link } from "react-router-dom";

import '../../assets/styles/header.scss';
import '../../assets/styles/mobile-menu.scss';
import { IoLanguage } from "react-icons/io5";

const MobileNavbarEnglish: React.FC = () => {
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const paginasRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClick = () => {
      if (paginasRef.current && mobileMenuRef.current) {
        paginasRef.current.classList.toggle('active');
        mobileMenuRef.current.classList.toggle('active');
        animateLinks();
      }
    };

    const animateLinks = () => {
      if (paginasRef.current) {
        const navLinks = paginasRef.current.querySelectorAll('li');
        navLinks.forEach((link, index) => {
          link.style.animation
            ? (link.style.animation = '')
            : (link.style.animation = `paginasFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
      }
    };

    if (mobileMenuRef.current) {
      mobileMenuRef.current.addEventListener('click', handleClick);
    }

    const navLinks = paginasRef.current?.querySelectorAll('li');
    navLinks?.forEach((link) => {
      link.addEventListener('click', handleClick);
    });

    return () => {
      if (mobileMenuRef.current) {
        mobileMenuRef.current.removeEventListener('click', handleClick);
      }
      navLinks?.forEach((link) => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <nav className='menu'>
      <div className='content'>
        <a href='#intro' id='logo'>
          <span className='tag1'>&lt; </span>
          <span className="text" id='initial-text'>rr</span>
          <span className="hidden-text" id='final-text'>rickreisme</span>
          <span className='tag2' id="close-tag">/&gt; </span>
        </a>

        <div className='mobile-menu' ref={mobileMenuRef}>
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
        </div>

        <ul className='paginas' ref={paginasRef}>
          <li>
            <a href='#sobre' id='link-pags'>
              <span>&lt;about me/&gt;</span>
            </a>
          </li>

          <li>
            <a href='#experiencia' id='link-pags'>
              <span>&lt;skills/&gt;</span>
            </a>
          </li>

          <li>
            <a href='#meus-projetos' id='link-pags'>
              <span>&lt;projects/&gt;</span>
            </a>
          </li>

          <li>
            <a href='#contato' id='link-pags'>
              <span>&lt;contact/&gt;</span>
            </a>
          </li>

          <li>
            <Link to="/" >
              <a className='btn-language'>
                <div className='div-btn-language' id='link-pags'>
                  <span>Pt-br <IoLanguage className='icon-language' /></span>
                </div>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavbarEnglish;