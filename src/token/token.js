import vue from 'vue'
import router from '../router'
import ElementUI from 'element-ui'
vue.use(ElementUI)
import { Message } from 'element-ui';

const isLoginToken = () => {
    const token = localStorage.getItem("token");
    if (!token) {
        Message({
            showClose: true,
            message: "请先登录",
            type: "error",
            duration: "3000"
        });
        router.push({ path: "/login" });

    }
    return token;
}

const setToken = (token) => {
    localStorage.setItem("token", token);
}


export default {
    isLoginToken,
    setToken
}