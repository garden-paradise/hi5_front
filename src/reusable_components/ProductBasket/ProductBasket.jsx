import React, { useEffect, useState } from 'react';
import style from '../ProductBasket/ProductBasket.module.css';
import deleteImg from '../../images/main/basket/delete.svg';

const ProductBasket = ({
  id,
  name,
  taste,
  price,
  images,
  countB,
  addProductBuyBasket,
  addProductDelete,
}) => {
  const [count, setCount] = useState(countB);
  let icrement = () => {
    setCount(count + 1);
    let num = count;
    addProductBuyBasket(id, num + 1);
  };
  let dicrement = () => {
    count > 1 && setCount(count - 1);
    let num = count;
    count > 1 && addProductBuyBasket(id, num - 1);
  };
  return (
    <section className={style.products}>
      <figure className={style.product}>
        <img
          className={`${style.product_img} ${style.img_calc}`}
          src={images}
          alt='productImg'
        />
        <div className={style.product_title}>
          <h3 className={style.product_size}>{`H5 ${name}`}</h3>
          <div className={style.product_taste}>{taste}</div>
          <h3 className={style.product_price}>{price} руб.</h3>
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
          </section>
        </div>
        <img
          onClick={() => addProductDelete(id)}
          className={style.product_delete}
          src={deleteImg}
          alt='images'
        />
      </figure>
    </section>
  );
};

export default ProductBasket;
