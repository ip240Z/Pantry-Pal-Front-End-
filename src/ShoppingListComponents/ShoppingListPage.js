import { useEffect, useState } from "react";
import ShoppingListSearch from "./ShoppingListSearch";
import ShoppingListContainer from "./ShoppingList";
import "../components/css/ShoppingListPage.css";

let ShoppingListPage = () => {
    
    const [shoppingList, setShoppingList] = useState([{ "id": 1, "name": "Bananas", "qty": 1, "image": "banana.jpg" }])
    
    return (
        <section className="shoppingListPageWrapper">
            <ShoppingListSearch />
            <ShoppingListContainer />
        </section>
    )
}

export default ShoppingListPage;