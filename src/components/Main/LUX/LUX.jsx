import React from 'react';
import style from '../LUX/LUX.module.css';
import img1 from '../../../images/main/LUX/img1.png';
import img2 from '../../../images/main/LUX/img2.png';
import img3 from '../../../images/main/LUX/img3.png';

const LUX = (props) => {
  return (
    <section className={style.lux}>
      <img className={style.lux_img} src={img1} alt='images' />

      <section className={style.uni_section}>
        <div className={style.uni_container}>
          <div className={`${style.uni} ${style.uni_disign}`}>
            <div className={style.uni_info}>
              <h1 className={style.disign_title}>NEW DESIGN</h1>
              <p className={style.disign_subtitle}>
                H5 Lux вобрал в себя всё самое лучшее, чтобы стать №1 для тебя.
                Градиентный дизайн, матовая текстура и непревзойдённые
                технические характеристики – встречайте нашу новую линейку H5
                Lux.
              </p>
            </div>
            <div className={style.uni_gap}></div>
            <img className={style.uni_img} src={img2} alt='images' />
          </div>
        </div>
      </section>

      <section className={style.uni_section}>
        <div className={style.uni_container}>
          <div className={`${style.uni} ${style.uni_revers}`}>
            <img className={style.uni_img} src={img3} alt='images' />
            <div className={style.uni_gap}></div>
            <div className={`${style.uni_info} ${style.uni_info_info}`}>
              <p className={style.info_subtitle}>3000 затяжек</p>
              <p className={style.info_subtitle}>RGB-подсветка</p>
              <p className={style.info_subtitle}>
                Аккумулятор 650 mAh с разъёмом для подзарядки USB Type-C
              </p>
              <p className={style.info_subtitle}>Объём жидкости 10 мл</p>
              <p className={style.info_subtitle}>Более 20 вкусов</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default LUX;
