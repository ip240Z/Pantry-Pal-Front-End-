
import { Routes, Route } from "react-router-dom";
import ShoppingListPage from "../ShoppingListComponents/ShoppingListPage";
import { useEffect, useState } from "react";
import ShoppingListContext from "../ShoppingListComponents/ShoppingListContext";
import "../components/css/MainRenderArea.css"
import SearchPage from "./SearchPageComponents/SearchPage";


let MainRenderArea = () => {

    const [shoppingList, setShoppingList] = useState([{ "id": 1, "name": "Bananas", "image": "banana.jpg" }, { "id": 2, "name": "Steak", "image": "steak.jpg" }])

    
    useEffect(() => {
    const fetchShoppingList = async () => {
        try { 
            const response = await fetch(`${"http://localhost:3000/shoppinglist"}`)
            if(!response.ok) {
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
            <ShoppingListContext.Provider value={ { shoppingList, setShoppingList} }>
                <Routes>
                    <Route path="/shoppinglist" element={<ShoppingListPage/>}/>
                    <Route path="/itemsearch" element={<SearchPage />} />
                </Routes>
            </ShoppingListContext.Provider>
        </main>
    )
}

export default MainRenderArea;