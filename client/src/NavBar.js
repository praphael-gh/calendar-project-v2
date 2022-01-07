import React from "react";
import { NavLink } from "react-router-dom"  

function NavBar({onLogout}) {

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
      }

    const linkStyles = {
        display:"inline-block",
        width: "75px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "blue",
        textDecoration: "none",
        color: "white",
        fontFamily: 'Segoe UI'
    }
    return (
        <>
        <div className="navbar">
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
            to="/"
            exact
            style={linkStyles}
            onClick={onLogout, handleLogout}
            >
                Log Out
            </NavLink>
        </div>
        
        </>


    )
}

export default NavBar;