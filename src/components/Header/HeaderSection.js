import React from "react";
import "./HeaderSection.css";
import logo from "../images/omnifood-logo.png";

function HeaderSection() {

    return(
        <header className="header">
            <img className="logo" alt="Omnifood Logo" src={logo} />

            <nav className="main-nav">Navigation</nav>

        </header>
    )

}

export default HeaderSection;