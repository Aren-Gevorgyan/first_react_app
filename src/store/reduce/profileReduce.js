import { profileApi } from '../../dal/api';

const ADD_POST = "profile/ADD_POST";
const PROFILE = "profile/PROFILE";
const SET_STATUS = "profile/SET STATUS";
const UPGRADE_PHOTO = "profile/UPGRADE_PHOTO";

const initialState = {
    arrayPosts: [
        { id: 1, post: 'My first post', like: 5 },
        { id: 2, post: 'My second post', like: 2 },
        { id: 3, post: 'My third post', like: 7 },
    ],
    status: null,
    profile: null,
}

const profileReduce = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                post: action.newPost,
                like: 0
            }
            return {
                ...state,
                arrayPosts: [...state.arrayPosts, newPost],
                newPostText: ""
            };
        case PROFILE:
            return {...state, profile: action.profileData }
        case UPGRADE_PHOTO:
            return {...state, profile: {...state.profile, photos: action.photo } }
        case SET_STATUS:
            return {...state, status: action.status }
        default:
            return state;
    }
}

export default profileReduce;

export const addPost = (newPost) => ({ type: ADD_POST, newPost });
const profileData = (profileData) => ({ type: PROFILE, profileData });
const setStatus = (status) => ({ type: SET_STATUS, status });
const upgradePhotoAction = (photo) => ({ type: UPGRADE_PHOTO, photo });

export const getStatusThunk = (userId, myId) => {
    return async(dispatch) => {
        const status = await profileApi.getStatus(userId, myId);
        dispatch(setStatus(status))
    }
}

export const setStatusThunk = (status) => {
    return async(dispatch) => {
        const response = await profileApi.setStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}

export const getProfileThunk = (userId, myId) => {
    return async(dispatch) => {
        const data = await profileApi.getProfile(userId ? userId : myId);
        dispatch(profileData(data));

    }
}

export const upgradePhoto = (photo) => {
    return async(dispatch) => {
        const response = await profileApi.upgradePhoto(photo);
        dispatch(upgradePhotoAction(response.data.data.photos));
    }
}

export const upgradeProfile = (aboutMe) => {
    return async(dispatch, getState) => {
        const getMyId = getState().auth.id;
        const response = await profileApi.upgradeProfile(aboutMe);
        if (response.resultCode === 0) {
            const data = await profileApi.getProfile(getMyId);
            dispatch(profileData(data));
        }
    }
}