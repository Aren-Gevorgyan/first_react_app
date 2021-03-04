const FOLLOW = "FOLLOW";

const initialState = {
    arrayUsers: [

        {
            id: 1,
            photo: 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg',
            name: "Armen",
            status: "es hajoxak em",
            location: { city: "Vanadzor", country: "Armenia" }
        },

        {
            id: 2,
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBT5gubg-W3PkfaYaEWF-RaAYaygABWYscJQ&usqp=CAU',
            name: "Karmen",
            status: "es hajoxak em",
            location: { city: "Erevan", country: "Armenia" }
        },

        {
            id: 3,
            photo: 'https://img2.goodfon.ru/wallpaper/nbig/c/cf/vysota-gora-zakat-priroda.jpg',
            name: "Karen",
            status: "es hajoxak em",
            location: { city: "Gyumri", country: "Armenia" }
        },

        {
            id: 4,
            photo: 'https://img5.goodfon.ru/wallpaper/nbig/8/af/zakat-gory-chelovek.jpg',
            name: "Aren",
            status: "es hajoxak em",
            location: { city: "Abovyan", country: "Armenia" }
        },
    ],

    follow: false,
}

const usersReduce = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {...state }
        default:
            return state;
    }
}

export default usersReduce;

export const createFollowAction = (follow) => ({ type: FOLLOW, follow })