import { CartContext } from '../../App';
import './cartpage.css';
import { NavBar } from '../comp/navBar';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function CartPage() {
    const { user, cartItems, handleCartDelete } = useContext(CartContext);
    const cartPriceTotal = cartItems.map((items) => items.price).reduce((a = 0, b = 0) => a + b, 0);

    return (
        <>
            <NavBar pageName="cartPage" />
            <div className="cart-main m-auto pb-2">
                <div className="cart-title">Cart</div>
                {user ? (
                    <>
                        <div className="cart-items">
                            {cartItems.map((item, index) => (
                                <div key={index} className="cart-item">
                                    <Link to={item.productURL!}><img src={item.image} className="cart-item-image" alt="" /></Link>
                                    <div className="cart-item-details">
                                        <div className="cart-item-name-container d-flex justify-content-around align-items-center pt-2">
                                            <div className="cart-item-title"><Link to={item.productURL!}>{item.gameName}</Link></div>
                                            <button className="cart-item-delete btn btn-warning my-1 py-1" onClick={() => handleCartDelete({ id: item.id, gameName: item.gameName, image: item.image, price: item.price, productURL: item.productURL })}><i className="fa-solid fa-trash"></i></button>
                                        </div>
                                        <div className="cart-item-price">INR {item.price}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="cart-end">
                            {cartItems.length > 0 ? (
                                <>
                                    <div className="cart-total">
                                        <div className="cart-total-title p-1">Total</div>
                                        <div className="cart-total-price p-1">INR {cartPriceTotal}</div>
                                    </div>
                                    <button className="cart-checkout p-1 btn mx-1">Checkout</button>
                                </>
                            ) : (
                                <div className="cart-empty m-auto">Cart is empty</div>
                            )}
                        </div>
                    </>
                ) : (
                    <div className="cart-login-prompt m-auto text-center">
                        <p>Please <Link to="/profile" className="text-primary">log in</Link> to Add or View your Cart Items.</p>
                    </div>
                )}
            </div>
        </>
    );
}

export { CartPage };