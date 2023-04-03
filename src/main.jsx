import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/Header/About';
import Contact from './components/Header/Contact';
import Header from './components/Header/Header';


let router = createBrowserRouter([
  {
    path: "/home",
    element: <App></App>
  },
  {
    path: "/about",
    element: <About></About>
  },
  {
    path: "/contact",
    element: <Contact></Contact>
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


<Header></Header>
    <RouterProvider

      router={router}
    ></RouterProvider>


  </React.StrictMode>,
)
