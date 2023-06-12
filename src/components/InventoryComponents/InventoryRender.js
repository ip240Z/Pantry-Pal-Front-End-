import { useEffect, useState } from "react";
import InventorySearch from "./InventorySearch";
import InventoryContainer from "./Inventory";
import InventoryItemNearExpiration from "./InventoryItemNearExpiration";

let InventoryRender = () => {

    return (
        <section>
            <div>
                <InventorySearch />
            </div>
            <InventoryContainer />
        </section>
    )
}

export default InventoryRender;