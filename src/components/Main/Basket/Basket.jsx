import React, { useEffect, useRef, useState } from 'react';
import style from '../Basket/Basket.module.css';
import trash from '../../../images/main/basket/Trash.svg';
import { NavLink } from 'react-router-dom';
import ProductBasket from '../../../reusable_components/ProductBasket/ProductBasket';
import img1 from '../../../images/main/product/1.png';
import img2 from '../../../images/main/product/2.png';
import img3 from '../../../images/main/product/3.png';
import img4 from '../../../images/main/product/4.png';
import img5 from '../../../images/main/product/5.png';
import img6 from '../../../images/main/product/6.png';
import img7 from '../../../images/main/product/7.png';
import img8 from '../../../images/main/product/8.png';
import img9 from '../../../images/main/product/9.png';
import img10 from '../../../images/main/product/10.png';
import img11 from '../../../images/main/product/11.png';
import img12 from '../../../images/main/product/12.png';
import img13 from '../../../images/main/product/13.png';
import img14 from '../../../images/main/product/14.png';
import img15 from '../../../images/main/product/15.png';
import img16 from '../../../images/main/product/16.png';
// import img17 from '../../../images/main/product/17.png';
// import img18 from '../../../images/main/product/18.png';
// import img19 from '../../../images/main/product/19.png';
// import img20 from '../../../images/main/product/20.png';
// import img21 from '../../../images/main/product/21.png';
// import img22 from '../../../images/main/product/22.png';
// import img23 from '../../../images/main/product/23.png';
// import img24 from '../../../images/main/product/24.png';
// import img25 from '../../../images/main/product/25.png';
// import img26 from '../../../images/main/product/26.png';
// import img27 from '../../../images/main/product/27.png';
// import img28 from '../../../images/main/product/28.png';
// import img29 from '../../../images/main/product/29.png';
// import img30 from '../../../images/main/product/30.png';

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
    taste: 'Киви Маракуйя Гуава',
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

const DISCOUNT = {
  INSTAGRAM: 10,
};

const Basket = ({ selectedItemsAC }) => {
  const [status, setStatus] = useState(null);
  const [total, setTotal] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [productBuys, setProductBuys] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [saleCount, setSaleCount] = useState(null);
  const [totalFinal, setTotalFinal] = useState(null);
  const inputDiscount = useRef(null);
  const handleSend = async (myPromocode) => {
    for (var key in DISCOUNT) {
      if (key === myPromocode) {
        getDiscount(total, DISCOUNT[key]);
        setStatus('Код активирован');
      } else {
        try {
          let response = await fetch(
            'https://h5backend-338216.ew.r.appspot.com/promocode/send',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json;charset=utf-8',
              },
              body: JSON.stringify({
                promocode: myPromocode,
                date: new Date().toLocaleString(),
              }),
            }
          );
          const body = await response.json();
          if (response.status === 503) {
            setStatus('Неверно введен код');
          }
          if (response.status === 400) {
            setStatus('Неверно введен код');
          }
          if (response.status === 401) {
            setStatus('Код был ранее активирован');
          }
          if (response.status === 200) {
            setStatus('Код активирован');
            getDiscount(total, body.discount);
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
  };
  let getDiscount = (total, discountP) => {
    if (discountP) {
      setDiscount(Math.ceil((total * discountP) / 100));
      setSaleCount(discountP);
      setTotalFinal(total - Math.ceil((total * discountP) / 100));
    }
  };
  let addProductDelete = (id) => {
    let basket =
      JSON.parse(localStorage.getItem('basket')) == undefined
        ? []
        : JSON.parse(localStorage.getItem('basket'));
    let newBasket = basket.filter((item) => item.id !== id);
    setProductBuys(newBasket);
    AddTotalPrice(newBasket);
    selectedItemsAC(newBasket.length);
    localStorage.setItem('basket', JSON.stringify(newBasket));
    localStorage.setItem('number', JSON.stringify(newBasket.length));
    localStorage.setItem('selectedItems', JSON.stringify(newBasket.length));
  };
  let addProductDeleteAll = () => {
    localStorage.clear();
    setProductBuys([]);
    setTotal(0);
    selectedItemsAC(0);
  };
  let AddTotalPrice = (arr) => {
    let priceArr = arr.map((item) => +item.price * item.count);
    let total = priceArr.reduce((sum, current) => sum + current, 0);
    setTotal(total);
    getDiscount(total, saleCount);

    let totalCount = arr.reduce((sum, current) => sum + current.count, 0);
    setTotalCount(totalCount);
  };
  let checkout = () => {
    let checkout = {
      total: total,
      totalFinal: discount,
      discount: saleCount,
    };
    localStorage.setItem('checkout', JSON.stringify(checkout));
  };
  let addProductBuyBasket = (id, count) => {
    let productBuy = [];
    let basket = JSON.parse(localStorage.getItem('basket'));
    basket.map((basket) =>
      basket.id === id
        ? productBuy.unshift({ ...basket, count })
        : productBuy.unshift(basket)
    );
    localStorage.setItem('basket', JSON.stringify(productBuy));
    AddTotalPrice(productBuy);
  };
  useEffect(() => {
    let productBuy = [];
    const basket =
      JSON.parse(localStorage.getItem('basket')) == undefined
        ? []
        : JSON.parse(localStorage.getItem('basket'));
    basket.map((basket) =>
      PRODUCTS.forEach(
        (product) =>
          product.id === basket.id &&
          productBuy.unshift({ ...basket, ...product })
      )
    );
    setProductBuys(productBuy);
    localStorage.setItem('basket', JSON.stringify(productBuy));
    AddTotalPrice(productBuy);
  }, []);
  return (
    <section className={style.basket}>
      <div className={style.basket_container}>
        <div className={style.basket_div}>
          <div className={style.basket_divs}>
            <div className={style.basket_title}>Корзина</div>
            {/* <NavLink className={style.basket_receipt_btn_link} to='/myOrder'>
              <div className={style.basket_title_order}>Мои заказы</div>
            </NavLink> */}
          </div>

          <div className={style.basket_zacaz}>
            <div className={style.basket_zacaz_num}>
              <div>{totalCount}</div>
              <span className={style.basket_zacaz_title}>шт. в корзине</span>
            </div>
            <div
              onClick={() => addProductDeleteAll()}
              className={style.basket_zacaz_num_delete}
            >
              <span>Удалить всё</span>
              <img
                className={style.basket_zacaz_num_delete_img}
                src={trash}
                alt='images'
              />
            </div>
          </div>

          <div className={style.basket_items_buy}>
            <div className={style.basket_items}>
              {!productBuys.length ? (
                <div className={style.basket_items_null}>Корзина пуста</div>
              ) : (
                productBuys.map((post) => (
                  <ProductBasket
                    key={post.id}
                    name={post.name}
                    taste={post.taste}
                    price={post.price}
                    images={post.images}
                    id={post.id}
                    countB={post.count}
                    addProductDelete={addProductDelete}
                    addProductBuyBasket={addProductBuyBasket}
                  />
                ))
              )}
            </div>

            <div className={style.basket_items_hr}></div>

            <section className={style.basket_items_receipt}>
              <div className={style.basket_receipt}>
                <div className={style.basket_receipt_div}>
                  <input
                    placeholder='Введите промокод'
                    className={style.basket_discount_input}
                    ref={inputDiscount}
                    type='text'
                  />
                  <button
                    className={style.basket_discount_btn}
                    onClick={() =>
                      handleSend(inputDiscount.current.value.toUpperCase())
                    }
                  >
                    Применить
                  </button>
                </div>
                <div className={style.basket_items_status}>{status}</div>
                <div className={style.basket_receipt_div}>
                  <div className={style.basket_receipt_title}>
                    Общая стоимость
                  </div>
                  <div className={style.basket_receipt_money}>
                    <div className={style.basket_receipt_num}>{total}</div>
                    <div className={style.basket_receipt_val}> руб</div>
                  </div>
                </div>
                <div className={style.basket_receipt_div}>
                  <div className={style.basket_receipt_title}>
                    Скидка {saleCount && `${saleCount}%`}
                  </div>
                  <div className={style.basket_receipt_money}>
                    <div className={style.basket_receipt_num}>{discount}</div>
                    <div className={style.basket_receipt_val}> руб</div>
                  </div>
                </div>
                <div className={style.basket_receipt_div}>
                  <div className={style.basket_receipt_title}>Доставка</div>
                  <div className={style.basket_receipt_money}>
                    <div className={style.basket_receipt_num}>Бесплатно </div>
                    {/* <div className={style.basket_receipt_val}> руб</div> */}
                  </div>
                </div>
                <div
                  className={`${style.basket_receipt_div} ${style.basket_receipt_div_sum}`}
                >
                  <div
                    className={`${style.basket_receipt_title} ${style.basket_items_receipt_t}`}
                  >
                    Итого
                  </div>
                  <div className={style.basket_receipt_money}>
                    <div className={style.basket_receipt_num}>
                      {totalFinal != null ? totalFinal : total}
                    </div>
                    <div className={style.basket_receipt_val}> руб</div>
                  </div>
                </div>
                <p
                  className={
                    totalCount < 5
                      ? style.basket_minimum
                      : style.basket_minimum_none
                  }
                >
                  * минимальное количество заказа - 5 штук
                </p>
                <NavLink
                  className={style.basket_receipt_btn_link}
                  to='/checkout'
                >
                  <button
                    onClick={checkout}
                    disabled={totalCount < 5 ? true : false}
                    className={style.basket_receipt_btn}
                  >
                    Оформить заказ
                  </button>
                </NavLink>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Basket;
