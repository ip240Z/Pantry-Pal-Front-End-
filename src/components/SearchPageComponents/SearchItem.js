import { useState } from "react";

let SearchItem = (props) => {

    const [itemData, setItemData] = useState(props.data);

    let imageURL = `https://spoonacular.com/cdn/ingredients_100x100/${itemData.image}`;

return (
    <article className="searchedItem">
        <header>
            <span>
                {itemData.name}
            </span>
        </header>
        <body>
            <div>
                <img src={`${imageURL}`} alt="" />
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