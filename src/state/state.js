let arrayPosts = [
    { post: 'My first post', like: 5 },
    { post: 'My second post', like: 2 },
    { post: 'My third post', like: 7 },
]
let arrayPerson = [
    { id: 1, name: 'Armen', photo: 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg' },
    { id: 2, name: 'Arman', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBT5gubg-W3PkfaYaEWF-RaAYaygABWYscJQ&usqp=CAU' },
    { id: 3, name: 'Karmen', photo: 'https://img2.goodfon.ru/wallpaper/nbig/c/cf/vysota-gora-zakat-priroda.jpg' },
    { id: 4, name: 'Aren', photo: 'https://img5.goodfon.ru/wallpaper/nbig/8/af/zakat-gory-chelovek.jpg' },
];

let arrayMessages = [
    { id: 1, message: 'hi' },
    { id: 2, message: 'are you good?' },
    { id: 3, message: 'yes good' },
];

const state = {

    profilePage: {
        arrayPosts
    },

    dialogPage: {
        arrayPerson,
        arrayMessages
    },

    navbar: [],
}

export default state;