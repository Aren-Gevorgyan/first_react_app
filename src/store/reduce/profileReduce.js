const ADD_POST = "ADD_POST";
const SET_NEW_POST_TEXT = "SET_NEW_POST_TEXT";

const profileReduce = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                post: state.newPostText,
                like: 0
            }
            state.arrayPosts.push(newPost);
            state.newPostText = "";
            return state;
        case SET_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }

}

export const createActionAddPost = () => ({ type: ADD_POST });
export const createActionSetPostText = (newText) => ({ type: SET_NEW_POST_TEXT, newText });

export default profileReduce;