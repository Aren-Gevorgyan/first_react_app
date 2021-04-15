import { stopSubmit } from 'redux-form';
import { authApi } from '../../dal/api';
import { profileApi } from '../../dal/api';

const AUTH = "auth/AUTH";
const AUTH_PROFILE_DATA = "auth/PROFILE_DATA";
const LOGOUT = "auth/LOGOUT";

const initialState = {
    email: null,
    id: null,
    login: null,
    headerProfileData: null,
    ifAuth: false,
}

const authReduce = (state = initialState, action) => {

    switch (action.type) {
        case AUTH:
            return {...state, ...action.data, ifAuth: true }
        case AUTH_PROFILE_DATA:
            return {...state, headerProfileData: action.profileData }
        case LOGOUT:
            return {...state,
                id: action.deleteData,
                email: action.deleteData,
                login: action.deleteData,
                headerProfileData: action.deleteData,
                ifAuth: false
            }
        default:
            return state;
    }
}

export default authReduce;

const setAuthData = (data) => ({ type: AUTH, data });
const authProfileData = (profileData) => ({ type: AUTH_PROFILE_DATA, profileData });
const logout = (deleteData) => ({ type: LOGOUT, deleteData });

export const authThunk = () => {

    return async(dispatch) => {
        const data = await authApi.auth();
        if (data.resultCode === 0) {
            const response = await profileApi.getProfile(data.data.id);
            dispatch(authProfileData(response));
            dispatch(setAuthData(data.data));
        }
    }
}

export const loginThunk = (login, password, rememberMy) => {
    return async(dispatch) => {
        const response = await authApi.login(login, password, rememberMy)
        if (response.data.resultCode === 1) {
            dispatch(stopSubmit('login', { _error: response.data.fieldsErrors[0].error }));
        } else {
            dispatch(setAuthData(response.data.data));
        }
    }
}

export const logoutThunk = () => {
    return async(dispatch) => {
        const response = await authApi.logout()
        if (response.data.resultCode === 0) {
            dispatch(logout(null));
        }
    }
}