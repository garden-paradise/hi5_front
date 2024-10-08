import React, { useState } from 'react';
import style from '../Verification/Verification.module.css';
import img1 from '../../../images/main/verification/img (1).png';
import img2 from '../../../images/main/verification/img (2).png';
import img3 from '../../../images/main/verification/img (3).png';
import img4 from '../../../images/main/verification/img (4).png';
import { Field, reduxForm, reset } from 'redux-form';
import { Input } from '../../../utils/validators/Forms/ValidationForms';

const afterSubmit = (result, dispatch) => dispatch(reset('code'));

const Verification = ({ handleSubmit }) => {
  const [status, setStatus] = useState(null);
  const handleSend = async ({ myCode }) => {
    let response = await fetch(
      'https://h5backend-338216.ew.r.appspot.com/code/send',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          code: myCode,
          date: new Date().toLocaleString(),
        }),
      }
    );

    if (response.status === 503) {
      setStatus('Неверно введен код');
    }
    if (response.status === 400) {
      setStatus('Код отсутствует в базе');
    }
    if (response.status === 401) {
      setStatus('Код был ранее активирован');
    }
    if (response.status === 200) {
      setStatus('Код активирован');
    }
  };
  return (
    <section className={style.verification}>
      <div className={style.verification_container}>
        <section className={style.verification_section}>
          <h1 className={style.verification_title}>
            Как проверить продукцию H5 на подлинность?
          </h1>
          <p className={style.verification_subtitle}>
            В настоящее время на рынке все чаще появляются дешёвые и
            некачественные подделки продукции H5. Не подвергайте своё здоровье
            опасности и выбирайте оригинальную продукцию H5.
          </p>
        </section>

        <section className={style.verification_info}>
          <div className={style.verification_info_1}>
            <div
              className={`${style.verification_info_block} ${style.verification_info_block_bottom}`}
            >
              <img
                className={style.verification_info_img}
                src={img1}
                alt='images'
              />
              <p className={style.verification_info_title}>
                <p>
                  На каждой индивидуальной упаковке от электронной сигареты H5
                  есть специальный код из 16 цифр
                </p>
              </p>
            </div>
            <div className={style.verification_info_block}>
              <img
                className={`${style.verification_info_img} ${style.verification_info_img_top}`}
                src={img3}
                alt='images'
              />
              <p className={style.verification_info_title}>
                При успешной проверке на подлинность должна появиться
                оригинальная страница проверки с гиперссылками, количеством
                попыток ввода и их датой
              </p>
            </div>
          </div>
          <img
            className={style.verification_info_img_line}
            src={img4}
            alt='images'
          />
          <div className={style.verification_info_2}>
            <div className={style.verification_info_block}>
              <img
                className={style.verification_info_img}
                src={img2}
                alt='images'
              />
              <p className={style.verification_info_title}>
                Сотрите защитный слой и вбейте код в форму ниже
              </p>
            </div>
          </div>
        </section>
        <div className={style.verification_form_status}>{status}</div>
        <section className={style.verification_form}>
          <span className={style.verification_form_title}>
            Введите 16-значный код:
          </span>
          <form className={style.verification_forms}>
            <Field
              className={style.verification_form_input}
              name='myCode'
              component={Input}
              type='number'
            />
            <button
              className={style.verification_form_btn}
              type='submit'
              onClick={handleSubmit((data) => handleSend(data))}
            >
              <b>Проверить</b>
            </button>
          </form>
        </section>
      </div>
    </section>
  );
};

export default reduxForm({
  form: 'code',
  onSubmitSuccess: afterSubmit,
})(Verification);
