const ADD_MESSAGES = "ADD_MESSAGES";

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
}

const dialogReduce = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGES:
            let newMessage = {
                id: 5,
                message: action.newText,
            }
            return {
                ...state,
                arrayMessages: [...state.arrayMessages, newMessage],
            }
        case "SELECTOR":
            return {...state }
        default:
            return state;
    }

}

export const addMessages = (newText) => ({ type: ADD_MESSAGES, newText });

export default dialogReduce;