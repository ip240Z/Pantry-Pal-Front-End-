import { useEffect, useState } from "react";
import ShoppingListSearch from "./ShoppingListSearch";
import ShoppingListContainer from "./ShoppingList";

let ShoppingListRender = () => {
    
    const [shoppingList, setShoppingList] = useState([{ "id": 1, "name": "Bananas", "qty": 1, "image": "banana.jpg" }])
    
    return (
        <section>
            <div>
            <ShoppingListSearch />
            <ShoppingListContainer />
            </div>
        </section>
    )
}

export default ShoppingListRender;