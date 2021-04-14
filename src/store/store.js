import profileReduce from './reduce/profileReduce';
import dialogReduce from './reduce/dialogReduce';
import navbarReduce from './reduce/navbarReduce';
import usersReduce from './reduce/usersReduce';
import authReduce from './reduce/authReduce';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import middleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
    profilePage: profileReduce,
    dialogPage: dialogReduce,
    usersPage: usersReduce,
    navbar: navbarReduce,
    auth: authReduce,
    form: formReducer,
})

const store = createStore(reducers, applyMiddleware(middleware));
window.store = store;
export default store;