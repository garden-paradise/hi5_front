import React, { useState } from 'react';
import style from '../Home/Home.module.css';
import Danger from '../../../reusable_components/Danger/Danger';
import benefits from '../../../images/main/home/benefits.png';
import lux from '../../../images/main/home/luxx.png';
import ellipse from '../../../images/main/home/Ellipse.png';
import ArrowO from '../../../images/main/home/Arrow_orange.svg';
import ArrowW from '../../../images/main/home/Arrow_white.svg';
import { NavLink } from 'react-router-dom';
import Product from '../../../reusable_components/Product/Product';
import BeForm from '../../../reusable_components/BeForm/BeForm';
import Slider from 'react-slick';

const Home = ({ productHome, selectedItemsAC }) => {
  const [editMode, setEditMode] = useState(true);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
    <section className={style.home}>
      <section className={style.home_isFuture_section}>
        <div className={style.uni_container}>
          <div className={style.home_isFuture}>
            <div className={style.home_isFuture_block1}>
              <h1 className={style.home_isFuture_title}>
                <p>Будущее </p>
                <p>уже здесь</p>
              </h1>

              <button
                className={`${style.uni_btn} ${style.uni_btn_gen} ${style.home_btn_isFuture}`}
                onMouseEnter={() => {
                  setEditMode(false);
                }}
                onMouseLeave={() => {
                  setEditMode(true);
                }}
              >
                <NavLink to='/production' className={style.home_isFuture_link}>
                  <div className={style.home_isFuture_btn_link}>Подробнее</div>
                  {editMode ? (
                    <img
                      className={style.home_isFuture_btn_arrow}
                      src={ArrowO}
                      alt='ArrowImg'
                    />
                  ) : (
                    <img
                      className={style.home_isFuture_btn_arrow}
                      src={ArrowW}
                      alt='ArrowImg'
                    />
                  )}
                </NavLink>
              </button>
            </div>
            <div className={style.home_isFuture_block2}>
              <img
                className={style.home_isFuture_img}
                src={ellipse}
                alt='image'
              />
            </div>
          </div>
        </div>
      </section>

      <Danger />

      <section className={`${style.uni_section} ${style.home_actual_section}`}>
        <div className={style.uni_container}>
          <h1 className={style.home_actual_title}>Актуальные предложения</h1>
          <figure className={style.home_actual_product}>
            {/* <Slider {...settings}> */}
            {productHome.map((post) => (
              <Product
                key={post.id}
                name={post.name}
                taste={post.taste}
                price={post.price}
                images={post.images}
                id={post.id}
                selectedItemsAC={selectedItemsAC}
              />
            ))}
            {/* </Slider> */}
          </figure>
          <div className={style.home_actual_btn}>
            <NavLink to={'/production'}>
              <button
                className={`${style.uni_btn} ${style.uni_btn_gen} ${style.uni_btn_all}`}
              >
                Вся продукция
              </button>
            </NavLink>
          </div>
        </div>
      </section>

      <section className={style.uni_section}>
        <div className={style.home_benefits_section}>
          <div className={style.uni_container}>
            <div className={style.uni}>
              <div className={style.uni_info}>
                <h1 className={style.uni_title}>Почему H5</h1>
                <p className={style.uni_subtitle}>
                  Мы заряжаем и заряжаемся. Наши устройства оснащены разьёмом
                  USB Type-C для дополнительной зарядки.
                </p>
                <NavLink to={'/benefits'}>
                  <button
                    className={`${style.uni_btn} ${style.uni_btn_gen} ${style.home_btn_benefits}`}
                  >
                    Подробнее
                  </button>
                </NavLink>
              </div>
              <div className={style.uni_gap}></div>
              <div></div>
              <img
                className={`${style.uni_img} ${style.ben_img}`}
                src={benefits}
                alt='images'
              />
            </div>
          </div>
        </div>
      </section>

      <section className={style.uni_section}>
        <div className={style.uni_container}>
          <div className={`${style.uni} ${style.uni_revers}`}>
            <img
              className={`${style.uni_img} ${style.uni_img_lux}`}
              src={lux}
              alt='images'
            />
            <div className={style.uni_gap}></div>
            <div className={style.uni_info}>
              <h1 className={`${style.uni_title} ${style.uni_title_lux}`}>
                LUX создан быть лучшим
              </h1>
              <p className={style.uni_subtitle}>
                H5 Lux вобрал в себя всё самое лучшее, чтобы стать №1 для тебя.
              </p>
              <NavLink to={'/LUX'}>
                <button
                  className={`${style.uni_btn} ${style.uni_btn_gen} ${style.home_btn_lux}`}
                >
                  Подробнее
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <section className={style.uni_section}>
        <div className={style.uni_container}>
          <div className={`${style.uni} ${style.uni_revers}`}>
            <BeForm myTitle={'Подписка'} block={false} />
            <div className={style.uni_gap}></div>
            <div className={style.uni_info}>
              <h1 className={style.uni_title}>Оставьте заявку</h1>
              <p className={style.uni_subtitle}>
                Хотите узнать больше о новинках в мире электронных сигарет?
                Укажите электронный адрес для оповещения о новой продукции
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
