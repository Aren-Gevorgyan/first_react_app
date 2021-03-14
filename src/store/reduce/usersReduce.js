import { userApi } from '../../dal/api';


const FOLLOW = "FOLLOW";
const SET_USERS = "SET USERS";
const TOTAL_COUNT = "TOTAL COUNT";
const CURRENT_PAGE_NUMBER = "CURRENT PAGE NUMBER";
const NEW_PAGE_NUMBER = "NEW PAGE NUMBER";
const DISABLED_NEXT = "DISABLED NEXT";
const DISABLED_PREV = "DISABLED PREV";
const LOADING = "LOADING";
const FOLLOW_DISABLED = "FOLLOW DISABLED";

const initialState = {
    arrayUsers: [],
    totalCount: 0,
    currentPage: 1,
    countUsers: 5,
    replacePage: { numberFirst: 1, numberSecond: 4 },
    disabledPrev: true,
    disabledNext: false,
    loading: false,
    disabledFollowButton: [],
}

const usersReduce = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS:
            //deepened copy
            return {...state, arrayUsers: action.usersData }
        case TOTAL_COUNT:
            return {...state, totalCount: action.totalCount }
        case DISABLED_PREV:
            return {...state, disabledPrev: action.disabled }
        case DISABLED_NEXT:
            return {...state, disabledNext: action.disabled }
        case FOLLOW_DISABLED:
            return {...state,
                disabledFollowButton: action.disabled ? [...state.disabledFollowButton, action.userId] : state.disabledFollowButton.filter(id => id !== action.userId)
            }
        case CURRENT_PAGE_NUMBER:
            return {...state, currentPage: action.currentPageNumber }
        case NEW_PAGE_NUMBER:
            return {...state, replacePage: action.newPagesNumber }
        case LOADING:
            return {...state, loading: action.loading }
        case FOLLOW:
            let usersArrayCopy = state.arrayUsers.map(value => {

                if (value.id === action.currentId) {
                    return {...value, followed: action.follow };
                }
                return value;
            })

            return {...state, arrayUsers: usersArrayCopy, followed: action }
        default:
            return state;
    }
}

export default usersReduce;

const following = (follow, currentId) => ({ type: FOLLOW, follow, currentId });
const usersData = (usersData) => ({ type: SET_USERS, usersData });
const setTotalCount = (totalCount) => ({ type: TOTAL_COUNT, totalCount });
export const setCurrentPageNumber = (currentPageNumber) => ({ type: CURRENT_PAGE_NUMBER, currentPageNumber });
export const setNewPagesNumber = (newPagesNumber) => ({ type: NEW_PAGE_NUMBER, newPagesNumber });
export const setDisabledPrev = (disabled) => ({ type: DISABLED_PREV, disabled });
export const setDisabledNext = (disabled) => ({ type: DISABLED_NEXT, disabled });
const setFollowDisabled = (disabled, userId) => ({ type: FOLLOW_DISABLED, disabled, userId });
const setLoading = (loading) => ({ type: LOADING, loading });


export const getUsersThunk = (currentPage, countUsers) => {
    return (dispatch) => {
        dispatch(setLoading(true));
        userApi.getUsers(currentPage, countUsers)
            .then(data => {
                dispatch(usersData(data.items));
                dispatch(setTotalCount(data.totalCount));
                dispatch(setLoading(false));
            })
    }
}
export const followThunk = (id, follow) => {
    return (dispatch) => {
        dispatch(setFollowDisabled(true, id));
        userApi.followed(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(following(!follow, id));
                dispatch(setFollowDisabled(false, id));
            }
        })
    }
}

export const unFollowThunk = (id, follow) => {
    return (dispatch) => {
        dispatch(setFollowDisabled(true, id));
        userApi.followDelete(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(following(!follow, id));
                dispatch(setFollowDisabled(false, id));
            }
        })
    }
}