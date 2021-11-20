import React from "react";
import dialogClasses from './Dialogs.module.css'
import navClasses from "../Navbar/Navbar.module.css";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import Messages from "./Messages/Messages";


const setActive = ({isActive}) => isActive ? navClasses.activeLink : '';

const Dialogs = (props) => {
	return (
		<div className={dialogClasses.dialogs}>
			<div className={dialogClasses.dialogItems}>
				<div className={dialogClasses.item}>
					<NavLink to='/Dialogs/Messages' className={setActive}>Dialog 1</NavLink>
				</div>
				<div className={dialogClasses.item}>
					<NavLink to='/Dialogs/Messages' className={setActive}>Dialog 2</NavLink>
				</div>
				<div className={dialogClasses.item}>
					<NavLink to='/Dialogs/Messages' className={setActive}>Dialog 3</NavLink>
				</div>
				<div className={dialogClasses.item}>
					<NavLink to='/Dialogs/Messages' className={setActive}>Dialog 4</NavLink>
				</div>
				<div className={dialogClasses.item}>
					<NavLink to='/Dialogs/Messages' className={setActive}>Dialog 5</NavLink>
				</div>
				<div className={dialogClasses.item}>
					<NavLink to='/Dialogs/Messages' className={setActive}>Dialog 6</NavLink>
				</div>
				<div className={dialogClasses.item}>
					<NavLink to='/Dialogs/Messages' className={setActive}>Dialog 7</NavLink>
				</div>
			</div>
		</div>
	);
}

export default Dialogs;