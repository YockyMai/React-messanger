const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state ,action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: state.newPostText, //ОТСАНОВИЛСЯ НА ТОМ ЧТО
                like_counts: 0
            }
            state.postData.unshift(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
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