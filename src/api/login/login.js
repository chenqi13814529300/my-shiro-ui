import axios from "axios";
const login = (loginInfo) => {
    console.log(loginInfo);
    return axios.post('api/user/login', {
            ...loginInfo
    })
}

const loginout = (token) => {
    return axios.post('api/user/loginout', {
        headers: {
            token: token
        }
    })
}
export default {
    login,
    loginout
}