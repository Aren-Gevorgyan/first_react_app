const FOLLOW = "FOLLOW";
const SET_USERS = "SET USERS";
const TOTAL_COUNT = "TOTAL COUNT";
const CURRENT_PAGE_NUMBER = "CURRENT PAGE NUMBER";
const NEW_PAGE_NUMBER = "NEW PAGE NUMBER";

const initialState = {
    arrayUsers: [],
    totalCount: 0,
    currentPage: 1,
    countUsers: 5,
    replacePage: { numberFirst: 1, numberSecond: 4 },
    disabledPrev: true,
    disabledNext: false,
}

const usersReduce = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            //deepened copy
            return {...state, arrayUsers: action.usersData }
        case TOTAL_COUNT:
            return {...state, totalCount: action.totalCount }
        case CURRENT_PAGE_NUMBER:
            return {...state, currentPage: action.currentPageNumber }
        case NEW_PAGE_NUMBER:
            console.log(action)
            return {...state, replacePage: action.newPagesNumber }
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
export const createNewPagesAction = (newPagesNumber) => ({ type: NEW_PAGE_NUMBER, newPagesNumber });