import React, { useState } from 'react';
import '../css/InventoryItemNearExpiration.css';

const InventoryItemNearExpiration = (props) => {
    const [showPopup, setShowPopup] = useState(false);
    const [quantity, setQuantity] = useState(1);

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
        setQuantity(1);
    };

    const handleRemoveItem = () => {
        // Implement the logic to remove the item here
    };

    const handleSubmit = () => {
        // Implement the logic to submit the quantity here
    };

    return (
        <>
            <section className="box">
                <img className='image' src="https://picsum.photos/150" />
                <div className='infobox'>
                    <div>
                        {props.name}
                        <div>Qty: {props.quantity}</div>
                        <div>Date old: </div>
                    </div>

                    <div className='popup' element="myPopup">
                        <button className="open-button" onClick={togglePopup}>...</button>
                    </div>
                    {showPopup && (
                        <div className='popupBox'>
                            <div>
                                <button onClick={handleDecreaseQuantity}>-</button>
                                <span>{quantity}</span>
                                <button onClick={handleIncreaseQuantity}>+</button>
                            </div>
                            <button onClick={handleResetQuantity}>Reset</button>
                            <button onClick={handleRemoveItem}>Remove</button>
                            <button onClick={handleSubmit}>Submit</button>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default InventoryItemNearExpiration;
