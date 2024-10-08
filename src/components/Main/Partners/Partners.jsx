import React from 'react';
import SearchInput from '../../../reusable_components/SearchInput/SearchInput';
import style from '../Partners/Partners.module.css';
import caret from '../../../images/main/partners/CaretRight.svg';
import { NavLink } from 'react-router-dom';

const Partners = (props) => {
  return (
    <section className={style.partners}>
      <div className={style.partners_container}>
        <div className={style.partners_div}>
          {/* <SearchInput /> */}
          <div className={style.partners_info_block}>
            <div className={style.partners_info}>
              <NavLink to='/benefits' className={style.partners_info_link}>
                <h2 className={style.partners_info_title}>Почему H5?</h2>
                <img src={caret} alt='caretImg' />
              </NavLink>
            </div>
            <p className={style.partners_info_sibtitle}>
              Многие спрашивают, чем так крут H5? Мы не показываем, а доказываем
            </p>
          </div>
          <div className={style.partners_info_block}>
            <div className={style.partners_info}>
              <NavLink to='/documentation' className={style.partners_info_link}>
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
              <NavLink to='/distributor' className={style.partners_info_link}>
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
  );
};

export default Partners;
