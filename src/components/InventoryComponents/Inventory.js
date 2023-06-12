import '../css/Inventory.css'
import { useContext, useState } from "react"
import InventoryContext from "./InventoryContext"
import InventoryItem from "./InventoryItem"
import InventoryItemNearExpiration from "./InventoryItemNearExpiration"

const InventoryContainer = () => {

    const { inventory, setInventory } = useContext(InventoryContext)

    
    return (
        <section className='inventoryPageWrapper'>
            {inventory ? inventory.map((item,index) => <InventoryItemNearExpiration key={index} itemData={item} />): "Inventory is empty"}
            {inventory ? inventory.map((item,index) => <InventoryItem key={index} itemData={item} />): "Inventory is empty"}
    </section>
    )
}
export default InventoryContainer;