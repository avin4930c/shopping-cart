import { useState, useEffect, createContext } from 'react';
import { priceComp } from './components/comp/priceComp.ts';
import { Route } from './components/routes.tsx';
import { getAuth, signOut, User } from 'firebase/auth';
import { arrayRemove, arrayUnion, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from './config/firebase.ts';

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
    user: User | null;
    handleSignOut: () => void;
}>({
    cartItems: [],
    isLoading: false,
    handleCartItems: () => { },
    handleCartDelete: () => { },
    setIsLoading: () => { },
    user: null,
    handleSignOut: () => { },
})

function App() {
    const authApp = getAuth();

    const [cartItems, setCartItems] = useState<cartItemProps[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [user, setUser] = useState<User | null>(null);

    let cartItemsId: (number | undefined)[] = [];

    useEffect(() => {
        const unsubscribe = authApp.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, [authApp]);

    async function fetchCartItems() {
        if (user) {
            const cartItemsRef = doc(db, 'users', user.uid);
            try {
                const userDoc = await getDoc(cartItemsRef);
                if (userDoc.exists()) {
                    const data = userDoc.data();
                    if (data && data.cartItems) {
                        setCartItems(data.cartItems);
                    }
                } else {
                    await setDoc(cartItemsRef, {
                        cartItems: [],
                    });
                }
            }
            catch (error) {
                console.error(error);
            }
        }
    }

    useEffect(() => {
        fetchCartItems();
    }, [user]);

    useEffect(() => {
        cartItemsId = cartItems?.map((items) => items.id);
    }, [cartItems]);

    const handleSignOut = async () => {
        try {
            await signOut(authApp);
        } catch (error) {
            console.error(error);
        }
        setCartItems([]);
    };

    async function addCartItems(cartItem: cartItemProps) {

        if (!user) {
            return;
        }

        const userDocRef = doc(db, 'users', user.uid);
        try {
            await updateDoc(userDocRef, {
                cartItems: arrayUnion(cartItem),
            })
        }
        catch (error) {
            console.error(error);
            return;
        }

        setCartItems((prev) => (
            [...prev, cartItem]
        ));
    }

    async function handleCartDelete(cartItem: cartItemProps) {
        if (!user) {
            return;
        }

        const userDocRef = doc(db, 'users', user.uid);
        try {
            updateDoc(userDocRef, {
                cartItems: arrayRemove(cartItem),
            });
        }
        catch (error) {
            console.error(error);
            return;
        }

        setCartItems((prev) => prev.filter((item) => item.id !== cartItem.id));
    }

    function handleCartItems({ id, gameName, image, productURL }: cartItemProps) {
        const finalPrice = priceComp(id!);
        cartItemsId = cartItems?.map((items) => items.id); //fixed bug of repeating items in cart

        if (cartItemsId.includes(id)) {
            handleCartDelete({ id });
        }

        else {
            addCartItems({ id, gameName, price: finalPrice, image, productURL});
        }
    }

    return (
        <>
            <CartContext.Provider value={{ cartItems, isLoading, handleCartItems, handleCartDelete, setIsLoading, user, handleSignOut }} >
                <Route />
            </CartContext.Provider>
        </>
    )
}

export default App
