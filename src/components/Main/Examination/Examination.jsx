import React, { useEffect, useRef, useState } from 'react';
import style from '../Examination/Examination.module.css';
import logo from '../../../images/header/logo.svg';
import { compose } from 'redux';
import { toggelExaminationAC } from '../../../redux/product-reducer';
import { connect } from 'react-redux';

const Examination = ({ toggelExaminationAC }) => {
  const inputEl = useRef(null);
  const [checked, setChecked] = useState(false);
  const [banBanner, setBanBanner] = useState(false);

  useEffect(() => {
    const checkedInput = localStorage.getItem('checked');
    let checked =
      checkedInput === 'false' || checkedInput === null ? false : true;
    checked ? toggelExaminationAC(true) : toggelExaminationAC(false);
  }, []);

  let checkAge = (checkedInput) => {
    checkedInput ? toggelExaminationAC(true) : setBanBanner(true);
    localStorage.setItem('checked', checkedInput);
  };

  return (
    <section className={style.examination}>
      {banBanner ? (
        <div className={style.examination_block}>
          <img className={style.examination_img} src={logo} alt='logo' />
          <p className={style.examination_title_ban}>
            Извините, доступ на веб-сайт разрешен только гражданам РФ старше 18
            лет
          </p>
        </div>
      ) : (
        <div className={style.examination_block}>
          <img className={style.examination_img} src={logo} alt='logo' />
          <p className={style.examination_title}>
            Данный веб-сайт содержит информацию о электронных сигаретах,
            предназначенных только для граждан РФ старше 18 лет, являющихся
            потребителями табака или иной никотиносодержащей продукции, которые
            в противном случае продолжат курить или употреблять иную
            никтотиносодержащую продукцию проживающих на территории РФ.
            Электронные сигареты не являются альтернативой отказу от
            употребления табачной или иной никотиносодержащей продукции и не
            является средством для лечения никотиновой зависимости. Доступ на
            веб-сайт разрешен только с компьютеров, находящихся в интернет-сети
            РФ.
          </p>
          <div className={style.examination_checkbox}>
            <input
              ref={inputEl}
              className={style.examination_checkbox_input}
              type='checkbox'
              id='scales'
              name='scales'
              onChange={() => setChecked(true)}
              checked={checked}
            ></input>
            <label className={style.examination_subtitle} for='scales'>
              Я ПОДТВЕРЖДАЮ, ЧТО МНЕ ИСПОЛНИЛОСЬ 18 ИЛИ БОЛЕЕ ЛЕТ, И Я ЯВЛЯЮСЬ
              ПОТРЕБИТЕЛЕМ ТАБАКА.
            </label>
          </div>
          <button
            className={style.examination_form_btn}
            onClick={() => checkAge(checked)}
          >
            Подтвердить
          </button>
        </div>
      )}
    </section>
  );
};

export default compose(connect(undefined, { toggelExaminationAC }))(
  Examination
);
