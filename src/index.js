import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";


// let initState = {users: [], user: null, posts: []};

const userReducer = (state = {users: [], user: null}, action)=> {

    switch (action.type){
        case "LOAD_USERS":
            return {...state, users:action.payload};

        case "CHOOSE_USER":
            let id = action.payload;
            let user = state.users.find(value => value.id === id);
            return {...state, user:user}

        default:
            return state;
    }
}

const postReducer = (state = {posts: [], post: null}, action)=> {

    switch (action.type){
        case "LOAD_POSTS":
            let payload = action.payload;
            return {...state, posts: payload}

        case "CHOOSE_POST":
            let id = action.payload;
            let post = state.posts.find(value => value.id === id);
            return {...state, post:post}

        default:
            return state;
    }
}

let combineReducer = combineReducers({
    userReducer,
    postReducer
});



 let store = createStore(combineReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
