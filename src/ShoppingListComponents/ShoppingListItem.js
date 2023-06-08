import "../components/css/ShoppingListItem.css"

let ShoppingListItem = (props) => {

    return( 
        <article className="shoppingListItem">
            <header>
                <span>
                    {props.name}
                </span>
            </header>
            <body>
                <div> Image goes here
                    <img src="" alt="" />
                </div>
                <div className="shoppingListItemBtns">
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

export default ShoppingListItem;
