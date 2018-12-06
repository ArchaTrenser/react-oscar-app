import React from 'react';
import ReactDOM from 'react-dom';
import App ,{history} from './App';
import { login ,logout } from './actions/auth';
import {firebase} from './firebase/firebase';
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux';
import configStore from './store/configStore';
import * as serviceWorker from './serviceWorker';
import './index.css';
const store = configStore();

const jsx= (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'));
firebase.auth().onAuthStateChanged((user)=>
{
    if(user)
    {
        store.dispatch(login(user.uid));
        console.log('logined');
        history.push('/');
    }
    else
    {
        console.log('logout')
        store.dispatch(logout());
    }
})
serviceWorker.unregister();
