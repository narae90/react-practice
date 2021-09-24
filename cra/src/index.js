import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import App from './App.props'; //  Props 테스트
// import App from './App.state';    //  State 테스트
// import App from './App.function';   //  함수형 컴포넌트 테스트
// import App from './App.ref';  //  Ref Test
// import App from './App.context';

import reportWebVitals from './reportWebVitals';




//? 일단적인 랜더링
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


//? React Routing
import { BrowserRouter } from 'react-router-dom';
import App from './App.routing';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById("root")
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();