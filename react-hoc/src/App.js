import React from 'react';
import logo from './logo.svg';
import LoginStatus from './LoginStatus';
import ShopCart from './ShopCart';
import WithLogin from './withLogin';
import './App.css';

// const WithLoginStatus = WithLogin(LoginStatus);
// const WithShopCart = WithLogin(ShopCart);

function App() {
  return (
    <React.Fragment>
      <LoginStatus />
      <ShopCart />
      {/* <WithLoginStatus></WithLoginStatus>
      <WithShopCart a='1' b='2'></WithShopCart> */}
    </React.Fragment>

    // <>
    //   <LoginStatus />
    //   <ShopCart />
    // </>
  );
}

export default App;
