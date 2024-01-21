import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import { ProductPage } from './components/productPage.tsx';
import { LandingPage } from './components/landingPage.tsx';
import { ProductDetailPage } from './components/productDetailPage.tsx';
import { ErrorPage } from './components/errorPage.tsx';
import { CartPage } from './components/cartPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <CartPage />,
    errorElement: <ErrorPage />
  },
  {
    path: 'productPage',
    element: <ProductPage />,
  },
  {
    path: 'productPage/:productId',
    element: <ProductDetailPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
