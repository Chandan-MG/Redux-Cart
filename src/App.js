import { Fragment, useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

import {useSelector, useDispatch} from 'react-redux';
import { uiActions } from './Store/ui-slice';
import Notification from './components/UI/Notifications';

let initial =true;

function App() {
  const dispatch = useDispatch();
  const isMyCart = useSelector(state => state.ui.cartIsVisible);
  const notification = useSelector(state => state.ui.notification);
  const cart = useSelector((state)=> state.cart);

  useEffect(()=>{
    const sendCartData = async ()=>{
      dispatch(uiActions.showNotification({
        status: "loading",
        message:"Sending your data...",
        title: 'Please Wait..'
      }));
      const response = await fetch('https://expense-tracker-dfeec-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      });

      if(!response.ok){
        throw new Error('Sending cart data failed');
      }
      
      dispatch(uiActions.showNotification({
        status: "success",
        message:"Successfully sent data...",
        title: 'Success..'
      }));

    };

    if(initial){
      initial=false;
      return;
    }

    sendCartData().catch(err=>{
      dispatch(uiActions.showNotification({
        status: "error",
        message:"Sending data failed...",
        title: 'Error..'
      }));
    })
  }, [cart, dispatch])

  return (
    <Fragment>
      {notification && (<Notification
         status={notification.status}
         title={notification.title}
         message={notification.message}
      />)}
      <Layout>
        {isMyCart && (<Cart />)}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
