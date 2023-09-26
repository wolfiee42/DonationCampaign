import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Compoents/Root/Root.jsx';
import Home from './Compoents/Home/Home.jsx';
import Donation from './Compoents/Donation/Donation.jsx';
import Statistics from './Compoents/Statistics/statistics.jsx';
import Details from './Compoents/Details/Details';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../public/data.json')
      },
      {
        path: '/donation',
        element: <Donation></Donation>,
        loader: () => fetch('../public/data.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/donationdetails/:id',
        element: <Details></Details>,
        loader: () => fetch('../public/data.json')
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
