import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import Header from './components/Header';
import Calculator from './components/Calculator';

import reducers from './reducers';
import './styles/main.scss';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <div className="App">
          <Header />
          <Calculator />
        </div>
      </Provider>
    );
  }
}

export default App;
