import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../Distributor/Distributor.module.css';
import map from '../../../../images/main/distributor/mother-russia.svg';
import Contact from './Contact/Contact';
import BeForm from '../../../../reusable_components/BeForm/BeForm';
import NavLinks from '../../../../reusable_components/NavLinks/NavLinks';

const Distributor = (props) => {
  return (
    <section>
      <NavLinks
        data={[
          { url: 'home', name: 'Главная', active: false },
          { url: 'partners', name: 'Партнерам', active: false },
          {
            url: 'distributor',
            name: 'Региональные представители',
            active: true,
          },
        ]}
      />
      <div className={style.distributor_container}>
        <section className={style.distributor}>
          <div className={style.distributor_head}>
            <h1 className={style.distributor_title}>Дистрибьюторы</h1>
            <p className={style.distributor_subtitle}>
              Для того, чтобы стать нашим партнером в своём регионе, оставьте
              свои данные в форме, указанной ниже.
            </p>
          </div>

          <img src={map} alt='images' />

          <section className={style.contacts}>
            <Contact
              sity={'Москва'}
              name={'Отдел продаж'}
              tel={'+7 (499) 551 50 77'}
            />
            <Contact
              sity={'Ростовская область'}
              name={'Макас Лев Викторович'}
              tel={'+7 (938) 131-30-07'}
            />
            <Contact
              sity={'Краснодарский край'}
              name={'Макас Лев Викторович'}
              tel={'+7 (938) 131-30-07'}
            />
            <Contact
              sity={'Карачаево-Черкесская Республика'}
              name={'Макас Лев Викторович'}
              tel={'+7 (938) 131-30-07'}
            />
            <Contact
              sity={'Кавказские Минеральные Воды'}
              name={'Макас Лев Викторович'}
              tel={'+7 (938) 131-30-07'}
            />
            <Contact
              sity={'Республика Дагестан'}
              name={'Макас Лев Викторович'}
              tel={'+7 (938) 131-30-07'}
            />
            <Contact
              sity={'Ставропольский край'}
              name={'Макас Лев Викторович'}
              tel={'+7 (938) 131-30-07'}
            />
            <Contact
              sity={'Кабардино-Балкарская Республика'}
              name={'Макас Лев Викторович'}
              tel={'+7 (938) 131-30-07'}
            />
            <Contact
              sity={'Республика Северная Осетия'}
              name={'Макас Лев Викторович'}
              tel={'+7 (938) 131-30-07'}
            />
          </section>
        </section>

        <section className={style.distributor_section}>
          <div className={style.distributor_section_block}>
            <h1 className={style.distributor_section_title}>
              Стать нашим партнером
            </h1>
            <p className={style.distributor_section_subtitle}>
              Для того, чтобы стать нашим партнером в своём регионе, оставьте
              свои данные в форме.
            </p>
          </div>
          <span className={style.distributor_form}>
            <BeForm />
          </span>
        </section>
      </div>
    </section>
  );
};

export default Distributor;
