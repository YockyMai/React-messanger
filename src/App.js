import React from "react";
import {BrowserRouter, Route} from "react-router-dom"; //Импорт Route плагина
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Audios from "./components/Audios/Audios";
import Feed from "./components/Feed/Feed";
import Settings from "./components/Settings/Settings";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className="body">
                <div className="app-wrapper">
                    <Header/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Route path="/profile" render={ () => <Profile profilePage={props.state.profilePage}
                                                                       dispatch = {props.dispatch}/>}/>
                        <Route path="/dialogs" render={ () => <Dialogs store={props.store}
                                                                       dispatch = {props.dispatch}/> }/>
                        <Route path="/feed" component={ () => <Feed/> } />
                        <Route path="/audios" component={ () => <Audios/> } />
                        <Route path="/settings" component={ () => <Settings/> } />


                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
