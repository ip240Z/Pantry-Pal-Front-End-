import InventoryContainer from "./InventoryComponents/Inventory";
import { Routes, Route } from "react-router-dom";
import ShoppingListPage from "../ShoppingListComponents/ShoppingListPage";
import { useEffect, useState } from "react";
import ShoppingListContext from "../ShoppingListComponents/ShoppingListContext";
import "../components/css/MainRenderArea.css"
import SearchPage from "./SearchPageComponents/SearchPage";
import InventoryContext from "./InventoryComponents/InventoryContext";
import InventoryRender from "./InventoryComponents/InventoryRender";


let MainRenderArea = () => {

    const [shoppingList, setShoppingList] = useState([])
    const [inventory, setInventory] = useState([])

    const fetchShoppingList = async () => {
        try {
            // const response = await fetch(`${"https://pantry-pal-backend-r9v7.onrender.com/shoppinglist"}`)
            const response = await fetch(`${"http://localhost:3000/shoppinglist"}`)

            if (!response.ok) {
                throw new Error("Error fetching shopping list data")
            }
            const data = await response.json();
            setShoppingList(data)
            console.log("Here is the shopping list data: ", data)
        } catch (error) {
            console.log('An error occurred: ', error)
        }
    }
    
    const fetchInventory = async () => {
        try {
            const response = await fetch(`${"http://localhost:3000/inventory"}`)
            if (!response.ok) {
                throw new Error("Error Fetching Inventory")
            }
            const data = await response.json();
            setInventory(data)
            console.log("Here is the invetory data: ", inventory)
        } catch (error) {
            console.log('An error occurred: ', error)
        }
    }

    useEffect(() => {
        fetchInventory()
        fetchShoppingList()
    }, [])
    
    return (
        <main className="mainAreaWrapper">

            <ShoppingListContext.Provider value={{ shoppingList, setShoppingList, fetchShoppingList }}>
                <InventoryContext.Provider value={{ inventory, setInventory, fetchInventory }}>
                    <Routes>
                        <Route path="/inventory" element={<InventoryRender />} />
                        <Route path="/shoppinglist" element={<ShoppingListPage />} />
                        <Route path="/itemsearch" element={<SearchPage />} />
                    </Routes>
                </InventoryContext.Provider>
            </ShoppingListContext.Provider>
        </main>
    )
}

export default MainRenderArea;
