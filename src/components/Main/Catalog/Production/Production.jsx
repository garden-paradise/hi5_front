import React, { useEffect, useState } from 'react';
import style from '../Production/Production.module.css';
import NavLinks from '../../../../reusable_components/NavLinks/NavLinks';
import CaretLeft from '../../../../images/main/product/CaretLeft.svg';
import CaretRight from '../../../../images/main/product/CaretRight.svg';
import { NavLink } from 'react-router-dom';

const Production = ({ productCatalog, selectedItemsAC }) => {
  let images = productCatalog.map((item) => ({
    images: item.images,
    taste: item.taste,
    id: item.id,
    price: item.price,
  }));
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(images[count]);

  useEffect(() => {
    const itemProduct = JSON.parse(localStorage.getItem('itemProduct'));
    setItem(itemProduct);
  }, []);

  let addProduct = () => {
    const basket =
      JSON.parse(localStorage.getItem('basket')) == undefined
        ? []
        : JSON.parse(localStorage.getItem('basket'));
    let newBasket = [];
    let productInBasket = false;
    for (let i = 0; i < basket.length; i++) {
      if (basket[i]['id'] === item.id) {
        productInBasket = true;
      }
      newBasket.push(basket[i]);
    }
    if (!productInBasket) {
      newBasket.push({ id: item.id, count: 1 });
    }
    localStorage.setItem('basket', JSON.stringify(newBasket));
    localStorage.setItem('selectedItems', JSON.stringify(newBasket.length));
    selectedItemsAC(newBasket.length);
  };

  let leftImage = () => {
    let i = count ? count - 1 : images.length - 1;
    setCount(i < 0 ? images.length : i);
    setItem(images[i]);
  };

  let rightImage = () => {
    let i = count === images.length - 1 ? 0 : count + 1;
    setCount(i > images.length ? 0 : i);
    setItem(images[i]);
  };

  return (
    <section className={style.production}>
      <NavLinks
        data={[
          { url: 'home', name: 'Главная', active: false },
          { url: 'production', name: 'Продукция ', active: false },
          { url: 'catalog', name: 'Каталог', active: true },
        ]}
      />

      <div className={style.production_container}>
        <div className={style.production_image}>
          <img
            className={style.production_move}
            onClick={leftImage}
            src={CaretLeft}
            alt='CaretLeft'
          />
          <img className={style.production_img} src={item.images} alt='image' />
          <img
            className={style.production_move}
            onClick={rightImage}
            src={CaretRight}
            alt='CaretRight'
          />
        </div>
        <div className={style.production_info}>
          <div>
            <p className={style.production_info_name}>H5 LUX</p>
            <p className={style.production_info_taste}>{item.taste}</p>
          </div>
          <div className={style.production_info_prod}>
            <div className={style.production_info_name_tit}>
              Электронная сигарета
            </div>
            <div className={style.production_info_name_subtit}>
              - 3000 затяжек{' '}
            </div>
            <div className={style.production_info_name_subtit}>
              - RGB-подсветка{' '}
            </div>
            <div className={style.production_info_name_subtit}>
              - Аккумулятор 650 mAh
            </div>
            <div className={style.production_info_name_subtit}>
              - Разъём для подзарядки USB Type-C
            </div>
            <div className={style.production_info_name_subtit}>
              - Объём жидкости 10 мл
            </div>
            <div className={style.production_info_name_subtit}>
              - Более 20 вкусов
            </div>
          </div>
          <div className={style.production_info_price}>{item.price} руб.</div>
          <NavLink className={style.btn_dec} to='/basket'>
            <button
              onClick={() => {
                addProduct();
              }}
              className={style.product_add_basket}
            >
              Оплатить
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Production;
