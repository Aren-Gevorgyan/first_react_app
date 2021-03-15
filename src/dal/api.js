import * as axios from 'axios';

const instanceAxios = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "0e0c695e-f307-4053-b6f2-d2bee079a661" }
})

const auth = () => {
    return instanceAxios.get('auth/me').then(response => response.data);
}

const getProfile = (userId) => {
    return instanceAxios.get(`profile/${userId}`).then(response => response.data)
}

const getUsers = (currentPage, countUsers) => {
    return instanceAxios.get(`users?page=${currentPage}&count=${countUsers}`).then(response => response.data)
}

const followDelete = (userId) => {
    return instanceAxios.delete(`follow/${userId}`).then(response => response.data)
}

const followed = (userId) => {
    return instanceAxios.post(`follow/${userId}`, {}).then(response => response.data)
}

const getNewUsers = (p, countUsers) => {
    return instanceAxios.get(`users?page=${p}&count=${countUsers}`);
}

export const userApi = {
    getUsers,
    followDelete,
    followed,
    getNewUsers,
}

export const profileApi = {
    getProfile,
}

export const authApi = {
    auth,
}