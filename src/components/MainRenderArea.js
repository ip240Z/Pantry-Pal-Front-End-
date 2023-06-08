
import Inventory from "./Inventory";
import { Routes, Route } from "react-router-dom";
import ShoppingListRender from "./ShoppingListPage";
import { useState } from "react";
import ShoppingListContext from "./ShoppingListContext"


let MainRenderArea = () => {

    const [shoppingList, setShoppingList] = useState([{ "id": 1, "name": "Bananas", "image": "banana.jpg" }, { "id": 2, "name": "Steak", "image": "steak.jpg" }])

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
                {/* <div><Inventory /></div> */}
                <Routes>
                    <Route path="/shoppinglist" element={<ShoppingListRender/>}/>
                </Routes>
            </ShoppingListContext.Provider>
        </main>
    )
}

export default MainRenderArea;