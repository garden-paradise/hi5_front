import React from 'react';
import style from '../Documentation/Documentation.module.css';
import logo from '../../../../images/main/partners/logo_doc.svg';
import NavLinks from '../../../../reusable_components/NavLinks/NavLinks';

const Documentation = (props) => {
  return (
    <section className={style.documentation}>
      <NavLinks
        data={[
          { url: 'home', name: 'Главная', active: false },
          { url: 'about', name: 'О компании', active: false },
          { url: 'documentation', name: 'Документация', active: true },
        ]}
      />
      <div className={style.documentations_container}>
        <h1 className={style.documentation_h1}>Документация</h1>
        <div className={style.documentation_block}>
          <div className={style.documentation_div1}>
            <div className={style.documentation_info}>
              <h2 className={style.documentation_info_title}>
                Политика конфиденциальности
              </h2>
              <a
                className={style.documentation_info_link}
                href='https://disk.yandex.ru/d/wANSRPMJ978oYg'
                target='_blank'
                rel='noreferrer'
                // download
              >
                <button className={style.documentation_form_btn}>
                  Скачать PDF файл
                </button>
              </a>
            </div>
            <div className={style.documentation_info}>
              <h2 className={style.documentation_info_title}>Сертификат</h2>
              <a
                className={style.documentation_info_link}
                href='https://disk.yandex.ru/i/w-bacZebEDggsg'
                target='_blank'
                rel='noreferrer'
                // download
              >
                <button className={style.documentation_form_btn}>
                  Скачать PDF файл
                </button>
              </a>
            </div>
          </div>
          <figure className={style.documentation_div2}>
            <img
              className={style.documentation_logoImg}
              src={logo}
              alt='logo'
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Documentation;
