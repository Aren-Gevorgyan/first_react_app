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

const upgradeProfile = (aboutMy) => {
    return instanceAxios.put(`profile`, aboutMy).then(response => response.data)
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

const getStatus = (userId, myId) => {
    const id = !userId ? myId : userId;
    return instanceAxios.get(`profile/status/${id}`).then(response => response.data);
}

const setStatus = (status) => {
    return instanceAxios.put(`profile/status`, { status });
}

const login = (login, password, rememberMe) => {
    return instanceAxios.post(`auth/login`, { email: login, password, rememberMe })
}

const upgradePhoto = (photo) => {
    const formData = new FormData();
    formData.append("image", photo);
    return instanceAxios.put(`profile/photo`, formData, { headers: { "Content-Type": "multipart/form-data" } })
}

const logout = () => {
    return instanceAxios.delete(`auth/login`)
}

export const userApi = {
    getUsers,
    followDelete,
    followed,
    getNewUsers,
}

export const profileApi = {
    getProfile,
    getStatus,
    setStatus,
    upgradePhoto,
    upgradeProfile,
}

export const authApi = {
    auth,
    login,
    logout,
}