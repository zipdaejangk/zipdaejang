import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import App from './App';

/*-------- 회원가입 이동 링크 ---------------*/ 

/*-------- 중개사 회원가입 ---------------*/ 
import Estate from './Login/Estate';
import EstateCertify from './Login/EstateCertify';

/*--------일반 회원 회원가입 ---------------*/ 
import Customer from './Login/Customer';
import CustomerCertify from './Login/CustomerCertify';


ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route exact path = "/" element={<App />}/> { /*MainPage*/ }
        <Route path = "/Estate" element={<Estate />} /> { /*estate*/ }
        <Route path = "Customer" element={<Customer />}/> { /*Customer*/ }
        <Route path = "Customer/CustomerCertify" element={<CustomerCertify />}/> { /*CustomerCertify*/ }
        <Route path = "Customer/EstateCertify" element={<EstateCertify />}/> { /*EstateCertify*/ }
      </Routes>
      {/*<Route path = "/Conatact" component={} /> Conatact*/ }
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
