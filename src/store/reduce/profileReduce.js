import { profileApi } from '../../dal/api';

const ADD_POST = "ADD_POST";
const PROFILE = "PROFILE";
const SET_STATUS = "SET STATUS";

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

export const getStatusThunk = (userId, myId) => {
    return (dispatch) => {
        profileApi.getStatus(userId, myId).then(status => {
            dispatch(setStatus(status))
        })
    }
}

export const setStatusThunk = (status) => {
    return (dispatch) => {
        profileApi.setStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}

export const getProfileThunk = (userId, myId) => {
    return (dispatch) => {
        profileApi.getProfile(userId ? userId : myId)
            .then(data => {
                dispatch(profileData(data));
            })
            .catch(error => {
                console.log(error);
            })
    }
}