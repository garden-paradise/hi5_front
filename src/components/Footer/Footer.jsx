import React, { useEffect, useState } from 'react';
import style from '../Footer/Footer.module.css';
import logo from '../../images/footer/hi5_logo.svg';
import youtube from '../../images/footer/youtube.svg';
import youtubeBlack from '../../images/footer/youtubeBlack.svg';
import tic_toc from '../../images/footer/Tic-Tok.svg';
import insta from '../../images/footer/Insta.svg';
import facebook from '../../images/footer/Facebook.svg';
import Telegram from '../../images/footer/TelegramW.svg';
import vk from '../../images/footer/vk.svg';
import vkBlack from '../../images/footer/vkBlack.svg';
import argoSoft from '../../images/footer/argoSoft.svg';
import { Field, reduxForm, reset } from 'redux-form';
import { Input } from '../../utils/validators/Forms/ValidationForms';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';
import axios from 'axios';
import { email, required } from '../../utils/validators/validators';

const afterSubmit = (result, dispatch) => dispatch(reset('footer'));

const Footer = ({ handleSubmit }) => {
  const [url, setUrl] = useState(false);
  const [btmBtn, setBtmBtn] = useState(false);
  const handleSend = async ({ myName, myEmail, myNumber, myMessage }) => {
    let myTitle = 'Подписка';
    try {
      await axios.post(
        'https://h5backend-338216.ew.r.appspot.com/mails/send_mail',
        {
          myTitle,
          myName,
          myEmail,
          myNumber,
          myMessage,
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  let location = useLocation();
  useEffect(() => {
    location.pathname === '/LUX' ? setUrl(true) : setUrl(false);
  }, [location]);
  return (
    <footer className={`${style.footer} ${url && style.footer_lux}`}>
      <div className={style.footer_container}>
        <section className={style.footer_info}>
          <figure>
            <NavLink to='/'>
              <img className={style.footer_info_img} src={logo} alt='logoImg' />
            </NavLink>
          </figure>
          <div className={style.info_div}>
            <div className={style.footer_info_block}>
              <NavLink to='/about' className={style.footer_nav_link}>
                <h1 className={style.footer_info_title}>О компании</h1>
              </NavLink>
              <NavLink to='/comand' className={style.footer_nav_link}>
                <div className={style.footer_info_link}>Команда</div>
              </NavLink>
              <NavLink to='/benefits' className={style.footer_nav_link}>
                <div className={style.footer_info_link}>Почему H5?</div>
              </NavLink>

              <NavLink to='/FAQ' className={style.footer_nav_link}>
                <div className={style.footer_info_link}>F.A.Q.</div>
              </NavLink>
            </div>

            <div className={style.footer_info_block}>
              <NavLink to='/partners' className={style.footer_nav_link}>
                <h1 className={style.footer_info_title}>Партнерам</h1>
              </NavLink>
              <NavLink to='/documentation' className={style.footer_nav_link}>
                <div className={style.footer_info_link}>Документы</div>
              </NavLink>
              <NavLink to='/distributor' className={style.footer_nav_link}>
                <div className={style.footer_info_link}>
                  Региональные представители
                </div>
              </NavLink>
              <NavLink to='/events' className={style.footer_nav_link}>
                <div className={style.footer_info_link}>Мероприятия</div>
              </NavLink>
            </div>
            <div className={style.footer_info_block}>
              <NavLink to='/production' className={style.footer_nav_link}>
                <h1 className={style.footer_info_title}>Продукция</h1>
              </NavLink>
              <NavLink to='/production' className={style.footer_nav_link}>
                <div className={style.footer_info_link}>Каталог</div>
              </NavLink>
            </div>
          </div>
        </section>
        <hr className={style.footer_hr} />
        <section className={style.footer_contacts}>
          <div className={style.footer_contacts_div1}>
            <h1
              className={`${style.footer_contacts_title} ${style.footer_title_marg}`}
            >
              Контакты
            </h1>
            <address className={style.footer_contacts_add}>
              г. Москва, Пресненская набережная, 6 стр. 2
            </address>
          </div>
          <div className={style.footer_contacts_div2}>
            <div>
              <figure className={style.footer_contacts_link}>
                <a
                  href={'https://vk.com/h5russia'}
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    className={style.footer_link}
                    src={url ? vkBlack : vk}
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
                    src={url ? youtubeBlack : youtube}
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
            <div className={style.footer_contacts_num_div}>
              <a
                className={`${style.footer_contacts_num} ${style.footer_title_marg}`}
                href='tel: 84955329531'
              >
                8 (495) 532 95 31
              </a>
              <a
                className={`${style.footer_contacts_num} ${style.footer_title_marg} ${style.footer_contacts_num_top}`}
                href='tel: 84955329521'
              >
                8 (495) 532 95 21
              </a>
            </div>
          </div>
        </section>
        <hr className={style.footer_hr} />

        <section className={style.footer_follow}>
          <h1 className={style.footer_follow_title}>Будь в курсе!</h1>
          <span className={style.footer_follow_subtitle}>
            Подпишись на рассылку новостей, акций и новых коллекций
          </span>
          <form className={style.footer_form}>
            <Field
              className={style.footer_form_input}
              name='myEmail'
              component={Input}
              validate={[required, email]}
              type='email'
              required
            />
            <div
              className={
                btmBtn ? style.footer_form_btn_btm : style.footer_form_btn
              }
              type='submit'
              onClick={handleSubmit((data) => handleSend(data))}
            >
              Подписаться
            </div>
          </form>
        </section>

        <section className={style.footer_argo}>
          <div className={style.footer_argo_argo}>
            <a
              href='https://argosoftworks.com/'
              target='_blank'
              rel='noreferrer'
            >
              <img
                className={style.footer_argo_img}
                src={argoSoft}
                alt='argoLogoImg'
              />
            </a>
            <span className={style.footer_argo_title}>
              Сайт создан компанией{' '}
              <a
                href='https://argosoftworks.com/'
                target='_blank'
                rel='noreferrer'
                className={style.footer_argo_title_a}
              >
                <b>ArgoSoftWorks</b>
              </a>
            </span>
          </div>
          <div  className={style.footer_personal_policy_div}>
            <NavLink
              className={style.footer_personal_policy}
              to={'/personal_policy'}
            >
              Согласие на обработку персональных данныx
            </NavLink>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default reduxForm({
  form: 'footer',
  onSubmitSuccess: afterSubmit,
})(Footer);
