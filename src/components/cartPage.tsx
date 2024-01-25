import { CartContext } from '../App';
import './cartpage.css';
import { NavBar } from './comp/navBar';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function CartPage() {
    const { cartItems, handleCartDelete } = useContext(CartContext);
    return (
        <>
        <NavBar pageName="cartPage"/>
            <div className="cart-main m-auto">
                <div className="cart-title">Cart</div>
                <div className="cart-items">
                    {cartItems.map((item, index) => (
                        <div key={index} className="cart-item">
                        <div className="cart-item-image"><img src={item.image} alt="" /></div>
                        <div className="cart-item-details">
                            <div className="cart-item-title"><Link to={item.productURL!} >{item.gameName}</Link></div>
                            <div className="cart-item-price">{item.price}</div>
                            <button className="cart-item-delete btn btn-primary my-1 py-1" onClick={() => handleCartDelete({id: item.id})}>Delete</button>
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
                        (<>
                        <div className="cart-total">
                        <div className="cart-total-title p-1">Total</div>
                        <div className="cart-total-price p-1">INR 5000</div>
                        </div>
                        <button className="cart-checkout p-1 btn btn-primary mx-1">Checkout</button>
                        </>) : (<div className="cart-empty">Cart is empty</div>))
                    }
                </div>
                <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div className="toast-header">
    <img src="..." className="rounded me-2" alt="..."/>
    <strong className="me-auto">Bootstrap</strong>
    <small>11 mins ago</small>
    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div className="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>
            </div>
        </>
    )
}

export { CartPage }