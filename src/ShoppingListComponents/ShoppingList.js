import { useContext, useState } from "react"
import ShoppingListContext from "./ShoppingListContext"
import ShoppingListItem from "./ShoppingListItem"
import "../components/css/ShoppingList.css"


const ShoppingListContainer = () => {

    const { shoppingList, setShoppingList } = useContext(ShoppingListContext)

    return (
        <section className="shoppingListItemContainer">
            {shoppingList ? shoppingList.map((item,index) => <ShoppingListItem key={index} name={item.name} image={item.image} />) : "Shopping list empty" }
        </section>
    )

}

export default ShoppingListContainer