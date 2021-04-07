export const getPosts = (state) => {
    return state.profilePage.arrayPosts;
}
export const getProfile = (state) => {
    return state.profilePage.profile;
}
export const getFullName = (state) => {
    return state.profilePage.fullName;
}
export const getUserId = (state) => {
    return state.auth.id;
}
export const getStatus = (state) => {
    return state.profilePage.status;
}