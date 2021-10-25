//СПИСОК ПЕРЕМЕННЫХ ДЛЯ DISPATCH
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state : {
        profilePage: {
            postData : [
                {id: 1, message: 'Hi, how are you'  , like_counts: 15},
                {id: 2, message: 'Its my first post', like_counts: 12},
                {id: 3, message: 'Its my first post', like_counts: 5},
                {id: 4, message: 'Its my first post', like_counts: 12},
                {id: 5, message: 'Its my first post', like_counts: 12}
            ], //BLL - Массив с данными
            newPostText : ''
        },
        messagesPage: {
            dialogsData : [
                {id: 1, name: 'Valera', avatar: 'https://i.imgur.com/gqJvKwW.png'},
                {id: 2, name: 'Andrey', avatar: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'},
                {id: 3, name: 'Petor', avatar: 'https://www.meme-arsenal.com/memes/87d4bfeed251dba0ce946e9e594dbdb6.jpg'},
                {id: 4, name: 'Sasha', avatar: 'https://telemetr.me/photos/9b9c2f98bbcaa5a43b89b317280d6b26.jpg'},
                {id: 5, name: 'Viktor', avatar: 'https://pm1.narvii.com/7303/19cabf3a1c19c4a2b052eae917a4ffc9241a7bb4r1-437-459v2_uhq.jpg'},
                {id: 6, name: 'Katya', avatar: 'https://trikky.ru/wp-content/blogs.dir/1/files/2020/12/27/izobrazhenie_viber_2020-12-27_17-34-45.jpg'}
            ],
            messagesData : [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'how are u'},
                {id: 3, message: 'my name is Petor'},
                {id: 4, message: 'Hi'},
                {id: 5, message: 'well'},
                {id: 6, message: 'my name is Valera'}
            ],
            newMessageBody : ''
        }
    },
    getState(){
      return this._state
    },
    _callSubscribe(){
        console.log('')
    }, //Метод _state
    subscribe(observer){
        this._callSubscribe = observer;
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._callSubscribe();
    }
}

export default store;
window.store = store;