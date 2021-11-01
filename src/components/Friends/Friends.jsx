import React from 'react';
//import s from './Friends.module.scss'
import FriendsElement from "./FriendsElement/FriendsElement";

const Friends = (props) => {

    let friendsElement =
        props.friends.map( (friendsInfo) => <FriendsElement follow={props.follow} unFollow={props.unFollow} id={friendsInfo.id} key={friendsInfo.id} name={friendsInfo.fullName} avatar={friendsInfo.avatar} followed={friendsInfo.followed}/>)

    return (
        <div>
            {friendsElement}
		</div>
    );
}

export default Friends;