const FOLLOW = "FOLLOW";

const initialState = {
    arrayUsers: [

        {
            id: 1,
            follow: false,
            photo: 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg',
            name: "Armen",
            status: "Es hajoxak em",
            location: { city: "Vanadzor", country: "Armenia" }
        },

        {
            id: 2,
            follow: false,
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBT5gubg-W3PkfaYaEWF-RaAYaygABWYscJQ&usqp=CAU',
            name: "Karmen",
            status: "Es hajoxak em",
            location: { city: "Erevan", country: "Armenia" }
        },

        {
            id: 3,
            follow: false,
            photo: 'https://img2.goodfon.ru/wallpaper/nbig/c/cf/vysota-gora-zakat-priroda.jpg',
            name: "Karen",
            status: "Es hajoxak em",
            location: { city: "Gyumri", country: "Armenia" }
        },

        {
            id: 4,
            follow: false,
            photo: 'https://img5.goodfon.ru/wallpaper/nbig/8/af/zakat-gory-chelovek.jpg',
            name: "Aren",
            status: "Es hajoxak em",
            location: { city: "Abovyan", country: "Armenia" }
        },
    ],
}

const usersReduce = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            let usersArrayCopy = state.arrayUsers.map(value => {

                if (value.id === action.currentId) {
                    value.follow = action.follow;
                }
                return value;
            })

            return {...state, arrayUsers: usersArrayCopy }
        default:
            return state;
    }
}

export default usersReduce;

export const createFollowAction = (follow, currentId) => ({ type: FOLLOW, follow, currentId })