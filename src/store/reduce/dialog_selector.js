export const getPerson = (state) => {
    return state.dialogPage.arrayPerson;
}
export const getMessages = (state) => {
    return state.dialogPage.arrayMessages;
}
export const ifAuth = (state) => {
    return state.auth.ifAuth;
}