import InventoryContainer from "./InventoryComponents/Inventory";

import { Routes, Route } from "react-router-dom";
import ShoppingListPage from "../ShoppingListComponents/ShoppingListPage";
import { useEffect, useState } from "react";
import ShoppingListContext from "../ShoppingListComponents/ShoppingListContext";
import "../components/css/MainRenderArea.css"
import InventoryContext from "./InventoryComponents/InventoryContext";
import InventoryRender from "./InventoryComponents/InventoryRender";


let MainRenderArea = () => {

    const [shoppingList, setShoppingList] = useState([{ "id": 1, "name": "Bananas", "image": "banana.jpg" }, { "id": 2, "name": "Steak", "image": "steak.jpg" }])
    const [inventory, setInventory] = useState([{ "id": 2, "name": "Apple", "quantity": 2, "image": "apple.jpg" }, { "id": 3, "name": "orange", "quantity": 3, "image": "orange.jpg" },
    { "id": 3, "name": "orange", "quantity": 3, "image": "orange.jpg" },
    { "id": 3, "name": "orange", "quantity": 3, "image": "orange.jpg" }])




    useEffect(() => {
        const fetchShoppingList = async () => {
            try {
                const response = await fetch(`${"http://localhost:3000/shoppinglist"}`)
                if (!response.ok) {
                    throw new Error("Error fetching shopping list data")
                }
                const data = await response.json();
                console.log("Shopping list fetched", data);
                setShoppingList(data)
                console.log(data)
            } catch (error) {
                console.log('An error occurred: ', error)
            }
        }
        fetchShoppingList()
    }, []);

    return (
        <main className="mainAreaWrapper">
            <ShoppingListContext.Provider value={{ shoppingList, setShoppingList }}>
                <InventoryContext.Provider value={{ inventory, setInventory }}>
                    <Routes>
                        <Route path="/inventory" element={<InventoryRender />} />

                        <Route path="/shoppinglist" element={<ShoppingListPage />} />
                    </Routes>
                </InventoryContext.Provider>
            </ShoppingListContext.Provider>
        </main>
    )
}

export default MainRenderArea;
