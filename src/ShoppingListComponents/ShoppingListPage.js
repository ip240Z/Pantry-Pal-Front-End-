import { useEffect, useState } from "react";
import ShoppingListSearch from "./ShoppingListSearch";
import ShoppingListContainer from "./ShoppingList";
import "../components/css/ShoppingListPage.css";

let ShoppingListPage = () => {
        
    return (
        <section className="shoppingListPageWrapper">
            <ShoppingListSearch />
            <ShoppingListContainer />
        </section>
    )
}

export default ShoppingListPage;