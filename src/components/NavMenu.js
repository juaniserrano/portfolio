import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import {
  TiBusinessCard,
  TiDeviceDesktop,
  TiHome,
  TiUser,
  TiWorld,
} from 'react-icons/ti';

const NavMenuStyles = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: var(--dark-bg);
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  svg {
    width: 2.2rem;
  }
  ul {
    max-width: 1200px;
    justify-content: center;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: var(--deep-dark);
      }
    }
    a,
    .language {
      display: flex;
      gap: 1rem;
      font-family: 'RobotoMono Regular';
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--gray-1);
      outline: none;
      text-decoration: none;
      align-items: center;
    }
    .language {
      right: 1rem;
      top: 1rem;
      position: absolute;
    }
    li .active,
    svg .active {
      color: var(--white);
      background-color: #111;
      border-radius: 12px;
      fill: red !important;
    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    * {
      pointer-events: none;
    }
  }
  .navItems .closeNavIcon {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-item {
      display: none;
    }
    .mobile-menu-icon {
      display: block;
    }
    .navItems {
      --top: 1rem;
      transition: 0.5s ease transform;
      background-color: var(--deep-dark);
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
      .language {
        position: relative;
      }
    }
  }
`;

export default function NavMenu() {
  const [t, i18n] = useTranslation('global');
  const [showNav, setShowNav] = useState(false);
  return (
    <NavMenuStyles>
      <div
        className="mobile-menu-icon"
        onClick={() => setShowNav(!showNav)}
        role="button"
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>
      <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
        <div
          className="closeNavIcon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <li>
          <NavLink
            to="/"
            exact
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            {t('navmenu.home')}
            <TiHome />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            {t('navmenu.about')} <TiUser />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            {t('navmenu.projects')} <TiDeviceDesktop />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            {t('navmenu.contact')} <TiBusinessCard />
          </NavLink>
        </li>
        <div className="language">
          {' '}
          {t('navmenu.language')} <TiWorld />
          <button type="button" onClick={() => i18n.changeLanguage('en')}>
            ENG
          </button>
          <button type="button" onClick={() => i18n.changeLanguage('es')}>
            ESP
          </button>
        </div>
      </ul>
    </NavMenuStyles>
  );
}
