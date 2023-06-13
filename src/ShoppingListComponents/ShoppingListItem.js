import { useContext, useState, useEffect } from "react";
import ShoppingListContext from "./ShoppingListContext"
import "../components/css/ShoppingListItem.css"

let ShoppingListItem = (props) => {

    const [itemData, setItemData] = useState(props.data);

    useEffect(() => {
        setItemData(props.data);
      }, [props.data]);

    let imageURL = itemData.image.length > 20 ? itemData.image : `https://spoonacular.com/cdn/ingredients_100x100/${itemData.image}`;

    let abrevTitle = (rawTitle) => {
        if (rawTitle.length > 15) {
            let titleArr = rawTitle.split("");
            while (titleArr.length > 15) {
                titleArr.pop();
            }
            return `${titleArr.join('')}...`
        }
        else {
            return rawTitle
        }
    }

    return( 
        <article className="shoppingListItem">
            <header>
                <span className="itemName">
                    {abrevTitle(itemData.item)}
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
                    <button className="removeBtn" onClick={() => props.delete(itemData.id)}>
                        Remove
                    </button>
                </div>
        </article>
    )
}

export default ShoppingListItem;
