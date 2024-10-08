import Basket from './Basket';
import { selectedItemsAC } from '../../../redux/product-reducer';
import { connect } from 'react-redux';

export default connect(undefined, { selectedItemsAC })(Basket);
