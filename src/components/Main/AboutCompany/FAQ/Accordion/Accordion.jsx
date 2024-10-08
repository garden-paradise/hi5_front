import React from 'react';
import style from '../Accordion/Accordion.module.css';
import CaretD from '../../../../../images/main/faq/CaretD.svg';
import CaretU from '../../../../../images/main/faq/CaretU.svg';

const Accordion = ({ title, subtitle, href, active, setActive }) => {
  return (
    <section className={style.accordion}>
      <div
        className={style.faq_item}
        onClick={() => {
          setActive(title);
        }}
      >
        <div className={style.faq_item_block}>
          <h3 className={style.faq_item_title}>{title}</h3>
          <img
            className={style.faq_img}
            src={active === title ? CaretU : CaretD}
            alt='images'
          />
        </div>

        <div
          className={
            style.faq_item_subtitle_div + (active === title ? style.show : '')
          }
        >
          <article className={style.faq_item_subtitle}>
            {subtitle}
            {href && <a className={style.faq_item_href} href='https://www.vapelab.store'>www.vapelab.store</a>}
          </article>
        </div>
      </div>
    </section>
  );
};

export default Accordion;
