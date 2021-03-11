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

export const authProfileData = (profileData) => ({ type: AUTH_PROFILE_DATA, profileData })