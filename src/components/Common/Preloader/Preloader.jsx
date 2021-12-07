import preloader from '../../../asserts/images/loader.svg';
import React from "react";

let Preloader = (props) => {
	return (
		<div><img src={preloader} alt="preloader"/></div>
	)
};

export default Preloader;