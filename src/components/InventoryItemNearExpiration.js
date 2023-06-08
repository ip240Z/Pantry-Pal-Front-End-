import './InventoryItemNearExpiration.css'

const InventoryItemNearExpiration = (props) => {
    return (
        <>
            <section className="itemNearExpiration">
                <img src="https://picsum.photos/150"/>
                <div>{props.name}
                <div>Qty: {props.quantity}</div>
                <div>Date old: </div>
                    
                    {/* <div>{props.name}</div> */}
                </div>   
                
            </section>
        </>


    )
}

export default InventoryItemNearExpiration;