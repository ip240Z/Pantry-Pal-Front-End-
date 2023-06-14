import '../css/Inventory.css'
import { useContext, useState, useEffect, useRef } from "react"
import InventoryContext from "./InventoryContext"
import InventoryItem from "./InventoryItem"
import InventoryItemNearExpiration from "./InventoryItemNearExpiration"

const InventoryContainer = () => {
    const { inventory, setInventory, fetchInventory } = useContext(InventoryContext)
    const [animateItems, setAnimateItems] = useState(false)
    const inventoryRef = useRef(null)

    useEffect(() => {
        fetchInventory();

        // const inventoryElement = inventoryRef.current
        // const handleScroll = () => {
        //     const elementTop = inventoryElement.offsetTop
        //     const elementHeight = inventoryElement.offsetHeight
        //     const windowHeight = window.innerHeight

        //     if (window.pageYOffset > elementTop - windowHeight + elementHeight / 2) {
        //         setAnimateItems(true)
        //     }
        // }

        // window.addEventListener("scroll", handleScroll)
        // handleScroll() // Check if items are already in view on component mount

        // return () => {
        //     window.removeEventListener("scroll", handleScroll)
        // }
    }, [])

    let dateCheck = (itemDate) => {
        let diff = Date.now() - itemDate
        diff = diff / (3600 * 1000 * 24)
        return diff
    }
    let sortedInventory = inventory.sort((a, b) => a.item_date - b.item_date)
    console.log(sortedInventory)

    let itemsNearExpiration = inventory.filter(
        (item) => item.is_perishable && dateCheck(item.item_date) > 14
    )


    return (
        <section className='inventoryPageWrapper'>
            {itemsNearExpiration.length > 0 ? (
                <div
                    className={`inventoryItemsNearExpiration ${animateItems ? "animate" : ""
                        }`}
                >
                    {itemsNearExpiration.map((item, index) => (
                        <InventoryItemNearExpiration
                            key={index}
                            itemData={item}
                        />
                    ))}
                </div>
            ) : (
                <div className="emptyInventoryMessage">Inventory is empty</div>
            )}

            {inventory.length > 0 ? (
                <div
                    ref={inventoryRef}
                    className={`inventoryItems ${animateItems ? "animate" : ""
                        }`}
                >
                    {sortedInventory.map((item, index) => (
                        <InventoryItem key={index} itemData={item} />
                    ))}
                </div>
            ) : (
                <div className="emptyInventoryMessage">Inventory is empty</div>
            )}
        </section>
    )
}

export default InventoryContainer