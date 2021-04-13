import { profileApi } from '../../dal/api';

const AUTH_PROFILE_DATA = "header/PROFILE_DATA";

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
    return async(dispatch) => {
        const data = await profileApi.getProfile(userId)
        dispatch(authProfileData(data));
    }
}