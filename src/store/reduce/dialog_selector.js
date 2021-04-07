import { createSelector } from 'reselect';

export const getPersonSelector = (state) => {
    return state.dialogPage.arrayPerson;
}

export const getPerson = createSelector(getPersonSelector, (arrayPerson) => {
    return arrayPerson;
})

export const getMessages = (state) => {
    return state.dialogPage.arrayMessages;
}

export const ifAuth = (state) => {
    return state.auth.ifAuth;
}