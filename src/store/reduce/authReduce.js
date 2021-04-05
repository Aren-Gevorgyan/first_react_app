import { authApi } from '../../dal/api';
import { profileApi } from '../../dal/api';

const AUTH = "AUTH";
const AUTH_PROFILE_DATA = "PROFILE_DATA";
const LOGOUT = "LOGOUT";
const LOGIN_ERROR = "LOGIN ERROR";

const initialState = {
    id: null,
    email: null,
    login: null,
    headerProfileData: null,
    ifAuth: false,
    loginError: null,
}

const authReduce = (state = initialState, action) => {

    switch (action.type) {
        case AUTH:
            return {...state, ...action.data, ifAuth: true }
        case AUTH_PROFILE_DATA:
            return {...state, headerProfileData: action.profileData }
        case LOGOUT:
            return {...state, ifAuth: false }
        case LOGIN_ERROR:
            return {...state, loginError: action.error }
        default:
            return state;
    }

}

export default authReduce;

const setAuthData = (data) => ({ type: AUTH, data });
const authProfileData = (profileData) => ({ type: AUTH_PROFILE_DATA, profileData });
const logout = () => ({ type: LOGOUT });
const loginError = (error) => ({ type: LOGIN_ERROR, error });

export const authThunk = () => {

    return (dispatch) => {
        authApi.auth().then(data => {
            if (data.resultCode === 0) {
                profileApi.getProfile(data.data.id)
                    .then(data => {
                        dispatch(authProfileData(data));
                    })

                dispatch(setAuthData(data.data));
            }
        })
    }
}

export const loginThunk = (login, password, rememberMy) => {
    return (dispatch) => {
        authApi.login(login, password, rememberMy).then(response => {
            if (response.data.resultCode === 1) {
                dispatch(loginError(response.data.fieldsErrors[0].error));
            } else {
                dispatch(setAuthData(response.data.data));
            }
        })
    }
}

export const logoutThunk = () => {
    return (dispatch) => {
        authApi.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(logout());
            }
        })
    }
}