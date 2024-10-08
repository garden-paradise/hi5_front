import React, { useState, useEffect, useRef } from 'react';
import style from '../Header/Header.module.css';
import logo from '../../images/header/logo.svg';
import caretDown from '../../images/header/CaretDown.svg';
import handbag from '../../images/header/Handbag.svg';
import menuB from '../../images/header/menu_32px.png';
import { NavLink } from 'react-router-dom';
import Radium, { StyleRoot } from 'radium';
import { fadeIn } from 'react-animations';
import caret from '../../images/main/home/CaretRight.svg';
import SearchInput from '../../reusable_components/SearchInput/SearchInput';
import youtube from '../../images/main//About/youtube.svg';
import tic_toc from '../../images/main//About/Social.svg';
import insta from '../../images/main//About/Inst.svg';
import facebook from '../../images/main//About/Facebook.svg';
import vk from '../../images/main//About/vk.svg';
import Telegram from '../../images/main//About/TelegramY.svg';
import { useLocation } from 'react-router';

const styles = {
  fadeIn: {
    animation: 'x 1.2s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
  },
};

const Header = ({ selectedItems }) => {
  let location = useLocation();
  const rootEl = useRef(null);
  const [editMode, setEditMode] = useState(true);
  const [aboutMenu, setAboutMenu] = useState(true);
  const [partnersMenu, setPartnersMenu] = useState(true);
  const [linkMenu, setLinkMenu] = useState(true);
  const [blockMenu, setBlockMenu] = useState(true);
  const [selectedItemsC, setSelectedItems] = useState(selectedItems);
  useEffect(() => {
    const selectedItemsLocal = localStorage.getItem('selectedItems');
    setSelectedItems(selectedItemsLocal);
  }, [selectedItems]);

  useEffect(() => {
    if (window.innerWidth < 900) {
      const onClickAbout = (e) =>
        rootEl.current.contains(e.target) || setEditMode(true);
      document.addEventListener('click', onClickAbout);

      setLinkMenu(false);
      setBlockMenu(false);
    }
  }, [window.innerWidth]);

  let openBurger = () => {
    let boolean = !editMode;
    setEditMode(boolean);
  };

  let closeMenu = () => {
    setPartnersMenu(true);
    setAboutMenu(true);
  };

  return (
    <StyleRoot className={style.parents}>
      <section
        onMouseEnter={() => {
          blockMenu && setPartnersMenu(false);
        }}
        onMouseLeave={() => {
          blockMenu && setPartnersMenu(true);
        }}
        style={styles.fadeIn}
        className={`${partnersMenu ? style.partners_none : style.partners}`}
      >
        <div className={style.partners_container}>
          <div className={style.partners_div}>
            {/* <SearchInput /> */}
            <div className={style.partners_info_block}>
              <div className={style.partners_info}>
                <NavLink
                  onClick={closeMenu}
                  to='/benefits'
                  className={style.partners_info_link}
                >
                  <h2 className={style.partners_info_title}>Почему H5?</h2>
                  <img src={caret} alt='caretImg' />
                </NavLink>
              </div>
              <p className={style.partners_info_sibtitle}>
                Многие спрашивают, чем так крут H5? Мы не показываем, а
                доказываем
              </p>
            </div>
            <div className={style.partners_info_block}>
              <div className={style.partners_info}>
                <NavLink
                  onClick={closeMenu}
                  to='/documentation'
                  className={style.partners_info_link}
                >
                  <h2 className={style.partners_info_title}>Документация</h2>
                  <img src={caret} alt='caretImg' />
                </NavLink>
              </div>
              <p className={style.partners_info_sibtitle}>
                Наша продукция сертифицирована
              </p>
            </div>
            <div className={style.partners_info_block}>
              <div className={style.partners_info}>
                <NavLink
                  onClick={closeMenu}
                  to='/distributor'
                  className={style.partners_info_link}
                >
                  <h2 className={style.partners_info_title}>
                    Региональные представители
                  </h2>
                  <img src={caret} alt='caretImg' />
                </NavLink>
              </div>
              <p className={style.partners_info_sibtitle}>
                Наши партнеры по всей России
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        onMouseEnter={() => {
          blockMenu && setAboutMenu(false);
        }}
        onMouseLeave={() => {
          blockMenu && setAboutMenu(true);
        }}
        style={styles.fadeIn}
        className={`${aboutMenu ? style.aboutMenu_false : style.aboutMenu}`}
      >
        <div className={style.partners_container}>
          <div className={style.partners_div}>
            {/* <SearchInput /> */}
            <div className={style.partners_divs}>
              <div className={style.partners_div1}>
                <div className={style.partners_info_block}>
                  <div className={style.partners_info}>
                    <NavLink
                      onClick={closeMenu}
                      to='/benefits'
                      className={style.partners_info_link}
                    >
                      <h2 className={style.partners_info_title}>Почему H5?</h2>
                      <img
                        className={style.partners_caret}
                        src={caret}
                        alt='caretImg'
                      />
                    </NavLink>
                  </div>
                  <p className={style.partners_info_sibtitle}>
                    Многие спрашивают, чем так крут H5? Мы не показываем, а
                    доказываем
                  </p>
                </div>
                <div className={style.partners_info_block}>
                  <div className={style.partners_info}>
                    <NavLink
                      onClick={closeMenu}
                      to='/comand'
                      className={style.partners_info_link}
                    >
                      <h2 className={style.partners_info_title}>Команда</h2>
                      <img
                        className={style.partners_caret}
                        src={caret}
                        alt='caretImg'
                      />
                    </NavLink>
                  </div>
                  <p className={style.partners_info_sibtitle}>
                    Люди, которые создают для вас лучший продукт на рынке
                  </p>
                </div>
                <div className={style.partners_info_block}>
                  <div className={style.partners_info}>
                    <NavLink
                      onClick={closeMenu}
                      to='/events'
                      className={style.partners_info_link}
                    >
                      <h2 className={style.partners_info_title}>Мероприятия</h2>
                      <img
                        className={style.partners_caret}
                        src={caret}
                        alt='caretImg'
                      />
                    </NavLink>
                  </div>
                  <p className={style.partners_info_sibtitle}>
                    Где самые кайфовые тусовки, там H5!
                  </p>
                </div>
                <div className={style.partners_info_block}>
                  <div className={style.partners_info}>
                    <NavLink
                      onClick={closeMenu}
                      to='/faq'
                      className={style.partners_info_link}
                    >
                      <h2 className={style.partners_info_title}>F.A.Q.</h2>
                      <img
                        className={style.partners_caret}
                        src={caret}
                        alt='caretImg'
                      />
                    </NavLink>
                  </div>
                  <p className={style.partners_info_sibtitle}>
                    Всё, что вы часто спрашиваете у нас, и даже больше
                  </p>
                </div>
              </div>
              <div className={style.partners_div2}>
                <div className={style.partners_info_cont}>
                  <p className={style.partners_cont_title}>Позвонить нам:</p>
                  <div className={style.partners_num_divs}>
                    <a className={style.partners_num} href='tel: 84955329531'>
                      8 (495) 532 95 31
                    </a>
                    <a className={style.partners_num} href='tel: 84955329521'>
                      8 (495) 532 95 21
                    </a>
                  </div>
                </div>
                <div className={style.partners_info_cont}>
                  <p className={style.partners_cont_title}>Наш адрес:</p>
                  <p className={style.partners_info_cont_add}>
                    г.Москва, Пресненская набережная, 6 стр.2
                  </p>
                </div>
                <div className={style.partners_info_cont}>
                  <p className={style.partners_cont_title}>
                    Найти нас в социальных сетях:
                  </p>
                  <div>
                    <figure className={style.partners_info_contacts_link}>
                      <a
                        href={'https://vk.com/h5russia'}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <img
                          className={style.footer_link}
                          src={vk}
                          alt='vkImg'
                        />
                      </a>
                      <a
                        href={
                          'https://www.youtube.com/channel/UCjIo8UTH091bDevDamVPunw'
                        }
                        target='_blank'
                        rel='noreferrer'
                      >
                        <img
                          className={style.footer_link}
                          src={youtube}
                          alt='youtubeImg'
                        />
                      </a>
                      <a
                        href={'https://www.tiktok.com/@h5russia'}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <img
                          className={style.footer_link}
                          src={tic_toc}
                          alt='tic_tocImg'
                        />
                      </a>
                      <a
                        href={'https://www.instagram.com/h5russia/'}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <img
                          className={style.footer_link}
                          src={insta}
                          alt='instaImg'
                        />
                      </a>
                      <a
                        href={'https://www.facebook.com/hi5russia '}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <img
                          className={style.footer_link}
                          src={facebook}
                          alt='facebookImg'
                        />
                      </a>
                      <a
                        href={'https://t.me/h5_Store_bot'}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <img
                          className={style.footer_link}
                          src={Telegram}
                          alt='TelegramImg'
                        />
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <header className={style.header}>
        <div className={style.header_wrapper}>
          <NavLink to={'/'}>
            <img
              onClick={closeMenu}
              width='96'
              height='58'
              src={logo}
              className={style.header_logo}
              alt='logoHi5Images'
            />
          </NavLink>

          <nav
            className={editMode ? style.header_navs : style.header_navs_false}
            onClick={openBurger}
          >
            <ul className={style.header_nav}>
              <li className={style.header_nav_li}>
                <NavLink
                  onClick={closeMenu}
                  to='/production'
                  className={style.header_nav_link}
                  activeClassName={style.activeLink}
                >
                  Продукция
                </NavLink>
              </li>
              <li className={style.header_nav_li}>
                <NavLink
                  onClick={closeMenu}
                  to='/reviews'
                  className={style.header_nav_link}
                  activeClassName={style.activeLink}
                >
                  Обзоры
                </NavLink>
              </li>
              <li
                onMouseEnter={() => {
                  blockMenu && setPartnersMenu(false);
                }}
                onMouseLeave={() => {
                  blockMenu && setPartnersMenu(true);
                }}
                className={style.header_nav_li}
              >
                <NavLink
                  to={`${!linkMenu ? '/partners' : location.pathname}`}
                  className={style.header_nav_link}
                  activeClassName={style.activeLink}
                >
                  <div className={style.header_nav_li_div}>
                    Партнерам
                    <img
                      className={style.header_nav_coret}
                      src={caretDown}
                      alt='caretDown'
                    />
                  </div>
                </NavLink>
              </li>
              <li
                onMouseEnter={() => {
                  blockMenu && setAboutMenu(false);
                }}
                onMouseLeave={() => {
                  blockMenu && setAboutMenu(true);
                }}
                className={style.header_nav_li}
              >
                <NavLink
                  to={`${!linkMenu ? '/about' : location.pathname}`}
                  className={style.header_nav_link}
                  activeClassName={style.activeLink}
                >
                  <div className={style.header_nav_li_div}>
                    О компании
                    <img
                      className={style.header_nav_coret}
                      src={caretDown}
                      alt='caretDown'
                    />
                  </div>
                </NavLink>
              </li>
              <li className={style.header_nav_li}>
                <NavLink
                  onClick={closeMenu}
                  to='/verification'
                  className={style.header_nav_link}
                  activeClassName={style.activeLink}
                >
                  <div className={style.header_nav_li_div}>
                    Проверка подлинности
                  </div>
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className={style.header_block_right}>
            <NavLink to={'/basket'} className={style.header_div}>
              <img
                onClick={closeMenu}
                src={handbag}
                className={`${style.header_logo} ${style.header_logo_bag}`}
                alt='logoHi5Images'
              />
              {selectedItemsC > 0 && (
                <div className={style.header_length}>{selectedItemsC}</div>
              )}
            </NavLink>
            <img
              ref={rootEl}
              onClick={openBurger}
              height='40'
              src={menuB}
              className={style.header_burger}
              alt='logoHi5Images'
            />
          </div>
        </div>
      </header>
    </StyleRoot>
  );
};

export default Header;
