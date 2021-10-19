import React from 'react';
import s from './MyPosts.module.scss' //импорт МОДУЛЯ css
import Post from './Post/Post';


const MyPosts = (props) => {
    let postElement =
        props.profilePage.postData.map( (postInfo) => <Post message={postInfo.message} like_counts={postInfo.like_counts}/>)

    let newPostElem = React.createRef();//Ссылки на элементы JSX
    function handleTest(e) {
        let text = newPostElem.current.value;
        if (e.charCode === 13 && !e.shiftKey) {
            if (text.length > 0){
                props.AddPost();
            }
            else {
                alert('Сообщение пустое...');
            }
        }
    }
    let onAddPost  = () => {
        let text = newPostElem.current.value;
        if (text.length > 0){
            props.AddPost();
        }
        else {
            alert("Пожалуйста, введите сообщение...");
        }
    }
    let onPostChange = () =>{
        let newText = newPostElem.current.value;
        props.updateNewPostText(newText);
    }
    return (
        <div className={s.myPosts}>
            <div className={s.newPost}>
				<textarea placeholder="Расскажите что нового?)" ref={newPostElem} onChange={onPostChange} value={props.newPostText} onKeyPress={handleTest}/>
                    <button className={s.toPublish} onClick={onAddPost}>
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