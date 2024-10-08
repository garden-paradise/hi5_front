import React from 'react';
import SearchInput from '../../../reusable_components/SearchInput/SearchInput';
import style from '../AboutCompany/AboutCompany.module.css';
import caret from '../../../images/main/partners/CaretRight.svg';
import { NavLink } from 'react-router-dom';
import youtube from '../../../images/main//About/youtube.svg';
import tic_toc from '../../../images/main//About/Social.svg';
import insta from '../../../images/main//About/Inst.svg';
import facebook from '../../../images/main//About/Facebook.svg';
import vk from '../../../images/main//About/vk.svg';
import Telegram from '../../../images/main//About/TelegramY.svg';

const AboutCompany = (props) => {
  return (
    <section className={style.partners}>
      <div className={style.partners_container}>
        <div className={style.partners_div}>
          {/* <SearchInput /> */}
          <div className={style.partners_divs}>
            <div className={style.partners_div1}>
              <div className={style.partners_info_block}>
                <div className={style.partners_info}>
                  <NavLink to='/benefits' className={style.partners_info_link}>
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
                  <NavLink to='/comand' className={style.partners_info_link}>
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
                  <NavLink to='/events' className={style.partners_info_link}>
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
                  <NavLink to='/faq' className={style.partners_info_link}>
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
                  г. Москва, Пресненская набережная, 6 стр.2
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
                      <img className={style.footer_link} src={vk} alt='vkImg' />
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
                      href={'https://www.facebook.com/hi5russia'}
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
  );
};

export default AboutCompany;
