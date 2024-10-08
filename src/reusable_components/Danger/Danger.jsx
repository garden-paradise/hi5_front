import React from 'react';
import style from '../Danger/Danger.module.css';
import danger from '../../images/main/home/18-plus.svg';

const Danger = () => {
  return (
    <figure className={style.danger}>
      <img className={style.danger_img} src={danger} alt='dangerImg' />
      <figcaption className={style.danger_title}>
        Важно: продажа несовершеннолетним запрещена.
      </figcaption>
    </figure>
  );
};

export default Danger;
