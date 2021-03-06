import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo2.png';
// import Search from './Search';
import { ReactComponent as Menu } from '../assets/static/menu.svg';
import { ReactComponent as Download } from '../assets/static/download.svg';
import cvAFG from '../assets/static/CV_AFG.pdf';

const Header = (props) => {
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='Logo' />
      <nav>
        {/* <Search isHome /> */}
        <div className='header__menu--download'>
          <a href={cvAFG} download='cvAFG'>
            <Download className='header__menu--downloadImg' />
          </a>
        </div>
        <div className='header__menu'>
          <div className='header__menu--profile'>
            <Menu className='header__menu--profileImg' />
          </div>
          <ul>
            <li>
              <a href='#about'>
                About
              </a>
            </li>
            <li>
              <a href='#skills'>
                Technical Skills
              </a>
            </li>
            <li>
              <a href='#portfolio'>
                Work
              </a>
            </li>
            <li>
              <a href='#certificates'>
                Certificates
              </a>
            </li>
            <li>
              <a href='#contact'>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Contact me!
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
