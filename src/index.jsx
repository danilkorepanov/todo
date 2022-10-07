import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/screen/Home/Home';
import './index.css';
import Layout from './components/Layout/Layout'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <Home />

    </Layout>

  </React.StrictMode>
);

