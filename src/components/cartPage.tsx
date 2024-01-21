import './cartpage.css';

function CartPage() {
    return (
        <>
            <div className="cart-main">
                <div className="cart-title">Cart</div>
                <div className="cart-items">
                    <div className="cart-item bg-white">
                        <div className="cart-item-image"><img src="https://wallpapers.com/images/hd/gta-5-landscape-art-2a58lbxzfpa0xjg7.jpg" alt="" /></div>
                        <div className="cart-item-details">
                            <div className="cart-item-title bg-white">Grand Theft Auto V</div>
                            <div className="cart-item-price bg-primary">INR 5000</div>
                            <div className="cart-item-delete">Delete</div>
                        </div>
                    </div>
                    <div className="cart-item bg-white">
                        <div className="cart-item-image"><img src="https://wallpapers.com/images/hd/gta-5-landscape-art-2a58lbxzfpa0xjg7.jpg" alt="" /></div>
                        <div className="cart-item-details">
                            <div className="cart-item-title">Grand Theft Auto V</div>
                            <div className="cart-item-price">INR 5000</div>
                        </div>
                    </div>
                </div>
                <div className="cart-total">
                    <div className="cart-total-title">Total</div>
                    <div className="cart-total-price">INR 5000</div>
                </div>
                <div className="cart-checkout">Checkout</div>
            </div>
        </>
    )
}

export { CartPage }