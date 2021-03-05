const FOLLOW = "FOLLOW";
const SET_USERS = "SET USERS";

const initialState = {
    arrayUsers: []

}

const usersReduce = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, arrayUsers: action.usersData }
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