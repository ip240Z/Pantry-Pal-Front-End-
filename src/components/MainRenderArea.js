
import Inventory from "./Inventory";
import { Routes, Route } from "react-router-dom";
import ShoppingListRender from "./ShoppingListRender";
import { useState } from "react";
import ShoppingListContext from "./ShoppingListContext"
import InventoryRender from "./InventoryRender";
import InventoryContext from "./InventoryContext";


let MainRenderArea = () => {

    const [shoppingList, setShoppingList] = useState([{ "id": 1, "name": "Bananas", "image": "banana.jpg" }, { "id": 2, "name": "Steak", "image": "steak.jpg" }])
    const [inventory, setInventory] = useState([{"id": 1, "name": "Apple", "quantity": 2, "age": "current date - date added", "image": "Apple.jpg"}])
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
        <main>
            <ShoppingListContext.Provider value={ { shoppingList, setShoppingList} }>
                <InventoryContext.Provider value={ { inventory, setInventory} }>
                <Routes>
                    <Route path="/inventory" element={<InventoryRender/>}/>
                    <Route path="/shoppinglist" element={<ShoppingListRender/>}/>
                </Routes>
                </InventoryContext.Provider>
            </ShoppingListContext.Provider>

        </main>
    )
}

export default MainRenderArea;
            