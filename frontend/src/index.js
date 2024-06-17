import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/Login";


const root = ReactDOM.createRoot(document.getElementById('root'));

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/restaurants",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/FAQ",
        element: <FAQ />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/login",
        element: <Login />,
      }
    ],
    errorElement: <Error />
  }

])

root.render(
  <React.StrictMode>
    <RouterProvider router={AppRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();