import { profileApi } from '../../dal/api';

const AUTH_PROFILE_DATA = "PROFILE_DATA";

const initialState = {
    headerProfileData: null,
}

const headerReduce = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_PROFILE_DATA:
            return {...state, headerProfileData: action.profileData }
        default:
            return state;
    }
}

export default headerReduce;

const authProfileData = (profileData) => ({ type: AUTH_PROFILE_DATA, profileData });

export const authProfileThunk = (userId) => {
    return (dispatch) => {
        profileApi.getProfile(userId)
            .then(data => {
                dispatch(authProfileData(data));
            })
    }
}