import "./InventoryItem.css"

let InventoryItem = (props) => {

    return (
        <article>
            <header>
                <span>
                    {props.name}
                </span>
            </header>
            <body className="box">
                <div> Image goes here
                    <img src="" alt="" />
                </div>
                <div className="InventoryItemBtns">
                    <button>
                        add to inv
                    </button>
                    <button>
                        Remove from list
                    </button>
                </div>
            </body>
        </article>
    )
}

export default InventoryItem;
