const FOLLOW = "FOLLOW";
const SET_USERS = "SET USERS";
const TOTAL_COUNT = "TOTAL COUNT";
const CURRENT_PAGE_NUMBER = "CURRENT PAGE NUMBER";
const NEW_PAGE_NUMBER = "NEW PAGE NUMBER";
const DISABLED_NEXT = "DISABLED NEXT";
const DISABLED_PREV = "DISABLED PREV";
const LOADING = "LOADING";

const initialState = {
    arrayUsers: [],
    totalCount: 0,
    currentPage: 1,
    countUsers: 5,
    replacePage: { numberFirst: 1, numberSecond: 4 },
    disabledPrev: true,
    disabledNext: false,
    loading: false,
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

export const following = (follow, currentId) => ({ type: FOLLOW, follow, currentId });
export const usersData = (usersData) => ({ type: SET_USERS, usersData });
export const setTotalCount = (totalCount) => ({ type: TOTAL_COUNT, totalCount });
export const setCurrentPageNumber = (currentPageNumber) => ({ type: CURRENT_PAGE_NUMBER, currentPageNumber });
export const setNewPagesNumber = (newPagesNumber) => ({ type: NEW_PAGE_NUMBER, newPagesNumber });
export const setDisabledPrev = (disabled) => ({ type: DISABLED_PREV, disabled });
export const setDisabledNext = (disabled) => ({ type: DISABLED_NEXT, disabled });
export const setLoading = (loading) => ({ type: LOADING, loading });