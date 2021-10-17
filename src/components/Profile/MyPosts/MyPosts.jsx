import React from 'react';
import s from './MyPosts.module.scss' //импорт МОДУЛЯ css
import Post from './Post/Post';
import {addPost_ActionCreator, updateNewPostText_ActionCreator} from "../../../Redux/profileReducer";


const MyPosts = (props) => {
    let postElement =
        props.profilePage.postData.map( (postInfo) => <Post message={postInfo.message} like_counts={postInfo.like_counts}/>)
    function handleTest(e) {
        if (e.charCode === 13) {
            props.dispatch(addPost_ActionCreator());
        }
        if (e.keyCode === 13) {
            alert('Enter... (KeyDown, use keyCode)');
        }
    }

    let newPostElem = React.createRef();//Ссылки на элементы JSX
    let AddPost  = () => {
        let text = props.profilePage.newPostText; //значение ссылающие на элемент jsx
        if (text.length > 0){
            props.dispatch(addPost_ActionCreator());
            props.dispatch(updateNewPostText_ActionCreator());
        }
        else {
            alert("Пожалуйста, введите сообщение...")
        }
    }
    let onPostChange = () =>{
        let newText = newPostElem.current.value;
        props.dispatch(updateNewPostText_ActionCreator(newText));
    }
    return (
        <div className={s.myPosts}>
            <div className={s.newPost}>
				<textarea placeholder="Расскажите что нового?)" ref={newPostElem} onChange={onPostChange} value={props.profilePage.newPostText} onKeyPress={handleTest}/>
                    <button className={s.toPublish} onClick={AddPost}>
                        To publish
                    </button>
            </div>
            <div className={s.Posts}>
                {postElement}
            </div>
        </div>
    );
}

export default MyPosts;