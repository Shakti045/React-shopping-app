import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import  { Toaster } from 'react-hot-toast';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Store";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<BrowserRouter>
<Provider store={Store}>
    <App />
 <Toaster></Toaster>
 </Provider>
</BrowserRouter>
);
