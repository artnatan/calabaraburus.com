import React from 'react';
// import { Provider } from 'react-redux';
// import { BrowserRouter } from "react-router-dom"
// import Layout from './pages/hoks/Layout.js';
// import store from './store';

import * as ReactDOMClient from 'react-dom/client';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    {/* <Provider store={store}>

      <BrowserRouter>
        <Layout> */}
    <App />
    {/* </Layout>
      </BrowserRouter>

    </Provider> */}
  </React.StrictMode>
);


reportWebVitals();
