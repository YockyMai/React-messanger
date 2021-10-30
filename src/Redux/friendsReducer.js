const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const setUsers = 'setUsers';
let initialState = {
    friends : [
        {id: 1, fullName:'dfsfs', status:'Привет', location: {city: 'Минск', country: 'Беларусь'}, followed : true, avatar: 'https://i.imgur.com/gqJvKwW.png'},
        {id: 2, fullName:'FDFSD', status:'Привет', location: {city: 'Русь', country: 'Земная'}, followed : false, avatar: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'},
        {id: 3, fullName:'hdgghgf', status:'Привет', location: {city: 'Минск', country: 'ОУОУ'}, followed : false, avatar: 'https://www.meme-arsenal.com/memes/87d4bfeed251dba0ce946e9e594dbdb6.jpg'}
    ]
}



const friendsReducer = (state = initialState, action) => {

    switch (action.type){
        case FOLLOW:
            return {
                ...state,
                friends: state.friends.map(friends => { //с помошью мап прогоняем всех пользователей создаем копию в которой меняем фолловед,
                    if (friends === action.userId) {    // возвращаем копию если нужно зафоловить и если не надо то возвращаем обычный friends
                        return {...friends, followed: true}
                    }
                    return friends
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                friends: state.friends.map(friends => { //с помошью мап прогоняем всех пользователей создаем копию в которой меняем фолловед,
                    if (friends === action.userId) {    // возвращаем копию если нужно зафоловить и если не надо то возвращаем обычный friends
                        return {...friends, followed: false}
                    }
                    return friends
                })
            }

        case setUsers:
            return {...state, friends: [...state.friends, ...action.friends]} //перезатераем
        default:
            return state
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId }); //краткая запись return
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUserAC = (friends) => ({ type: UNFOLLOW, friends });

export default friendsReducer;