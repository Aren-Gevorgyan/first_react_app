import profileReduce from './reduce/profileReduce';
import dialogReduce from './reduce/dialogReduce';
import navbarReduce from './reduce/navbarReduce';
import usersReduce from './reduce/usersReduce';
import { combineReducers, createStore } from 'redux';

const reducers = combineReducers({
    profilePage: profileReduce,
    dialogPage: dialogReduce,
    usersPage: usersReduce,
    navbar: navbarReduce,
})

const store = createStore(reducers);
export default store;