
import './App.css';
import Imagepage from './components/imagepage/imagepage';
import Signup from './pages/Signup/Signup';
import Signin from './pages/Signin/Signin';
import Header from './components/Bookstore-header/Header';
import Footer from './components/Bookstore-footer/Footer';
import Books from './components/Book-list/Books';
import Home from './pages/Bookstore-Home/Home';
import View from './pages/Bookstore-View/View';
import Cart from './pages/Bookstore-cart/Cart';
import Wishlist from './pages/Bookstore-wishlist/Wishlist';
import Order from './pages/Bookstore-ordersuccess/Order';
import Bookdetails from './pages/Bookstore-cart/Bookdetails';
import OrderSummary from './pages/Bookstore-cart/OrderSummary';
import RouterNav from './Router/Router';
import { Provider } from 'react-redux';
import store from './redux/store';
import CustomerDetails from './pages/Bookstore-cart/CustomerDetails';

function App() {
  return (
    <div className="App">
      {/* <Imagepage/> */}
      {/* <Signup/> */}
      {/* <Signin/> */}
      {/* <Header/> */}
      {/* <Books/> */}
      {/* <Footer/> */}
      {/* <Home/> */}
      {/* <View/> */}
      {/* <Bookdetails/> */}
      {/* <Cart/> */}
      {/* <Wishlist/> */}
      {/* <Order/> */}
      {/* <CustomerDetails/> */}
      {/* <OrderSummary/> */}
      <Provider store={store}>
          <RouterNav/>
        </Provider>
        
        

    </div>
  );
}

export default App;
