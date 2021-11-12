import '@/stylestesting/main.scss';
//import "@/styles/components/header.scss";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';
const App = props => {
  const {Component, pageProps} = props;
  return <Component {...pageProps} />;
};
export default App;
