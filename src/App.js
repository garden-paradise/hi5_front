import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import style from './App.module.css';
import Footer from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';
import Examination from './components/Main/Examination/Examination';
import Main from './components/Main/Main';
import ChatDots from './reusable_components/ChatDots/ChatDots';
import ScrollToTop from './utils/scrollToTop.js';

const App = ({ setExamination }) => {
  // if (!setExamination) {
  //   return <Redirect to={'/examination'} />;
  // }

  return (
    <section className={style.app_container}>
      <ScrollToTop />
      {setExamination ? (
        <div>
          <HeaderContainer />
          <Main />
          <ChatDots />
          <Footer />
        </div>
      ) : (
        <Examination />
      )}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    setExamination: state.product.setExamination,
  };
};

export default connect(mapStateToProps, { undefined })(App);
