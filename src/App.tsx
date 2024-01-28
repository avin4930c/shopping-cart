import { useState, useEffect, createContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductPage } from './components/productPage.tsx';
import { LandingPage } from './components/landingPage.tsx';
import { ProductDetailPage } from './components/productDetailPage.tsx';
import { ErrorPage } from './components/errorPage.tsx';
import { CartPage } from './components/cartPage.tsx';
import { priceComp } from './components/comp/priceComp.ts';

type cartItemProps = {
    id?: number,
    gameName?: string,
    productURL?: string,
    price?: number,
    image?: string,
}

export const CartContext = createContext<{
    cartItems: cartItemProps[];
    isLoading: boolean;
    handleCartItems: (cartItem: cartItemProps) => void;
    handleCartDelete: (cartItem: cartItemProps) => void;
    setIsLoading: (isLoading: boolean) => void;
}>({
    cartItems: [],
    isLoading: false,
    handleCartItems: () => { },
    handleCartDelete: () => { },
    setIsLoading: () => {},
})

function App() {
    const [cartItems, setCartItems] = useState<cartItemProps[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
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
        const finalPrice = priceComp(id!);
        cartItemsId = cartItems?.map((items) => items.id); //fixed bug of repeating items in cart
        if (cartItemsId.includes(id)) {
            handleCartDelete({ id: id });
        }
        else {
            localStorage.setItem('cart', JSON.stringify([...cartItems, { id: id, gameName: gameName, price: finalPrice, image: image, productURL: productURL }]));
            setCartItems((prev) => (
                [...prev, { id: id, gameName: gameName, price: finalPrice, image: image, productURL: productURL }]
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

    useEffect(() => {
        console.log(isLoading, "isLoading");
    }, [isLoading]);

    // useEffect(() => {
    //     console.log(cartItems, "Cart Items");
    //     localStorage.setItem('cartItems', JSON.stringify(cartItems));
    // }, [cartItems])

    return (
        <>
            <CartContext.Provider value={{ cartItems, isLoading, handleCartItems, handleCartDelete, setIsLoading }} >
                <RouterProvider router={router} />
            </CartContext.Provider>
        </>
    )
}

export default App
