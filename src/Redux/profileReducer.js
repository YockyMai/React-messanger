const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData : [
        {id: 1, message: 'Hi, how are you'  , like_counts: 15},
        {id: 2, message: 'Its my first post', like_counts: 12},
        {id: 3, message: 'Its my first post', like_counts: 5},
        {id: 4, message: 'Its my first post', like_counts: 12},
        {id: 5, message: 'Its my first post', like_counts: 12}
    ], //BLL - Массив с данными
    newPostText : ''
}

const profileReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: state.newPostText, //ОТСАНОВИЛСЯ НА ТОМ ЧТО
                like_counts: 0
            }
            return {
                ...state,
                postData: [newPost ,...state.postData],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            } //Копируем и возвращаем копию измененного state
        default:
            return state;
    }

}

export const addPost_ActionCreator = () => {
    return{
        type: ADD_POST
    }
}
export const updateNewPostText_ActionCreator = (newText) => {
    return{
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    }
}
export default profileReducer;