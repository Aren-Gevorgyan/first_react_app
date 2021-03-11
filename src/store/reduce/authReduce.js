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

export const setAuthData = (data) => ({ type: AUTH, data });

export default authReduce;