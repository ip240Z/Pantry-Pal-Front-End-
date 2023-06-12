import { Link } from "react-router-dom";
import "../components/css/BottomNavBar.css";

let BottomNavBar = () => {
    return (
        <footer className="navWrapper">
            <div>Footer Header</div>
            <nav className="navBtnWrapper">
                <Link className="navLink" to={"/"}>Home</Link>
                <Link className="navLink" to={"/inventory"}>Inventory</Link>
                <Link className="navLink" to={"/itemsearch"}>Search</Link>
                <Link className="navLink" to={"/shoppinglist"}>ShoppingList</Link>
            </nav>
        </footer>
    )
}

export default BottomNavBar;