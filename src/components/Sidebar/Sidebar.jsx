import React from "react";
import sidebarClasses from "./Sidebar.module.css"


const Sidebar = (props) => {
	return (
		<div className={sidebarClasses.sidebar}>
			<img className={sidebarClasses.avatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk6V64Z1EWKa294yxs28L23CxqA8G-2NEEgA&usqp=CAU"/>
			<img className={sidebarClasses.avatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk6V64Z1EWKa294yxs28L23CxqA8G-2NEEgA&usqp=CAU"/>
			<img className={sidebarClasses.avatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk6V64Z1EWKa294yxs28L23CxqA8G-2NEEgA&usqp=CAU"/>
		</div>
	);
}

export default Sidebar;