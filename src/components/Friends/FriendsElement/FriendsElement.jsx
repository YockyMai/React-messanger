import React from 'react';
import s from './FriendsElement.module.scss'
const FriendsElement = (props) => {

    return (
        <div>
            <div className={s.friendsEl}>
                <div>
                    <img src={props.avatar} alt="ava" className={s.userAvatar}/>
                </div>
                <div className={s.userInfo}>
                    <div className={s.userName}>
                        <p>
                            Name : {props.name}
                        </p>
                        <div className={s.userDescription}>

                        </div>
                    </div>
                    <div className={s.userLocation}>

                    </div>
                </div>
                {props.followed ?
                    <button className={s.subscribe} onClick={ () => {props.unFollow(props.id)} }>Куть чтобы отписатся</button> :
                    <button className={s.subscribe} onClick={ () => {props.follow(props.id)} }>Куть чтобы подписатся</button>  //бинарное вырожение, выбор между true или false
                }
            </div>

        </div>
    );
};

export default FriendsElement;