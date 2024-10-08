import { connect } from 'react-redux';
import { selectedItemsAC } from '../../../redux/product-reducer';
import Catalog from './Catalog';

const mapStateToProps = (state) => {
  return {
    productCatalog: state.product.productCatalog,
  };
};

export default connect(mapStateToProps, { selectedItemsAC })(Catalog);
