import '../css/Inventory.css'
import { useContext, useState } from "react"
import InventoryContext from "./InventoryContext"
import InventoryItem from "./InventoryItem"
import InventoryItemNearExpiration from "./InventoryItemNearExpiration"

const InventoryContainer = () => {

    const { inventory, setInventory } = useContext(InventoryContext)


    return (
        <section className='inventoryPageWrapper'>
            {inventory ? inventory.map((item,index) => <InventoryItemNearExpiration key={index} name={item.name} />): "Inventory is empty"}

            {inventory ? inventory.map((item,index) => <InventoryItem key={index} name={item.name} />): "Inventory is empty"}
        {/* {shoppingList ? shoppingList.map((item,index) => <ShoppingListItem key={index} name={item.name} image={item.image} />) : "Shopping list empty" } */}
    </section>
    )
}
export default InventoryContainer;