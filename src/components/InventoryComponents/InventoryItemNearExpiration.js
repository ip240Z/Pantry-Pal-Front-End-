import React, { useState } from 'react';
import '../css/InventoryItemNearExpiration.css';

const InventoryItemNearExpiration = (props) => {
    const [showPopup, setShowPopup] = useState(false);
    const [quantity, setQuantity] = useState(0);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleResetQuantity = () => {
        setQuantity(0);
    };

    const handleRemoveItem = () => {
        // Implement the logic to remove the item here
    };

    const handleSubmit = () => {
        // Implement the logic to submit the quantity here
        setShowPopup(false); // Hide the popup after submission
    };

    return (
        <>
            <section className="box">
                <img className='image' src="https://picsum.photos/150" />
                <div className='infobox'>
                    <div>
                        <h1>{props.name}</h1>
                        <div>Qty: {props.quantity}</div>
                        <div>Date old: </div>
                    </div>

                    <div className={`popup ${showPopup ? 'show' : ''}`} onClick={togglePopup}>
                        <span className="popuptext" onClick={(e) => e.stopPropagation()}>
                            <div>
                                <button onClick={handleDecreaseQuantity}>-</button>
                                <span>{quantity}</span>
                                <button onClick={handleIncreaseQuantity}>+</button>
                            </div>
                            <button onClick={handleResetQuantity}>Reset</button>
                            <button onClick={handleRemoveItem}>Remove</button>
                            <button onClick={handleSubmit}>Submit</button>
                        </span>
                        ...
                    </div>
                </div>
            </section>
        </>
    );
};

export default InventoryItemNearExpiration;
