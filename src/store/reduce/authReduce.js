import { authApi } from '../../dal/api';

const AUTH = "AUTH";

const initialState = {
    id: null,
    email: null,
    login: null,
    ifAuth: false,
}

const authReduce = (state = initialState, action) => {

    switch (action.type) {
        case AUTH:
            return {...state, ...action.data, ifAuth: true }
        default:
            return state;
    }

}

export default authReduce;

const setAuthData = (data) => ({ type: AUTH, data });

export const authThunk = () => {
    return (dispatch) => {
        authApi.auth().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthData(data.data));
            }
        })
    }
}