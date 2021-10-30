import React from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";
import {followAC, setUserAC, unFollowAC} from "../../Redux/friendsReducer";


let mapStateToProps = (state) => {
    return{
        friends: state.friendsPage.friends,
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        follow : (userId) => {
            dispatch(followAC(userId));
        },
        unFollow : (userId) => {
            dispatch(unFollowAC(userId));
        },
        setUsers: (friends) => {
            dispatch(setUserAC(friends));
        }
    }
}

const FriendsContainer = connect(mapStateToProps,mapDispatchToProps)(Friends);
export default FriendsContainer;