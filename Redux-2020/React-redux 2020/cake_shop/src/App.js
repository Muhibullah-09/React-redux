import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './components/CakeContainer';
import store from './redux/store';
import HookCakeContainer from './components/HookCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HookCakeContainer />
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
