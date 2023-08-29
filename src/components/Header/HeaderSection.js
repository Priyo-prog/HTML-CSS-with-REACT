import React from "react";
import "./HeaderSection.css";
import logo from "../images/omnifood-logo.png";

function HeaderSection() {

    return(
        <header className="header">
            <img className="logo" alt="Omnifood Logo" src={logo} />

            <nav className="main-nav">
                <ul className="main-nav-list">
                    <li><a className="main-nav-link" href="#">Section 1</a></li>
                    <li><a className="main-nav-link" href="#">Section 2</a></li>
                    <li><a className="main-nav-link" href="#">Section 3</a></li>
                    <li><a className="main-nav-link" href="#">Section 4</a></li>
                    <li><a className="main-nav-link nva-cta" href="#">Section 5</a></li>
                </ul>
            </nav>

        </header>
    )

}

export default HeaderSection;