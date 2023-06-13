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
            <section className="shoppingListItemDesc">
                <div className="imageWrapper"> 
                    <img className="itemImage" src={`${imageURL}`} alt="" />
                </div>
            </section>
                <div className="shoppingListItemBtns">
                    <button className="optionBtn">
                        Inventory
                    </button>
                    <button className="removeBtn">
                        Remove
                    </button>
                </div>
        </article>
    )
}

export default ShoppingListItem;
