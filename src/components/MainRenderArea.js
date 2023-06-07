
import Inventory from "./Inventory";

import { Routes, Route } from "react-router-dom";
import ShoppingListRender from "./ShoppingListRender";



let MainRenderArea = () => {
    return (
        <main>

            <div><Inventory /></div>

            <Routes>
                <Route path="/shoppinglist" element={<ShoppingListRender/>}/>
            </Routes>

        </main>
    )
}

export default MainRenderArea;