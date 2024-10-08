import React from 'react';
import style from '../Reviews/Reviews.module.css';
import NavLinks from '../../../reusable_components/NavLinks/NavLinks';

const Reviews = (props) => {
  let video = [
    'https://www.youtube.com/embed/523geJH83uM',
    'https://www.youtube.com/embed/5VktwHXBUEE',
    'https://www.youtube.com/embed/--di7c0SQ_A',
  ];
  return (
    <section className={style.reviews}>
      <NavLinks
        data={[
          { url: 'home', name: 'Главная', active: false },
          { url: 'reviews', name: 'Обзоры', active: true },
        ]}
      />
      <div className={style.catalog_container}>
        <div className={style.catalog_items}>
          {video.map((item) => (
            <iframe
              className={style.catalog_video}
              width='480'
              height='276'
              src={item}
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
