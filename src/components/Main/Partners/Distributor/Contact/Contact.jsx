import React from 'react';
import style from '../Contact/Contact.module.css';

const Contact = ({ sity, name, tel }) => {
  return (
    <section className={style.contact}>
      <div className={style.contact_block}>
        <p className={style.contact_block_sity}>{sity}</p>
        <p className={style.contact_block_name}>{name}</p>
        <a href={`tel: ${tel}`} className={style.contact_block_tel}>
          {tel}
        </a>
      </div>
    </section>
  );
};

export default Contact;
