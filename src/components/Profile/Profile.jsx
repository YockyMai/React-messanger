import React from 'react';
import s from './Profile.module.scss' //импорт МОДУЛЯ css
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";



const Profile = (props) => {


	return (
		<div>
			<ProfileInfo/>
			<MyPosts profilePage = {props.profilePage} dispatch={props.dispatch}/>
		</div>
	);
}

export default Profile;