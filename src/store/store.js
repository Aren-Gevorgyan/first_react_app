import profileReduce from './reduce/profileReduce';
import dialogReduce from './reduce/dialogReduce';
import navbarReduce from './reduce/navbarReduce';
import usersReduce from './reduce/usersReduce';
import authReduce from './reduce/authReduce';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import headerReduce from './reduce/headerReduce';
import middleware from 'redux-thunk';

const reducers = combineReducers({
    header: headerReduce,
    profilePage: profileReduce,
    dialogPage: dialogReduce,
    usersPage: usersReduce,
    navbar: navbarReduce,
    auth: authReduce,
})

const store = createStore(reducers, applyMiddleware(middleware));
window.store = store;
export default store;