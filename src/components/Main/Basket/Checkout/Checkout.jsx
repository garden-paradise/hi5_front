import React, { useEffect, useState } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import {
  InputCheckout,
  InputEmailCheckout,
} from '../../../../utils/validators/Forms/ValidationForms';
import style from '../Checkout/Checkout.module.css';
import line from '../../../../images/main/basket/Line 48.png';
import {
  emailNoReq,
  phone,
  required,
} from '../../../../utils/validators/validators';
import axios from 'axios';

const afterSubmit = (result, dispatch) => dispatch(reset('checkout'));

const Checkout = ({ handleSubmit }) => {
  const [totalPrice, setTotal] = useState(0);
  const [myBasket, setMyBasket] = useState(0);
  const [saleCount, setSaleCount] = useState(null);
  const [totalFinal, setTotalFinal] = useState(0);
  const [buySuc, setBuySuc] = useState(false);

  useEffect(() => {
    const total = JSON.parse(localStorage.getItem('checkout'));
    for (var key in total) {
      switch (key) {
        case 'total':
          setTotal(total[key]);
          break;
        case 'totalFinal':
          setTotalFinal(total[key]);
          break;
        case 'discount':
          setSaleCount(total[key]);
          break;
        default:
      }
    }
    const basketItems = JSON.parse(localStorage.getItem('basket'));
    let basketItemsArr = [];
    basketItems.forEach((item) =>
      basketItemsArr.push(`${item.taste} - ${item.count} шт.`)
    );
    setMyBasket(basketItemsArr + '');
  }, []);

  const handleSend = async ({
    myName,
    myEmail,
    myNumber,
    myMessage,
    myAddres,
  }) => {
    let myTitle = 'Оформление заказа';
    let myCheck = totalPrice - totalFinal;
    try {
      await axios.post(
        'https://h5backend-338216.ew.r.appspot.com/mails/send_mail',
        {
          myTitle,
          myName,
          myEmail,
          myNumber,
          myMessage,
          myAddres,
          myBasket,
          myCheck,
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className={style.basket}>
      <div className={style.basket_container}>
        <div className={style.basket_div}>
          <h1 className={style.basket_title}>Оформление заказа</h1>

          <div className={style.basket_items_buy}>
            <div className={style.basket_items_buy_form}>
              <h3 className={style.basket_items_buy_form_t}>
                Данные покупателя
              </h3>
              <form className={style.searchInput_form}>
                <Field
                  name='myName'
                  component={InputCheckout}
                  validate={[required]}
                  type='text'
                  placeholder='ФИО *'
                />
                <div className={style.searchInput_form_block}>
                  <Field
                    name='myEmail'
                    component={InputEmailCheckout}
                    validate={[emailNoReq]}
                    type='email'
                    placeholder='E-mail'
                  />
                  <Field
                    name='myNumber'
                    component={InputCheckout}
                    validate={[required, phone]}
                    type='number'
                    placeholder='Телефон *'
                  />
                </div>
                <Field
                  name='myAddres'
                  component={InputCheckout}
                  validate={[required]}
                  type='text'
                  placeholder='Адрес доставки *'
                />
              </form>
              {buySuc && (
                <p className={style.basket_items_buy_sucessful}>
                  Спасибо! Ваш заказ находится в обработке. Скоро наш менеджер
                  свяжется с Вами для уточнения деталей (пн-пт 10:00-18:00).
                </p>
              )}
            </div>

            <img className={style.basket_items_img} src={line} alt='images' />

            <section className={style.basket_items_receipt}>
              <div className={style.basket_receipt}>
                <div className={style.basket_receipt_div}>
                  <div className={style.basket_receipt_title}>
                    Общая стоимость
                  </div>
                  <div className={style.basket_receipt_money}>
                    <div className={style.basket_receipt_num}>{totalPrice}</div>
                    <div className={style.basket_receipt_val}> руб</div>
                  </div>
                </div>
                <div className={style.basket_receipt_div}>
                  <div className={style.basket_receipt_title}>
                    Скидка {`${saleCount}%`}
                  </div>
                  <div className={style.basket_receipt_money}>
                    <div className={style.basket_receipt_num}>
                      {totalFinal}{' '}
                    </div>
                    <div className={style.basket_receipt_val}> руб</div>
                  </div>
                </div>
                <div className={style.basket_receipt_div}>
                  <div className={style.basket_receipt_title}>Доставка</div>
                  <div className={style.basket_receipt_money}>
                    <div className={style.basket_receipt_num}>Бесплатно</div>
                    {/* <div className={style.basket_receipt_val}> руб</div> */}
                  </div>
                </div>

                <div
                  className={`${style.basket_receipt_div} ${style.basket_receipt_div_sum}`}
                >
                  <div
                    className={`${style.basket_receipt_title} ${style.basket_items_receipt_t}`}
                  >
                    Оплата наличными
                  </div>
                  <div className={style.basket_receipt_money}>
                    <div className={style.basket_receipt_num}>
                      {totalPrice - totalFinal}
                    </div>
                    <div className={style.basket_receipt_val}> руб</div>
                  </div>
                </div>
                <div className={style.basket_receipt_div}>
                  <div
                    className={`${style.basket_receipt_title} ${style.basket_items_receipt_t}`}
                  >
                    Итого
                  </div>
                  <div className={style.basket_receipt_money}>
                    <div className={style.basket_receipt_num}>
                      {totalPrice - totalFinal}
                    </div>
                    <div className={style.basket_receipt_val}> руб</div>
                  </div>
                </div>

                <button
                  onClick={handleSubmit((data) => {
                    handleSend(data);
                    setBuySuc(true);
                  })}
                  className={style.basket_receipt_btn}
                >
                  Оформить заказ
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default reduxForm({
  form: 'checkout',
  onSubmitSuccess: afterSubmit,
})(Checkout);
