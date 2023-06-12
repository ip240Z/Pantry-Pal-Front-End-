import '../css/Inventory.css'
import { useContext, useState } from "react"
import InventoryContext from "./InventoryContext"
import InventoryItem from "./InventoryItem"
import InventoryItemNearExpiration from "./InventoryItemNearExpiration"

const InventoryContainer = () => {

    const { inventory, setInventory } = useContext(InventoryContext)

    // console.log("Inventory data: ", inventory)

    let dateCheck = (itemDate) => {
        let diff = Date.now() - itemDate;
        diff = diff / (3600 * 1000 * 24)
        return diff
    }
    // console.log(Date.now())
    
    let itemsNearExpiration = inventory.filter((item, index) => item.is_perishable == true && dateCheck(item.item_date) > 14)
    console.log(itemsNearExpiration)
    return (
        <section className='inventoryPageWrapper'>
            {itemsNearExpiration ? itemsNearExpiration.map((item,index) => <InventoryItemNearExpiration key={index} itemData={item} />): "Inventory is empty"}
            {inventory ? inventory.map((item,index) => <InventoryItem key={index} itemData={item} />): "Inventory is empty"}
    </section>
    )
}
export default InventoryContainer;