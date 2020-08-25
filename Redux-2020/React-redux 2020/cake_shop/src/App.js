import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import HookIceCreamContainer from './components/HookIceCreamContainer';
import HookCakeContainer from './components/HookCakeContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake />
        <ItemContainer />{/*this is for checking purpose */}
        <HookCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <HookIceCreamContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
