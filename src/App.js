import React from "react";
import {BrowserRouter, Route} from "react-router-dom"; //Импорт Route плагина
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Audios from "./components/Audios/Audios";
import Feed from "./components/Feed/Feed";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className="body">
                <div className="app-wrapper">
                    <Header/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Route path="/profile" render={ () => <Profile store = {props.store}/>}/>
                        <Route path="/dialogs" render={ () => <DialogsContainer store={props.store}/>}/>
                        <Route path="/feed" render={ () => <Feed/> } />
                        <Route path="/audios" render={ () => <Audios/> } />
                        <Route path="/settings" render={ () => <Settings/> } />
                        <Route path="/friends" render={ () => <FriendsContainer store={props.store}/> } />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
