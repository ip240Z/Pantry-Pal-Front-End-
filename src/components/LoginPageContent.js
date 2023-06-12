import { Link, useNavigate } from "react-router-dom";
import React from "react";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

const LoginPageContent = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/loginPage");
    };

    return (
        <article>
            <header>
                <h4>Login</h4>
            </header>
            <div className="LoginWrapper">
                <section className="inputCredentials" >
                    <div className="inputEmail">
                        <h6>PLEASE ENTER YOUR EMAIL</h6>
                        <input type="email" name="email" id="" />
                    </div>

                    <div className="inputPassword">
                        <h6>PLEASE ENTER YOUR PASSWORD</h6>
                        <input type="password" name="password" id="" />
                    </div>
                </section>

                <section>
                    <div>
                        <button type="submit" onClick={handleLogin}>
                            LOG IN
                        </button>
                    </div>
                    <div>
                        <Link className="SignUpLink" to="/register">
                            Sign Up
                        </Link>
                    </div>
                </section>
            </div>
        </article>



    );
};

export default LoginPageContent;