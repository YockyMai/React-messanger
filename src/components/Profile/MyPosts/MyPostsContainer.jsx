import React from 'react';
import {addPost_ActionCreator, updateNewPostText_ActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        newPostText : state.profilePage.newPostText,
        profilePage : state.profilePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        AddPost : () => {
            dispatch(addPost_ActionCreator());
        },
        updateNewPostText : (newText) => {
            dispatch(updateNewPostText_ActionCreator(newText));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);
export default MyPostsContainer;