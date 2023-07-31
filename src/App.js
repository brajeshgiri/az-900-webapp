import './App.css';
// import { Button, Counter } from 'react-lib-052023';
import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store/store'; 


 
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        Hello World
      </div>
    </Provider>

  );
}

export default App;
