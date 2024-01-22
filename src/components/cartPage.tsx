import './cartpage.css';

function CartPage() {
    return (
        <>
            <div className="cart-main">
                <div className="cart-title">Cart</div>
                <div className="cart-items">
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
                    </div>
                    <div className="cart-item">
                        <div className="cart-item-image"><img src="https://wallpapers.com/images/hd/gta-5-landscape-art-2a58lbxzfpa0xjg7.jpg" alt="" /></div>
                        <div className="cart-item-details">
                            <div className="cart-item-title">Grand Theft Auto V</div>
                            <div className="cart-item-price">INR 5000</div>
                            <button className="cart-item-delete btn btn-primary my-1 py-1">Delete</button>
                        </div>
                    </div>
                </div>
                <div className="cart-end">
                    <div className="cart-total">
                        <div className="cart-total-title p-1">Total</div>
                        <div className="cart-total-price p-1">INR 5000</div>
                    </div>
                    <button className="cart-checkout p-1 btn btn-primary mx-1">Checkout</button>
                </div>
            </div>
        </>
    )
}

export { CartPage }