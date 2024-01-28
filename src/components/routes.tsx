import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductPage } from './productPage.tsx';
import { LandingPage } from './landingPage.tsx';
import { ProductDetailPage } from './productDetailPage.tsx';
import { ErrorPage } from './errorPage.tsx';
import { CartPage } from './cartPage.tsx';

function Route() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <LandingPage />,
            errorElement: <ErrorPage />
        },
        {
            path: 'productPage',
            element: <ProductPage />,
            errorElement: <ErrorPage />,
        },
        {
            path: 'productPage/:productId',
            element: <ProductDetailPage />,
        },
        {
            path: 'cart',
            element: <CartPage />,
        },
        {
            path: '*',
            element: <ErrorPage />,
        },
    ]);

    return (
        <RouterProvider router={router} />
    )
}

export { Route }