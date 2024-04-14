import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

import {useSelector} from 'react-redux';

function App() {

  const isMyCart = useSelector(state => state.cart.isMyCart);
  return (
    <Layout>
      {isMyCart && (<Cart />)}
      <Products />
    </Layout>
  );
}

export default App;
