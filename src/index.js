import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import HelloWorld from './state-drills/HelloWorld';
//import Bomb from './state-drills/Bomb';
import Roulette from './state-drills/Roulette'
import * as serviceWorker from './serviceWorker';
//import ShowBox from './state-drills/ShowBox';

ReactDOM.render(
  <React.StrictMode>
    {/*<App />*/}{/**/}
    {/*<HelloWorld />*/}
    {/*<ShowBox />*/}
    {/*<Bomb />*/}
    <Roulette />
    
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
