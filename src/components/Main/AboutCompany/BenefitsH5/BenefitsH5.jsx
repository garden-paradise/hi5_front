import React from 'react';
import style from '../BenefitsH5/BenefitsH5.module.css';
import img1 from '../../../../images/main/benefits/images1.png';
import img6 from '../../../../images/main/benefits/images6.png';
import img7 from '../../../../images/main/benefits/images7.png';
import Line from '../../../../images/main/benefits/Line.svg';
import BeForm from '../../../../reusable_components/BeForm/BeForm';
import NavLinks from '../../../../reusable_components/NavLinks/NavLinks';

const BenefitsH5 = () => {
  return (
    <section className={style.benefitsH5}>
      <NavLinks
        data={[
          { url: 'home', name: 'Главная', active: false },
          { url: 'about', name: 'О компании', active: false },
          { url: 'benefits', name: 'Почему H5?', active: true },
        ]}
      />

      <section className={style.benefitsH5_benefitsH5_section}>
        <div className={style.benefitsH5_benefitsH5_info}>
          <h1 className={style.benefitsH5_benefitsH5_title}>Почему H5?</h1>
        </div>
        <img className={style.benefitsH5_img} src={img1} alt='images' />
      </section>

      <section className={style.uni_section}>
        <div className={style.uni_container}>
          <div className={style.uni}>
            <div>
              <div className={style.block_div}>
                <img
                  className={style.block_img_line}
                  src={Line}
                  alt='lineImg'
                />
                <div className={style.uni_info}>
                  <h1 className={style.uni_title}>Мы заряжаем и заряжаемся</h1>
                  <p className={style.uni_subtitle}>
                    Наши устройства оснащены разъёмом USB Type-C для
                    дополнительной зарядки
                  </p>
                </div>
              </div>
              <div className={`${style.block_div} ${style.block_top}`}>
                <img
                  className={style.block_img_line}
                  src={Line}
                  alt='lineImg'
                />
                <div className={style.uni_info}>
                  <h1 className={style.uni_title}>Мы практичные</h1>
                  <p className={style.uni_subtitle}>
                    У нашей продукции эргономичные корпуса с ёмкими
                    аккумуляторами
                  </p>
                </div>
              </div>
            </div>
            <div className={style.uni_gap}></div>
            <img className={style.uni_img} src={img6} alt='images' />
          </div>

          <div className={`${style.uni} ${style.uni_revers}`}>
            <img className={style.uni_img} src={img7} alt='images' />
            <div className={style.uni_gap}></div>
            <div>
              <div className={style.block_div}>
                <img
                  className={style.block_img_line}
                  src={Line}
                  alt='lineImg'
                />
                <div className={style.uni_info}>
                  <h1 className={style.uni_title}>Мы разные</h1>
                  <p className={style.uni_subtitle}>По цене, объему и вкусу</p>
                </div>
              </div>
              <div className={`${style.block_div} ${style.block_top}`}>
                <img
                  className={style.block_img_line}
                  src={Line}
                  alt='lineImg'
                />
                <div className={style.uni_info}>
                  <h1 className={style.uni_title}>Нас видно</h1>
                  <p className={style.uni_subtitle}>
                    В клубах, на улице и в социальных сетях
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={style.uni_section}>
        <div className={style.uni_container}>
          <div className={`${style.uni} ${style.uni_center}`}>
            <div className={style.form}>
              <h1 className={style.form_title}>Стать партнером</h1>
              <p className={`${style.uni_subtitle} ${style.form_subtitle}`}>
                Оставьте свои контакты, и мы свяжемся с вами
              </p>
            </div>
            <div className={style.uni_gap}></div>
            <BeForm block={true} myTitle={'Хочу стать партнером'} />
          </div>
        </div>
      </section>
    </section>
  );
};

export default BenefitsH5;
