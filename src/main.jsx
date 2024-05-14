import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import RecipeContext from './contexts/RecipeContext.jsx'
import { Flip, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <RecipeContext>
      <App />
      <ToastContainer position='top-center' transition={Flip} closeOnClick={true} theme='dark'/>
    </RecipeContext>
  </BrowserRouter>
  
)
