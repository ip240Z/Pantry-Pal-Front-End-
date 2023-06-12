import { useState } from "react";
import "./SearchItem.css"

let SearchItem = (props) => {

    const [itemData, setItemData] = useState(props.data);

    let imageURL = itemData.image.length > 25 ? itemData.image : `https://spoonacular.com/cdn/ingredients_100x100/${itemData.image}`;

    let abrevTitle = (rawTitle) => {
        if (rawTitle.length > 25) {
            let titleArr = rawTitle.split("");
            while (titleArr.length > 25) {
                titleArr.pop();
            }
            return `${titleArr.join('')}...`
        }
        else {
            return rawTitle
        }
    }

    const handleInventory = (e) => {
        e.preventDefault();
    }

    const handleShoppingList = (e) => {
        e.preventDefault();
    }

return (
    <article className="searchedItem">
        <header className="itemName">
            {abrevTitle(itemData.name || itemData.title)}
        </header>
        <section className="itemDesc">
            <div className="imageWrapper">
                <img className="itemImage" src={`${imageURL}`} alt="" />
            </div>
            <div className="searchItemBtns">
                <button className="optionBtn" onClick={handleInventory}>
                    add to inventory
                </button>
                <button className="optionBtn" onClick={handleShoppingList}>
                    Add to shopping list
                </button>
            </div>
        </section>
    </article>
    )
}

export default SearchItem;