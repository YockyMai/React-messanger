import React from 'react';
import s from './Post.module.scss' //импорт МОДУЛЯ css

const Post = (props) => {
    return (

        <div className={s.item}>
            <img className={s.userPhoto}
                 src="https://sun9-51.userapi.com/impg/25nCRunKwd6-lHytaUVZjYPgyB1LlkUsqpBPEA/HclKuEKquLM.jpg?size=730x730&quality=96&sign=4df5df138c7cc4b3d11360e5d880b735&type=album"
                 alt="User photo"/>
			{props.message}
            <div>
				<span className={s.likeBlock}>
					<img className={s.like}
                         src="https://vk.com/reaction/1-reactions-0-96?c_uniq_tag=90220601efca80353ec1c81d3c76db5c34309f307622ad0f3446f71d0882f739"
                         alt="Like"/>
					<p>
						{props.like_counts}
					</p>
				</span>
            </div>

        </div>

    );
}
export default Post;