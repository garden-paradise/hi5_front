import { connect } from 'react-redux';
import { selectedItemsAC } from '../../../../redux/product-reducer';
import Production from './Production';

const mapStateToProps = (state) => {
  return {
    productCatalog: state.product.productCatalog,
  };
};

export default connect(mapStateToProps, { selectedItemsAC })(Production);
