import "../css/InventoryItem.css"

let InventoryItem = (props) => {

    return( 
        <article className="box">
            <header>
                <span>
                    {props.name}
                </span>
            </header>
            <body>
                <div> 
                    <img src="https://picsum.photos/150" alt="" />
                </div>
                
            </body>
        </article>
    )
}

export default InventoryItem;
