import { useState } from "react"
import "../components/css/ShoppingListSearch.css"

const ShoppingListSearch = () => {
    return (
        <div className="searchWrapper">
            <header>
                <p>Search Items to add to your inventory shopping list</p>
            </header>

            <input type="search" />

        </div>
    )

}

export default ShoppingListSearch