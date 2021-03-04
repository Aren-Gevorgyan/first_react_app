const initialState = [
    { id: "1", name: "Profile", path: "profile" },
    { id: "2", name: "Dialog", path: "dialogs" },
    { id: "3", name: "Find users", path: "users" },
    { id: "4", name: "News", path: "news" },
    { id: "4", name: "Music", path: "music" },
    { id: "6", name: "Settings", path: "settings" },
    {
        id: "7",
        name: "Friends",
        path: "friends",
        friends: [
            { id: "1", img: "https://i.pinimg.com/736x/c6/2c/fb/c62cfbe30fa28bd57a38e4b8ebb7a87c.jpg" },
            { id: "2", img: "https://picjumbo.com/wp-content/uploads/alone-with-his-thoughts-1080x720.jpg" },
            { id: "3", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8l6hCF3oQh36N-1-f1NBixR265V4NZ6rZDg&usqp=CAU" }
        ]
    }
]

const navbarReduce = (state = initialState, action) => {
    return state;
}

export default navbarReduce;