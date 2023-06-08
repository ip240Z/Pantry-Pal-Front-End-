import InventoryItems from "./InventoryItem"
import InventoryItemsContainer from "./InventoryItemsContainer"
import InventorySearch from "./InventorySearch"

const InventoryRender = () => {
    return (
        <section>
            <InventorySearch />
            <InventoryItemsContainer />
        </section >
    )
}
export default InventoryRender