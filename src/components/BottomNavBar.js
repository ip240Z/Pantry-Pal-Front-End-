import { NavLink } from "react-router-dom";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faKitchenSet } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faListCheck } from '@fortawesome/free-solid-svg-icons'



import "../components/css/BottomNavBar.css";

let BottomNavBar = () => {
    return (
        <footer className="navWrapper">
            <div>Cannon Frog Studios</div>
            <nav className="navBtnWrapper">
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'NavLink')} to={"/"}><FontAwesomeIcon className="icon" icon={faHouse} /></NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'NavLink')} to={"/inventory"}><FontAwesomeIcon className="icon" icon={faKitchenSet} /></NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'NavLink')} to={"/itemsearch"}><FontAwesomeIcon className="icon" icon={faMagnifyingGlass} /></NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'NavLink')} to={"/shoppinglist"}><FontAwesomeIcon className="icon" icon={faListCheck} /></NavLink>
            </nav>
        </footer>
    )
}

export default BottomNavBar;