import SentenceGenerator from './components/SentenceGenerator';
import configureStore from './store';
import React from 'react';
import { Provider } from 'react-redux';
import './App.css';

const App = () => (
  <Provider store={configureStore()}>
    <div className='app'>
      <SentenceGenerator />
    </div>
  </Provider>
);

export default App;
