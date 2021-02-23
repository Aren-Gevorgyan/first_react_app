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

        navbar: [],
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

    setPost() {
        let newPost = {
            id: 4,
            post: this._state.profilePage.newPostText,
            like: 0
        }
        this._state.profilePage.arrayPosts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._subscribe();
    },

    setNewPostText(value) {
        this._state.profilePage.newPostText = value;
        this._subscribe();
    },

    setMessage() {

        let newMessage = {
            id: 4,
            message: this._state.dialogPage.newMessageText,
        }

        this._state.dialogPage.arrayMessages.push(newMessage);
        this._state.dialogPage.newMessageText = "";
        this._subscribe();
    },

    setNewMessageText(value) {
        this._state.dialogPage.newMessageText = value;
        this._subscribe();
    },
}

export default store;