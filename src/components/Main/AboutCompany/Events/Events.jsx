import React from 'react';
import style from '../Events/Events.module.css';
import img1 from '../../../../images/main/events/image1.png';
import img2 from '../../../../images/main/events/image2.png';
import img3 from '../../../../images/main/events/image3.png';
import img4 from '../../../../images/main/events/image4.png';
import img5 from '../../../../images/main/events/image5.png';
import img6 from '../../../../images/main/events/image6.png';
import img7 from '../../../../images/main/events/image7.png';
import img8 from '../../../../images/main/events/image8.png';
import BeForm from '../../../../reusable_components/BeForm/BeForm';
import NavLinks from '../../../../reusable_components/NavLinks/NavLinks';

const Events = (props) => {
  return (
    <section className={style.events}>
      <NavLinks
        data={[
          { url: 'home', name: 'Главная', active: false },
          { url: 'about', name: 'О компании', active: false },
          { url: 'events', name: 'Мероприятия', active: true },
        ]}
      />

      <section className={style.events_section}>
        <h1 className={style.events_title}>Мероприятия</h1>
        <img className={style.event_title_img} src={img1} alt='images' />

        <section className={style.uni_section}>
          <div className={style.uni_container}>
            <div className={style.uni}>
              <div className={style.uni_info}>
                <h1 className={style.uni_title}>JOLLYEAR PLACE</h1>
                <p className={style.uni_title_time}>27.11.2021</p>
                <p className={style.uni_subtitle}>
                  <p>
                    Такие ивенты нам нужны! Ночь для того и существует, чтобы
                    вооружиться коктейлем и любимым вкусом H5 Lux и танцевать до
                    утра.
                  </p>
                </p>
              </div>
              <div className={style.uni_gap}></div>
              <img className={style.uni_img} src={img8} alt='images' />
            </div>
          </div>
        </section>

        <section className={style.uni_section}>
          <div className={style.uni_container}>
            <div className={`${style.uni} ${style.uni_revers}`}>
              <img className={style.uni_img} src={img7} alt='images' />
              <div className={style.uni_gap}></div>
              <div className={style.uni_info}>
                <h1 className={style.uni_title}> JOLLYEAR PLACE</h1>
                <p className={style.uni_title_time}> 04.12.2021</p>
                <p className={style.uni_subtitle}>
                  <p>
                    Той ночью CONTENT CLUB даже не планировал спать… А мы уже
                    планируем следующую встречу с вами на топовой тусовке!
                  </p>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={style.uni_section}>
          <div className={style.uni_container}>
            <div className={style.uni}>
              <div className={style.uni_info}>
                <h1 className={style.uni_title}>USF Fighting Championships</h1>
                <p className={style.uni_title_time}>2021 / 2022</p>
                <p className={style.uni_subtitle}>
                  <p>
                    Наш бренд H5 Lux стал спонсором всемирного промоушена
                    кулачных боев USF.
                  </p>
                  <p>
                    USF – это международная лига кулачных боев с рекордным
                    гран-при $1 000 000 в сезоне 2021/2022.
                  </p>
                </p>
              </div>
              <div className={style.uni_gap}></div>
              <img className={style.uni_img} src={img6} alt='images' />
            </div>
          </div>
        </section>
      </section>
      <section className={style.uni_section}>
        <div className={style.uni_container}>
          <div className={`${style.uni} ${style.uni_revers}`}>
            <img className={style.uni_img} src={img5} alt='images' />
            <div className={style.uni_gap}></div>
            <div className={style.uni_info}>
              <h1 className={style.uni_title}>BLAGO WHITE</h1>
              <p className={style.uni_title_time}> 27.10.2021</p>
              <p className={style.uni_subtitle}>
                <p>
                  Первое правило перед локдауном – танцевать так, как будто это
                  последний раз.
                </p>
                <p>
                  Потому что 27.10.2021 мы никак не могли пропустить тусовку в
                  Zavarka. Кто был, тот подтвердит, в тот день ярче хадлайнера
                  Blago White были только наши электронные сигареты H5 LUX с
                  RGB-подсветкой.
                </p>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={style.event_msu}>
        <div className={`${style.uni_section} ${style.uni_section_msu}`}>
          <div className={style.uni_container}>
            <div className={style.uni}>
              <div className={`${style.uni_info} ${style.uni_info_msu}`}>
                <h1 className={`${style.uni_title} ${style.uni_title_msu}`}>
                  POSVYAT 2021 MSU
                </h1>
                <p className={style.uni_title_time}>01.10.2021</p>
                <p className={style.uni_subtitle}>
                  <p> Город ложиться спать, а H5 просыпается.</p>
                  <p>
                    Просыпается, между прочим, на легендарном мероприятии для
                    первокурсников в МГУ!
                  </p>
                  <p>
                    Посвят – всего шесть букв, зато сколько воспоминаний. А огня
                    тусовке добавил H5 – куда без нас?
                  </p>
                </p>
              </div>
              <div className={style.uni_gap}></div>
              <img className={style.uni_img} src={img4} alt='images' />
            </div>
          </div>
        </div>
      </section>
      <section className={style.event_symbiosis}>
        <div className={`${style.uni_section} ${style.uni_section_sym}`}>
          <div className={style.uni_container}>
            <div className={`${style.uni} ${style.uni_revers}`}>
              <img className={style.uni_img} src={img3} alt='images' />
              <div className={style.uni_gap}></div>
              <div className={style.uni_info}>
                <h1 className={style.uni_title}>SYMBIOSIS TECHNO ROOMS</h1>
                <p
                  className={`${style.uni_title_time} ${style.uni_title_time_sym}`}
                >
                  01.10.2021
                </p>
                <p className={style.uni_subtitle}>
                  <p>Многие спрашивают, чем так крут H5?</p>
                  <p>
                    Мы не показываем, а доказываем. Кто успел присоедениться к
                    движу от Techno Rooms – тот урвал счастливый билет!
                  </p>
                  <p>
                    А кто не успел – только попробуйте не прийти в следующий
                    раз!
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={style.uni_section}>
        <div className={style.uni_container}>
          <div className={style.uni}>
            <div className={style.uni_info}>
              <h1 className={style.uni_title}>POSVYAT 2021 MGIMO ONLY</h1>
              <p className={style.uni_title_time}>11.09.2021</p>
              <p className={style.uni_subtitle}>
                <p>
                  Первокурсники, которые все-таки смогли отпроситься на
                  вечеринку у родителей, надолго запомнят 11.09.2021.
                </p>
                <p>
                  В этот день мы с МГИМО открыли сезон кайфовых тус с друзьями и
                  однокурсниками. Да, H5 точно знает, как сделать студенческие
                  годы самыми незабываемыми в жизни...
                </p>
              </p>
            </div>
            <div className={style.uni_gap}></div>
            <img className={style.uni_img} src={img2} alt='images' />
          </div>
        </div>
      </section>
      <section className={style.uni_section}>
        <div className={style.uni_container}>
          <div className={style.uni}>
            <div className={style.uni_info}>
              <h1 className={style.form_title}>
                Пригласить H5 на своё мероприятие{' '}
              </h1>
              <p className={style.form_subtitle}>
                Оставьте свои данные, и мы свяжемся с вами.
              </p>
            </div>
            <div className={style.uni_gap}></div>
            <BeForm block={true} myTitle={'Приглашение на мероприятие'} />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Events;
