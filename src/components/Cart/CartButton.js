
import { uiActions } from '../../Store/ui-slice';
import classes from './CartButton.module.css';
import {useDispatch, useSelector} from 'react-redux';

const CartButton = (props) => {

  const dispatch = useDispatch();
  const cartQuantity = useSelector(state => state.cart.totalQuantity);

  const mycartHandler = () => {
    dispatch(uiActions.toggle());
  }

  return (
    <button className={classes.button} onClick={mycartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span> 
    </button>
  );
};

export default CartButton;
