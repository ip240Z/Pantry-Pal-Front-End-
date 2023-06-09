import { useState } from "react";
import "./SearchItem.css"

let SearchItem = (props) => {

    const [itemData, setItemData] = useState(props.data);

    let imageURL = itemData.image.length > 20 ? itemData.image : `https://spoonacular.com/cdn/ingredients_100x100/${itemData.image}`;

return (
    <article className="searchedItem">
        <header>
            <span>
                {itemData.name || itemData.title}
            </span>
        </header>
        <body>
            <div className="imageWrapper">
                <img className="itemImage" src={`${imageURL}`} alt="" />
            </div>
            <div className="searchItemBtns">
                <button>
                    add to inventory
                </button>
                <button>
                    Add to shopping list
                </button>
            </div>
        </body>
    </article>
    )
}

export default SearchItem;