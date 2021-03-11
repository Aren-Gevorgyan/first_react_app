import profileReduce from './reduce/profileReduce';
import dialogReduce from './reduce/dialogReduce';
import navbarReduce from './reduce/navbarReduce';
import usersReduce from './reduce/usersReduce';
import authReduce from './reduce/authReduce';
import { combineReducers, createStore } from 'redux';
import headerReduce from './reduce/headerReduce';

const reducers = combineReducers({
    header: headerReduce,
    profilePage: profileReduce,
    dialogPage: dialogReduce,
    usersPage: usersReduce,
    navbar: navbarReduce,
    auth: authReduce,
})

const store = createStore(reducers);
window.store = store;
export default store;