import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import style from '../Main/Main.module.css';
import AboutCompany from './AboutCompany/AboutCompany';
import BenefitsH5 from './AboutCompany/BenefitsH5/BenefitsH5';
import Documentation from './AboutCompany/Documentation/Documentation';
import Comanda from './AboutCompany/Comanda/Comanda';
import Partners from './Partners/Partners';
import Events from './AboutCompany/Events/Events';
import FAQ from './AboutCompany/FAQ/FAQ';
import Distributor from './Partners/Distributor/Distributor';
import Reviews from './Reviews/Reviews';
import LUX from './LUX/LUX';
import HomeContainer from './Home/HomeContainer';
import CatalogContainer from './Catalog/CatalogContainer';
import Checkout from './Basket/Checkout/Checkout';
import BasketContainer from './Basket/BasketContainer';
import Verification from './Verification/Verification';
import ProductionContainer from './Catalog/Production/ProductionContainer';
import MyOrder from './Basket/MyOrder/MyOrder';
import PersonalPolicy from './Policy/PersonalPolicy/PersonalPolicy';

const Main = () => {
  return (
    <main className={style.main}>
      <Switch>
        <Route exact path='/' component={HomeContainer} />
        <Route path='/documentation' component={Documentation} />
        <Route path='/orders' component={MyOrder} />
        <Route path='/about' component={AboutCompany} />
        <Route path='/verification' component={Verification} />
        <Route path='/production' component={CatalogContainer} />
        <Route path='/partners' component={Partners} />
        <Route path='/benefits' component={BenefitsH5} />
        <Route path='/comand' component={Comanda} />
        <Route path='/events' component={Events} />
        <Route path='/basket' component={BasketContainer} />
        <Route path='/reviews' component={Reviews} />
        <Route path='/catalog' component={ProductionContainer} />
        <Route path='/LUX' component={LUX} />
        <Route path='/distributor' component={Distributor} />
        <Route path='/FAQ' component={FAQ} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/myOrder' component={MyOrder} />
        <Route exact path='/personal_policy' component={PersonalPolicy} />
        <Redirect exact from='*' to='/' />
      </Switch>
    </main>
  );
};

export default Main;
