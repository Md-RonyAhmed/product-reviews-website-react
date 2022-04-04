import React from 'react';
import App from './App';
import ReactDomClient from "react-dom/client";
const root = ReactDomClient.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

