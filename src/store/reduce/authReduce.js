import { authApi } from '../../dal/api';
import { profileApi } from '../../dal/api';

const AUTH = "AUTH";
const AUTH_PROFILE_DATA = "PROFILE_DATA";

const initialState = {
    id: null,
    email: null,
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
        default:
            return state;
    }

}

export default authReduce;

const setAuthData = (data) => ({ type: AUTH, data });
const authProfileData = (profileData) => ({ type: AUTH_PROFILE_DATA, profileData });

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
            console.log(response.data)
            dispatch(setAuthData(response.data.data));
        })
    }
}