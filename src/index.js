import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Heaer from './Components/Header/Header';
import Section from './Components/Section/Section';
import Footer from './Components/Footer/Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Heaer/>
    <Section/>
    <Footer/>
  </React.StrictMode>
);
reportWebVitals();
