const FOLLOW = "FOLLOW";
const SET_USERS = "SET USERS";
const TOTAL_COUNT = "TOTAL COUNT";
const CURRENT_PAGE_NUMBER = "CURRENT PAGE NUMBER";

const initialState = {
    arrayUsers: [],
    totalCount: 0,
    currentPage: 1,
    countUsers: 5,
}

const usersReduce = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, arrayUsers: action.usersData }
        case TOTAL_COUNT:
            return {...state, totalCount: action.totalCount }
        case CURRENT_PAGE_NUMBER:
            return {...state, totalCount: action.currentPageNumber }
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

export const createFollowAction = (follow, currentId) => ({ type: FOLLOW, follow, currentId });
export const createSetUsersAction = (usersData) => ({ type: SET_USERS, usersData });
export const createTotalCountAction = (totalCount) => ({ type: TOTAL_COUNT, totalCount });
export const createCurrentPageNumberAction = (currentPageNumber) => ({ type: CURRENT_PAGE_NUMBER, currentPageNumber });