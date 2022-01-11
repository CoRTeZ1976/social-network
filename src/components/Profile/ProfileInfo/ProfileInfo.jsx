import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";



let ProfileInfo = ( props ) => {
	
	if (!props.profile) {
		return <Preloader/>;
	}
	
	let plug = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC6iPDSqcgCcAtdEz_rPY0B-sxqMd7hz0Hlg&usqp=CAU";
	
	return (
		<div>
			<img src={ props.profile.photos.large != null ? props.profile.photos.small : plug } alt="avatar"/>
			<ProfileStatus status={ props.status } updateUserStatus={ props.updateUserStatus }/>
			<div>Обо мне: { props.profile.aboutMe }</div>
			<div>
				<div>Страница в facebook:
					<a href={ props.profile.contacts.facebook }>{ props.profile.contacts.facebook }</a></div>
				<div>Страница в twitter:
					<a href={ props.profile.contacts.twitter }>{ props.profile.contacts.twitter }</a></div>
				<div>Страница в instagram:
					<a href="{props.profile.contacts.instagram}">{ props.profile.contacts.instagram }</a></div>
			</div>
		</div>
	);
};

export default ProfileInfo;