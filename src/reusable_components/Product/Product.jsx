import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from '../Product/Product.module.css';

const Product = ({ id, name, taste, price, images, selectedItemsAC }) => {
  const [disable, setDisable] = useState(false);
  const [count, setCount] = useState(1);
  let icrement = () => {
    setCount(count + 1);
  };
  let dicrement = () => {
    count > 1 && setCount(count - 1);
  };
  let addProduct = () => {
    const basket =
      JSON.parse(localStorage.getItem('basket')) == undefined
        ? []
        : JSON.parse(localStorage.getItem('basket'));
    let newBasket = [];
    let productInBasket = false;
    for (let i = 0; i < basket.length; i++) {
      if (basket[i]['id'] === id) {
        productInBasket = true;
      }
      newBasket.push(basket[i]);
    }
    if (!productInBasket) {
      newBasket.push({ id, count });
    }
    localStorage.setItem('basket', JSON.stringify(newBasket));
    localStorage.setItem('selectedItems', JSON.stringify(newBasket.length));
    selectedItemsAC(newBasket.length);
  };

  let addItemProduction = () => {
    localStorage.setItem(
      'itemProduct',
      JSON.stringify({ images, taste, id, price })
    );
  };
  useEffect(() => {
    const basket =
      JSON.parse(localStorage.getItem('basket')) == undefined
        ? []
        : JSON.parse(localStorage.getItem('basket'));
    for (let i = 0; i < basket.length; i++) {
      if (basket[i]['id'] === id) {
        const productId = basket[i]['id'];
        const productCount = basket[i]['count'];
        setCount(productCount);
        setDisable(true);
      }
    }
  }, []);
  return (
    <section className={style.products}>
      <figure className={style.product}>
        <NavLink
          onClick={addItemProduction}
          to='/catalog'
          className={style.product_link}
        >
          <img
            className={`${style.product_img} ${style.img_calc}`}
            src={images}
            alt='productImg'
          />
          <div className={style.product_title}>
            <h3 className={style.product_size}>{name}</h3>
            <div className={style.product_taste}>{taste}</div>
            <h3 className={style.product_price}>{price} руб.</h3>
          </div>
        </NavLink>
        <section className={style.product_buy}>
          <div className={style.product_buy_title}>
            <span onClick={dicrement} className={style.product_remove}>
              -
            </span>
            <span className={style.product_number}>{count}</span>
            <span onClick={icrement} className={style.product_add}>
              +
            </span>
          </div>
          {!disable ? (
            <button
              disabled={disable}
              onClick={() => {
                setDisable(true);
                addProduct();
              }}
              className={style.product_add_basket}
            >
              В корзину
            </button>
          ) : (
            <NavLink to='/basket'>
              <button
                className={`${style.product_add_basket} ${
                  disable && style.product_add_basket_buy
                }`}
              >
                Оплатить
              </button>
            </NavLink>
          )}
        </section>
      </figure>
    </section>
  );
};

export default Product;
