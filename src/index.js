import './index.css';
import React from 'react';
import App from './App';
import ReactDomClient from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
const root = ReactDomClient.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

