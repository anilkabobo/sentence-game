import SentenceGenerator from './components/SentenceGenerator.react';
import configureStore from './store';
import React from 'react';
import questions from './data/initialQuestions';
import { Provider } from 'react-redux';
import './App.css';

const App = () => (
  <Provider store={configureStore()}>
    <div className='app'>
      <SentenceGenerator questions={questions} />
    </div>
  </Provider>
);

export default App;
