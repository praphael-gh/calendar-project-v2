import React from "react";
import { NavLink } from "react-router-dom"  

function NavBar() {
    const linkStyles = {
        display:"inline-block",
        width: "75px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "blue",
        textDecoration: "none",
        color: "white",
    }
    return (
        <>
        <NavLink
        to="/"
        exact
        style={linkStyles}
        >
            Home
        </NavLink>
        <NavLink
        to="/about"
        exact
        style={linkStyles}
    
        >
            About
        </NavLink>
        <NavLink
        to="/event-list"
        exact
        style={linkStyles}
        >
            Event List
        </NavLink>
        <NavLink
        to="/newform"
        exact
        style={linkStyles}
        >
            New Form
        </NavLink>
        </>
    )
}

export default NavBar;