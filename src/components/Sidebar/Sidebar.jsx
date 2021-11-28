import React from "react";
import sidebarClasses from "./Sidebar.module.css"


const Sidebar = (props) => {
	return (
		<div className={sidebarClasses.sidebar}>
			<img className={sidebarClasses.avatar} alt={'avatar'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC6iPDSqcgCcAtdEz_rPY0B-sxqMd7hz0Hlg&usqp=CAU"/>
			<img className={sidebarClasses.avatar} alt={'avatar'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC6iPDSqcgCcAtdEz_rPY0B-sxqMd7hz0Hlg&usqp=CAU"/>
			<img className={sidebarClasses.avatar} alt={'avatar'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC6iPDSqcgCcAtdEz_rPY0B-sxqMd7hz0Hlg&usqp=CAU"/>
		</div>
	);
}

export default Sidebar;