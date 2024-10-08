import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { Input } from '../../utils/validators/Forms/ValidationForms';
import style from '../SearchInput/SearchInput.module.css';
import search from '../../images/main/home/search.svg';

const afterSubmit = (result, dispatch) => dispatch(reset('search'));

const SearchInput = (props) => {
  return (
    <section className={style.searchInput}>
      <img
        className={style.searchInput_form_img}
        src={search}
        alt='searchImg'
      />
      <form className={style.searchInput_form}>
        <Field
          className={style.searchInput_form_input}
          name='text'
          component={Input}
          type='text'
          placeholder='Искать'
          required
        />
      </form>
    </section>
  );
};

export default reduxForm({
  form: 'search',
  onSubmitSuccess: afterSubmit,
})(SearchInput);
