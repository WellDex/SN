import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {'API-KEY': '14a01314-c9a1-4d03-a1ef-0287c87d04da'},
});

export const profileAPI = {
  getProfile: (userId) => {
    return instance.get(`profile/${userId}`).then((res) => res.data);
  },
  getStatus: (userId) => {
    return instance.get(`profile/status/${userId}`).then((res) => res.data);
  },
  putProfile: (newProfileInfo) => {
    return instance.put(`profile`, newProfileInfo).then((res) => res.data);
  },
  putProfilePhoto: (newPhoto) => {
    const fd = new FormData();
    fd.append('image', newPhoto);
    return instance.put(`profile/photo`, fd).then((res) => res.data);
  },
  putStatus: (newStatus) => {
    return instance.put(`profile/status`, newStatus).then((res) => res.data);
  },
};

export const usersAPI = {
  getUsers: (userCount, pageNumber) => {
    return instance
      .get(`users?count=${userCount}&page=${pageNumber}`)
      .then((res) => res.data);
  },
  getFollowUsers: (userCount, pageNumber, isFriend = null) => {
    return instance
      .get(`users?count=${userCount}&page=${pageNumber}&friend=${isFriend}`)
      .then((res) => res.data);
  },
  follow: (userId) => {
    return instance.post(`follow/${userId}`).then((res) => res.data)();
  },
  unfollow: (userId) => {
    return instance.delete(`follow/${userId}`).then((res) => res.data);
  },
};

export const authAPI = {
  me: () => {
    return instance.get(`auth/me`).then((res) => res.data);
  },
  login: (email, password, rememberMe = true, captcha = null) => {
    return instance
      .post(`auth/login`, {email, password, rememberMe, captcha})
      .then((res) => res.data);
  },
  logout: () => {
    return instance.delete(`auth/login`).then((res) => res.data);
  },
};

export const securityAPI = {
  getCaptchaUrl: () => {
    return instance.get(`security/get-captcha-url`).then((res) => res.data.url);
  },
};
