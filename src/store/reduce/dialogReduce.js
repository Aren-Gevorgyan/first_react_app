const ADD_MESSAGES = "ADD_MESSAGES";
const SET_NEW_MESSAGES_TEXT = "SET_NEW_MESSAGES_TEXT";

const dialogReduce = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGES:
            let newMessage = {
                id: 4,
                message: state.newMessageText,
            }

            state.arrayMessages.push(newMessage);
            state.newMessageText = "";
            return state;
        case SET_NEW_MESSAGES_TEXT:
            state.newMessageText = action.newText;
            return state;

        default:
            return state;
    }

}

export const createActionAddMessages = () => ({ type: ADD_MESSAGES });
export const createActionSetMessagesText = (newText) => ({ type: SET_NEW_MESSAGES_TEXT, newText });

export default dialogReduce;