import React from 'react';
import style from '../MyOrder/MyOrder.module.css';
import img1 from '../../../../images/main/product/1.png';
import img2 from '../../../../images/main/product/2.png';
import img3 from '../../../../images/main/product/3.png';
import img4 from '../../../../images/main/product/4.png';
import img5 from '../../../../images/main/product/5.png';
import img6 from '../../../../images/main/product/6.png';
import img7 from '../../../../images/main/product/7.png';
import img8 from '../../../../images/main/product/8.png';
import img9 from '../../../../images/main/product/9.png';
import img10 from '../../../../images/main/product/10.png';
import img11 from '../../../../images/main/product/11.png';
import img12 from '../../../../images/main/product/12.png';
import img13 from '../../../../images/main/product/13.png';
import img14 from '../../../../images/main/product/14.png';
import img15 from '../../../../images/main/product/15.png';
import img16 from '../../../../images/main/product/16.png';
// import img17 from '../../../../images/main/product/17.png';
// import img18 from '../../../../images/main/product/18.png';
// import img19 from '../../../../images/main/product/19.png';
// import img20 from '../../../../images/main/product/20.png';
// import img21 from '../../../../images/main/product/21.png';
// import img22 from '../../../../images/main/product/22.png';
// import img23 from '../../../../images/main/product/23.png';
// import img24 from '../../../../images/main/product/24.png';
// import img25 from '../../../../images/main/product/25.png';
// import img26 from '../../../../images/main/product/26.png';
// import img27 from '../../../../images/main/product/27.png';
// import img28 from '../../../../images/main/product/28.png';
// import img29 from '../../../../images/main/product/29.png';
// import img30 from '../../../../images/main/product/30.png';

const PRODUCTS = [
  {
    id: 0,
    name: 'LUX',
    taste: 'Ледяной Арбуз',
    price: '999',
    images: img1,
  },
  {
    id: 1,
    name: 'LUX',
    taste: 'Малина',
    price: '999',
    images: img2,
  },
  {
    id: 2,
    name: 'LUX',
    taste: 'Ледяной Личи',
    price: '999',
    images: img3,
  },
  {
    id: 3,
    name: 'LUX',
    taste: 'Мороженое Таро',
    price: '999',
    images: img4,
  },
  {
    id: 4,
    name: 'LUX',
    taste: 'Лимонный Пирог',
    price: '999',
    images: img5,
  },
  {
    id: 5,
    name: 'LUX',
    taste: 'Ледяная Кола',
    price: '999',
    images: img6,
  },
  {
    id: 6,
    name: 'LUX',
    taste: 'Двойное Яблоко',
    price: '999',
    images: img7,
  },
  {
    id: 7,
    name: 'LUX',
    taste: 'Киви Маракуйя',
    price: '999',
    images: img8,
  },
  {
    id: 8,
    name: 'LUX',
    taste: 'Табак',
    price: '999',
    images: img9,
  },
  {
    id: 9,
    name: 'LUX',
    taste: 'Ледяное Манго',
    price: '999',
    images: img10,
  },
  {
    id: 10,
    name: 'LUX',
    taste: 'Кислое Яблоко',
    price: '999',
    images: img11,
  },
  {
    id: 11,
    name: 'LUX',
    taste: 'Пина Колада',
    price: '999',
    images: img12,
  },
  {
    id: 12,
    name: 'LUX',
    taste: 'Освежающая Мята',
    price: '999',
    images: img13,
  },
  {
    id: 13,
    name: 'LUX',
    taste: 'Ледяной Виноград',
    price: '999',
    images: img14,
  },
  {
    id: 14,
    name: 'LUX',
    taste: 'Ледяной Банан',
    price: '999',
    images: img15,
  },
  {
    id: 15,
    name: 'LUX',
    taste: 'Клубничное Мороженое',
    price: '999',
    images: img16,
  },
  // {
  //   id: 16,
  //   name: 'LUX',
  //   taste: 'Карамельное Мороженое',
  //   price: '999',
  //   images: img17,
  // },
  // {
  //   id: 17,
  //   name: 'LUX',
  //   taste: 'Кофе',
  //   price: '999',
  //   images: img18,
  // },
  // {
  //   id: 18,
  //   name: 'LUX',
  //   taste: 'Шоколадное Мороженое',
  //   price: '999',
  //   images: img19,
  // },
  // {
  //   id: 19,
  //   name: 'LUX',
  //   taste: 'Зеленый Чай',
  //   price: '999',
  //   images: img20,
  // },
  // {
  //   id: 20,
  //   name: 'LUX',
  //   taste: 'Молочный Чай',
  //   price: '999',
  //   images: img21,
  // },
  // {
  //   id: 21,
  //   name: 'LUX',
  //   taste: 'Коктейль',
  //   price: '999',
  //   images: img22,
  // },
  // {
  //   id: 22,
  //   name: 'LUX',
  //   taste: 'Сигара',
  //   price: '999',
  //   images: img23,
  // },
  // {
  //   id: 23,
  //   name: 'LUX',
  //   taste: 'Вишня',
  //   price: '999',
  //   images: img24,
  // },
  // {
  //   id: 24,
  //   name: 'LUX',
  //   taste: 'Ред Булл',
  //   price: '999',
  //   images: img25,
  // },
  // {
  //   id: 25,
  //   name: 'LUX',
  //   taste: 'Капучино',
  //   price: '999',
  //   images: img26,
  // },
  // {
  //   id: 26,
  //   name: 'LUX',
  //   taste: 'Ванильное Мороженое',
  //   price: '999',
  //   images: img27,
  // },
  // {
  //   id: 27,
  //   name: 'LUX',
  //   taste: 'Ледяной Персик',
  //   price: '999',
  //   images: img28,
  // },
  // {
  //   id: 28,
  //   name: 'LUX',
  //   taste: 'Гранат',
  //   price: '999',
  //   images: img29,
  // },
  // {
  //   id: 29,
  //   name: 'LUX',
  //   taste: 'Дыня',
  //   price: '999',
  //   images: img30,
  // },
];

const MyOrder = () => {
  return (
    <section className={style.myOrder}>
      <div className={style.myOrder_container}>
        <div>114324</div>
      </div>
    </section>
  );
};

export default MyOrder;
