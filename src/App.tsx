import { useState, useEffect, useContext, createContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductPage } from './components/productPage.tsx';
import { LandingPage } from './components/landingPage.tsx';
import { ProductDetailPage } from './components/productDetailPage.tsx';
import { ErrorPage } from './components/errorPage.tsx';
import { CartPage } from './components/cartPage.tsx';

type cartItemProps = {
    id?: number,
    gameName?: string,
    productURL?: string,
    price?: number,
    image?: string,
}

export const CartContext = createContext<{
    cartItems: cartItemProps[];
    handleCartItems: (cartItem: cartItemProps) => void;
    handleCartDelete: (cartItem: cartItemProps) => void;
}>({
    cartItems: [],
    handleCartItems: () => { },
    handleCartDelete: () => { },
})

function App() {
    const [cartItems, setCartItems] = useState<cartItemProps[]>([]);
    let cartItemsId : (number | undefined)[] = [];

    useEffect(() => {
        cartItemsId = cartItems?.map((items) => items.id);
    }, [cartItems]);

    useEffect(() => {
        const storageCartItems = localStorage.getItem("cart");
        if (storageCartItems != null) {
            setCartItems(JSON.parse(storageCartItems));
        }
    }, []);

    function handleCartItems({ id, gameName, image, productURL }: cartItemProps) {
        if (cartItemsId.includes(id)) {
            return;
        }
        else {
            localStorage.setItem('cart', JSON.stringify([...cartItems, { id: id, gameName: gameName, price: id, image: image, productURL: productURL }]));
            setCartItems((prev) => (
                [...prev, { id: id, gameName: gameName, price: id, image: image, productURL: productURL }]
            ));
        }
    }

    function handleCartDelete({ id }: cartItemProps) {
        const newCartItems = cartItems.filter((item) => item.id !== id);
        localStorage.setItem('cart', JSON.stringify(newCartItems));
        setCartItems(newCartItems);
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <LandingPage />,
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
        {
            path: 'cart',
            element: <CartPage />,
        },
        {
            path: '*',
            element: <ErrorPage />,
        },
    ]);

    // useEffect(() => {
    //     console.log(cartItems, "Cart Items");
    //     localStorage.setItem('cartItems', JSON.stringify(cartItems));
    // }, [cartItems])

    return (
        <>
            <CartContext.Provider value={{ cartItems, handleCartItems, handleCartDelete }} >
                <RouterProvider router={router} />
            </CartContext.Provider>
        </>
    )
}

export default App
