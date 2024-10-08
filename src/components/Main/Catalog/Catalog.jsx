import React from 'react';
import style from '../Catalog/Catalog.module.css';
import Product from '../../../reusable_components/Product/Product';
import NavLinks from '../../../reusable_components/NavLinks/NavLinks';

const Catalog = ({ productCatalog, selectedItemsAC }) => {
  return (
    <section className={style.catalog}>
      <NavLinks
        data={[
          { url: 'home', name: 'Главная', active: false },
          { url: 'production', name: 'Продукция', active: true },
        ]}
      />
      <div className={style.catalog_container}>
        <div className={style.catalog_info}>
          <hr className={style.catalog_info_hr} />
        </div>

        <div className={style.catalog_items}>
          {productCatalog.map((post) => (
            <Product
              key={post.id}
              name={post.name}
              taste={post.taste}
              price={post.price}
              images={post.images}
              id={post.id}
              selectedItemsAC={selectedItemsAC}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
