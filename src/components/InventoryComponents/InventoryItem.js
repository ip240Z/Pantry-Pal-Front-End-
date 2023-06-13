import '../css/InventoryItem.css';
import { useState } from "react";

let InventoryItem = (props) => {

    const [itemData, setItemData] = useState(props.itemData);

    let imageURL = itemData.image.length > 20 ? itemData.image : `https://spoonacular.com/cdn/ingredients_100x100/${itemData.image}`;

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


    return (
        <article className="box2">
            <header>
                <span className='YellowTag'>
                    {abrevTitle(itemData.item)}
                </span>
            </header>
            <div>
                <div className='imageWrapper'>
                    <img className='itemImage' src={`${imageURL}`} alt="" />
                </div>

            </div>
        </article>
    )
}

export default InventoryItem;
