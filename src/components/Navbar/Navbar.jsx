import React from "react";
import navClasses from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className={navClasses.nav}>

            <div className={navClasses.item}>
                <NavLink to='/Profile' activeclassname={navClasses.activeLink}>Profile</NavLink>
            </div>

            <div className={navClasses.item}>
                <NavLink to='/Dialogs' activeclassname={navClasses.activeLink}>Messages</NavLink>
            </div>

            <div className={navClasses.item}>
                <NavLink to='/News' activeclassname={navClasses.activeLink}>News</NavLink>
            </div>

            <div className={navClasses.item}>
                <NavLink to='/Music' activeclassname={navClasses.activeLink}>Music</NavLink>
            </div>

            <div className={navClasses.item}>
                <NavLink to='/Settings' activeclassname={navClasses.activeLink}>Settings</NavLink>
            </div>

        </nav>
    );
}

export default Navbar;