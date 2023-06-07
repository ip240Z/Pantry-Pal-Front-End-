import { useEffect, useState } from "react";
import ShoppingListSearch from "./ShoppingListSearch";
import ShoppingListContainer from "./ShoppingListContainer";

let ShoppingListRender = () => {
    
    const [shoppingList, setShoppingList] = useState([{ "id": 1, "name": "Bananas", "qty": 1, "image": "banana.jpg" }])
    
    const fetchShoppingList = async () => {
        try { 
            const response = await fetch(`${"Our API endpoint to fetch shopping list data"}`)
            if(!response.ok) {
                throw new Error("Error fetching shopping list data")
            }
            const data = await response.json();
            console.log("Shopping list fetched", data);
            setShoppingList(data)
        } catch (error) {
            console.log('An error occurred: ', error)
        }
    }

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