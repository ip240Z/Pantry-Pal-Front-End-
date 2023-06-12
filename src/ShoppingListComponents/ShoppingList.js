import { useContext, useState } from "react"
import ShoppingListContext from "./ShoppingListContext"
import ShoppingListItem from "./ShoppingListItem"
import "../components/css/ShoppingList.css"


const ShoppingListContainer = () => {

    const { shoppingList, setShoppingList } = useContext(ShoppingListContext)

    const [listItems, setListItems] =useState(shoppingList)

    console.log("Shopping list container context data",shoppingList)

    return (
        <section className="shoppingListItemContainer">
            {listItems ? listItems.map((itemData, index) => <ShoppingListItem key={index} data={itemData} />) : "Shopping list empty" }
        </section>
    )

}

export default ShoppingListContainer