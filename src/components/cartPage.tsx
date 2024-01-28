import { CartContext } from '../App';
import './cartpage.css';
import { NavBar } from './comp/navBar';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function CartPage() {
    const { cartItems, handleCartDelete } = useContext(CartContext);
    const cartPriceTotal = cartItems.map((items) => items.price).reduce((a = 0, b = 0   ) => a + b, 0);
    return (
        <>
            <NavBar pageName="cartPage" />
            <div className="cart-main m-auto pb-2">
                <div className="cart-title">Cart</div>
                <div className="cart-items">
                    {cartItems.map((item, index) => (
                        <div key={index} className="cart-item">
                            <Link to={item.productURL!} ><img src={item.image} className="cart-item-image" alt="" /></Link>
                            <div className="cart-item-details">
                                <div className="cart-item-name-container d-flex justify-content-around align-items-center pt-2">
                                <div className="cart-item-title"><Link to={item.productURL!} >{item.gameName}</Link></div>
                                <button className="cart-item-delete btn btn-warning my-1 py-1" onClick={() => handleCartDelete({ id: item.id })}><i className="fa-solid fa-trash"></i></button>
                                </div>
                                <div className="cart-item-price">INR {item.price}</div>
                            </div>
                        </div>
                    ))}
                    {/* <div className="cart-item">
                        <div className="cart-item-image"><img src="https://wallpapers.com/images/hd/gta-5-landscape-art-2a58lbxzfpa0xjg7.jpg" alt="" /></div>
                        <div className="cart-item-details">
                            <div className="cart-item-title">Grand Theft Auto</div>
                            <div className="cart-item-price">INR 5000</div>
                            <button className="cart-item-delete btn btn-primary my-1 py-1">Delete</button>
                        </div>
                    </div>
                    <div className="cart-item">
                        <div className="cart-item-image"><img src="https://wallpapers.com/images/hd/gta-5-landscape-art-2a58lbxzfpa0xjg7.jpg" alt="" /></div>
                        <div className="cart-item-details">
                            <div className="cart-item-title">Grand Theft Auto V</div>
                            <div className="cart-item-price">INR 5000</div>
                            <button className="cart-item-delete btn btn-primary my-1 py-1">Delete</button>
                        </div>
                    </div>
                    <div className="cart-item">
                        <div className="cart-item-image"><img src="https://wallpapers.com/images/hd/gta-5-landscape-art-2a58lbxzfpa0xjg7.jpg" alt="" /></div>
                        <div className="cart-item-details">
                            <div className="cart-item-title">Grand Theft Auto V</div>
                            <div className="cart-item-price">INR 5000</div>
                            <button className="cart-item-delete btn btn-primary my-1 py-1">Delete</button>
                        </div>
                    </div> */}
                </div>
                <div className="cart-end">
                    {
                        (cartItems.length > 0 ?
                            (
                            <>
                                <div className="cart-total">
                                    <div className="cart-total-title p-1">Total</div>
                                    <div className="cart-total-price p-1">INR {cartPriceTotal}</div>
                                </div>
                                <button className="cart-checkout p-1 btn mx-1">Checkout</button>
                            </>
                            ) : (<div className="cart-empty m-auto">Cart is empty</div>))
                    }
                </div>
            </div>
        </>
    )
}

export { CartPage }