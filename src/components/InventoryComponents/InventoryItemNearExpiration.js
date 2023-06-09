import '../css/InventoryItemNearExpiration.css'

const InventoryItemNearExpiration = (props) => {
    return (
        <>
            <section className="box">
                <img className='image' src="https://picsum.photos/150" />
                <div className='infobox'>
                    <div>{props.name}
                        <div>Qty: {props.quantity}</div>
                        <div>Date old: </div>
                    </div>
                    <div className='popTroxOption'>
                        <button class="open-button" onclick="openForm()">...</button>

                    </div>
                    {/* <div>{props.name}</div> */}
                </div>

            </section>
        </>


    )
}

export default InventoryItemNearExpiration