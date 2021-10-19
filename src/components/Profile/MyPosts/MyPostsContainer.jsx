import React from 'react';
import {addPost_ActionCreator, updateNewPostText_ActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let updateNewPostText = (newText) =>{
        props.store.dispatch(updateNewPostText_ActionCreator(newText));
    }
    let AddPost = () => {
        props.store.dispatch(addPost_ActionCreator());
    }

    return (
        <MyPosts AddPost={AddPost}
                 updateNewPostText={updateNewPostText}
                 newPostText={state.profilePage.newPostText}
                 profilePage={state.profilePage}/>
    );
}

export default MyPostsContainer;