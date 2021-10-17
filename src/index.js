import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/state";
import {BrowserRouter} from "react-router-dom";

let rerender = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state = {store.getState()}
                 store = {store}
                 dispatch = {store.dispatch.bind(store)}/> {/*bind - хард бинд что элементы берутся с store*/}
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerender(store.getState());
store.subscribe(rerender);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
