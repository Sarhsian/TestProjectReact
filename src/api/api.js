import * as axios from "axios"

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "49d69812-e695-4680-8351-34c10d703f1c"
    }
});

export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(responce => {
                return responce.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`);
    },
    getProfile(userId) {
        return instance.get(`profile/`+ userId);
    }

}

export const authAPI = {
    me() { 
        return instance.get(`auth/me`);
    }
}