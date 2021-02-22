import renderApp from '../render/render';

let arrayPosts = [
    { id: 1, post: 'My first post', like: 5 },
    { id: 2, post: 'My second post', like: 2 },
    { id: 3, post: 'My third post', like: 7 },
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
        arrayPosts,
    },

    dialogPage: {
        arrayPerson,
        arrayMessages
    },

    navbar: [],
}


export const setPost = (value) => {
    let newPost = {
        id: 4,
        post: value,
        like: 0
    }
    arrayPosts.push(newPost);
    renderApp(state, setPost, setMessage);
}

export const setMessage = (value) => {

    let newMessage = {
        id: 4,
        message: value,
    }

    arrayMessages.push(newMessage);
    renderApp(state, setPost, setMessage);

}

export default state;