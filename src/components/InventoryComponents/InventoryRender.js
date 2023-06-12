import { useEffect, useState } from "react";
import InventorySearch from "./InventorySearch";
import InventoryContainer from "./Inventory";

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