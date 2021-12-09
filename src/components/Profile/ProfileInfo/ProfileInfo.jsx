import React from "react";
import Preloader from "../../Common/Preloader/Preloader";



let ProfileInfo = (props) => {

	if(!props.profile) {
		return <Preloader />
	}

	return (
		<div>
			<img src={props.profile.photos.large} alt=""/>
			<div>Обо мне: {props.profile.aboutMe}</div>
			<div>
				<div>Страница в facebook:
					<a href={props.profile.contacts.facebook}>{props.profile.contacts.facebook}</a></div>
				<div>Страница в twitter:
					<a href={props.profile.contacts.twitter}>{props.profile.contacts.twitter}</a></div>
				<div>Страница в instagram:
					<a href="{props.profile.contacts.instagram}">{props.profile.contacts.instagram}</a></div>
			</div>
		</div>
	);
}


export default ProfileInfo;