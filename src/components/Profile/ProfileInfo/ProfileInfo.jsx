import React from 'react';
import s from './ProfileInfo.module.scss' //импорт МОДУЛЯ css
const ProfileInfo = () => {
	return (
		<div>
			<div className = {s.user_image_block}>
				<img className = {s.userImage} src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="user-image"/>
			</div>
			<div className={s.Profile_Description}>
				Ava + Description
			</div>
		</div>
	);
}

export default ProfileInfo;