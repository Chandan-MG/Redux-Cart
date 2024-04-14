import { cartActions } from '../../Store';
import classes from './CartButton.module.css';
import {useDispatch} from 'react-redux';

const CartButton = (props) => {

  const dispatch = useDispatch();

  const mycartHandler = () => {
    dispatch(cartActions.toggleCart());
  }

  return (
    <button className={classes.button} onClick={mycartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
