import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductPage } from './products-page/productPage.tsx';
import { LandingPage } from './landing-page/landingPage.tsx';
import { ProductDetailPage } from './product-detail-page/productDetailPage.tsx';
import { ErrorPage } from './errorPage.tsx';
import { CartPage } from './cart-page/cartPage.tsx';
import AuthPage from './auth/auth.tsx';
import ProfilePage from './profile-page/profilePage.tsx';

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
        {
            path: '/auth',
            element: <AuthPage />,
        },
        {
            path: '/profile',
            element: <ProfilePage />,
        }
    ]);

    return (
        <RouterProvider router={router} />
    )
}

export { Route }