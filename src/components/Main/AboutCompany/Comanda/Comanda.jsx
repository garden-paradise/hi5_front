import React from 'react';
import style from '../Comanda/Comanda.module.css';
import img1 from '../../../../images/main/comanda/image1.png';
import img2 from '../../../../images/main/comanda/image2.png';
import img5 from '../../../../images/main/comanda/image5.png';
import img6 from '../../../../images/main/comanda/image6.png';
import img7 from '../../../../images/main/comanda/image7.png';
import NavLinks from '../../../../reusable_components/NavLinks/NavLinks';

const Comanda = (props) => {
  return (
    <section className={style.comand}>
      <NavLinks
        data={[
          { url: 'home', name: 'Главная', active: false },
          { url: 'about', name: 'О компании', active: false },
          { url: 'comand', name: 'Команда', active: true },
        ]}
      />

      <section className={style.comand_section}>
        <h1 className={style.conand_title}>О компании</h1>
        <img className={style.comand_section_img} src={img1} alt='images' />
      </section>

      <section className={style.uni_section}>
        <div className={style.uni_container}>
          <div className={style.uni}>
            <div className={`${style.uni_info} ${style.uni_info_cont}`}>
              <h1 className={style.uni_title}>О нас</h1>
              <p className={style.uni_subtitle}>
                H5 – это стильный бренд альтернативной системы курения.
              </p>
              <p className={style.uni_subtitle}>
                Готовы поспорить, что сигареты без неприятного запаха – это
                реально! Особенно, если речь идет об электронных сигаретах H5.
              </p>
              <p className={style.uni_subtitle}>
                Миссия H5 – помочь курильщикам в борьбе с табачной зависимостью.
                Переход на электронные сигареты H5 менее вреден, чем продолжение
                курения обычных сигарет.
              </p>
              <p className={style.uni_subtitle}>
                Наше производство находится на высокотехнологичном заводе
                Shenzhen Salt Labs Ltd в Китае. Дизайнеры и инженеры создают
                продукт, основанный на запросах современных реалий. Производимые
                устройства прошли все лабораторные и технические испытания как в
                Китае на заводе Shenzhen Salt Labs Ltd, так и в России в
                Федеральной службе по аккредитации.
              </p>
            </div>
            <img
              className={`${style.uni_img} ${style.about_img}`}
              src={img2}
              alt='images'
            />
          </div>
        </div>
      </section>

      <h1 className={`${style.conand_title} ${style.conand_title_com}`}>
        Команда
      </h1>

      {/* <section className={`${style.personal} ${style.personal_top}`}>
        <div className={style.personal_bgd_y}></div>
        <div className={style.personal_info}>
          <div className={style.uni_container}>
            <div className={`${style.uni} ${style.uni_revers}`}>
              <div className={style.personal_block_1}>
                <h1 className={style.personal_title}>Управляющий партнер H5</h1>
                <p className={style.personal_subtitle}>
                  Шефлер Алексей Юрьевич
                </p>
              </div>
              <div className={style.uni_gap}></div>

              <img
                className={`${style.uni_img} ${style.uni_img_1000}`}
                src={img3}
                alt='images'
              />
            </div>
          </div>
        </div>
      </section>

      <div className={style.personal_div}></div>

      <section className={`${style.personal} ${style.personal_top}`}>
        <div className={style.personal_bgd_b}></div>
        <div className={style.personal_info}>
          <div className={style.uni_container}>
            <div className={style.uni}>
              <img
                className={`${style.uni_img} ${style.uni_img_1000}`}
                src={img4}
                alt='images'
              />
              <div className={style.uni_gap}></div>
              <div className={style.personal_block}>
                <h1 className={style.personal_title}>Генральный директор</h1>
                <p className={style.personal_subtitle}>
                  Стихарев Юрий Романович
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className={style.uni_section}>
        <div className={style.uni_container}>
          <div className={style.uni_sotrudnici}>
            {/* <div className={`${style.sotrudnici} ${style.sotrudnici_1}`}>
              <img className={style.sotrudnici_img} src={img5} alt='images' />
              <p className={style.personal_subtitle}>Рыженков Никита</p>
              <p className={style.uni_subtitle}> Начальник отдела продаж</p>
            </div> */}
            {/* <div className={`${style.sotrudnici} ${style.sotrudnici_2}`}>
              <img className={style.sotrudnici_img} src={img6} alt='images' />
              <p className={style.personal_subtitle}>Мельников Денис</p>
              <p className={style.uni_subtitle}>Операционный директор</p>
            </div> */}
            <div className={`${style.sotrudnici} ${style.sotrudnici_3}`}>
              <img className={style.sotrudnici_img} src={img7} alt='images' />
              <p className={style.personal_subtitle}>Вольфовский Артем</p>
              <p className={style.uni_subtitle}>Исполнительный директор</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Comanda;
