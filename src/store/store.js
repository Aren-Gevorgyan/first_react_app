import profileReduce from './reduce/profileReduce';
import dialogReduce from './reduce/dialogReduce';
import navbarReduce from './reduce/navbarReduce';

const store = {

    _state: {

        profilePage: {
            arrayPosts: [
                { id: 1, post: 'My first post', like: 5 },
                { id: 2, post: 'My second post', like: 2 },
                { id: 3, post: 'My third post', like: 7 },
            ],
            newPostText: "",
        },

        dialogPage: {
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
        },

        navbar: [
            { id: "1", name: "Profile", path: "profile" },
            { id: "2", name: "Dialog", path: "dialogs" },
            { id: "3", name: "News", path: "news" },
            { id: "4", name: "Music", path: "music" },
            { id: "5", name: "Settings", path: "settings" },
            {
                id: "6",
                name: "Friends",
                path: "friends",
                friends: [
                    "https://i.pinimg.com/736x/c6/2c/fb/c62cfbe30fa28bd57a38e4b8ebb7a87c.jpg",
                    "https://picjumbo.com/wp-content/uploads/alone-with-his-thoughts-1080x720.jpg",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8l6hCF3oQh36N-1-f1NBixR265V4NZ6rZDg&usqp=CAU",
                ]
            }
        ],
    },

    get state() {
        return this._state;
    },

    _subscribe: () => {
        console.log("not subscribe");
    },
    set subscribe(render) {
        this._subscribe = render;
    },

    dispatch(action) {
        this._state.profilePage = profileReduce(this._state.profilePage, action);
        this._state.dialogPage = dialogReduce(this._state.dialogPage, action);
        this._subscribe();
    }
}

export default store;