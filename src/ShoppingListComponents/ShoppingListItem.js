import { useState } from "react";
import "../components/css/ShoppingListItem.css"

let ShoppingListItem = (props) => {

    const [itemData, setItemData] = useState(props.data);

    let imageURL = itemData.image.length > 20 ? itemData.image : `https://spoonacular.com/cdn/ingredients_100x100/${itemData.image}`;

    return( 
        <article className="shoppingListItem">
            <header>
                <span className="itemName">
                    {itemData.item}
                </span>
            </header>
            <body>
                <div> 
                    <img className="itemImage" src={`${imageURL}`} alt="" />
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
