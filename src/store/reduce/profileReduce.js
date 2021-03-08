const ADD_POST = "ADD_POST";
const SET_NEW_POST_TEXT = "SET_NEW_POST_TEXT";

const initialState = {
    arrayPosts: [
        { id: 1, post: 'My first post', like: 5 },
        { id: 2, post: 'My second post', like: 2 },
        { id: 3, post: 'My third post', like: 7 },
    ],
    newPostText: "",
}

const profileReduce = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                post: state.newPostText,
                like: 0
            }
            return {
                ...state,
                arrayPosts: [...state.arrayPosts, newPost],
                newPostText: ""
            };
        case SET_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        default:
            return state;
    }

}

export const addPost = () => ({ type: ADD_POST });
export const upgradePostText = (newText) => ({ type: SET_NEW_POST_TEXT, newText });

export default profileReduce;