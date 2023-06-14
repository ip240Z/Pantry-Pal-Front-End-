import LoginPageContent from "./LoginPageContent"
// import SignUpPage from "./SignUpPage"
import "./css/Header.css"
import { Routes, Route, NavLink } from "react-router-dom"

let Header = () => {
    return (
        <>
            <header className="headerWrapper">
                <div>
                    <button className="loginBtn"> 
                        <NavLink to="/LoginPageContent">Login / Signup</NavLink>
                        {/* <NavLink to="/SignUpPage">Login / Signup</NavLink> */}
                    </button>
                </div>
                <div className="logo">
                    <h1>Pantry Pal</h1>
                </div>
            </header>

            <Routes>
                <Route path="/LoginPageContent" element={<LoginPageContent />} />
                {/* <Route path="/SignUpPage" element={<SignUpPage />} /> */}
            </Routes>
        </>
    );
}

export default Header;