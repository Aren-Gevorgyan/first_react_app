import profileReduce from './reduce/profileReduce';
import dialogReduce from './reduce/dialogReduce';
import navbarReduce from './reduce/navbarReduce';
import { combineReducers, createStore } from 'redux';

const reducers = combineReducers({
    profilePage: profileReduce,
    dialogPage: dialogReduce,
    navbar: navbarReduce,
})

const store = createStore(reducers);
export default store;