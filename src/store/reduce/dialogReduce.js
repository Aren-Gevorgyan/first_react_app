const ADD_MESSAGES = "ADD_MESSAGES";
const SET_NEW_MESSAGES_TEXT = "SET_NEW_MESSAGES_TEXT";

const initialState = {
    arrayPerson: [
        { id: 1, name: 'Armen', photo: 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg' },
        { id: 2, name: 'Arman', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBT5gubg-W3PkfaYaEWF-RaAYaygABWYscJQ&usqp=CAU' },
        { id: 3, name: 'Karmen', photo: 'https://img2.goodfon.ru/wallpaper/nbig/c/cf/vysota-gora-zakat-priroda.jpg' },
        { id: 4, name: 'Aren', photo: 'https://img5.goodfon.ru/wallpaper/nbig/8/af/zakat-gory-chelovek.jpg' },
    ],
    arrayMessages: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'are you good?' },
        { id: 3, message: 'yes good' },
    ],
    newMessageText: "",
}

const dialogReduce = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGES:
            {
                let newMessage = {
                    id: 4,
                    message: state.newMessageText,
                }
                let stateCopy = {...state }
                stateCopy.arrayMessages = [...state.arrayMessages];
                stateCopy.arrayMessages.push(newMessage);
                stateCopy.newMessageText = "";
                return stateCopy;
            }
        case SET_NEW_MESSAGES_TEXT:
            {
                let stateCopy = {...state }
                stateCopy.newMessageText = action.newText;
                return stateCopy;
            }
        default:
            return state;
    }

}

export const createActionAddMessages = () => ({ type: ADD_MESSAGES });
export const createActionSetMessagesText = (newText) => ({ type: SET_NEW_MESSAGES_TEXT, newText });

export default dialogReduce;