import axios from 'axios'

const goAdmin = (token) => {
    return axios.get('api/base/admin', {
        headers: {
            token: token
        }
    })
}
const goTeacher = (token) => {
    return axios.get('api/base/teacher', {
        headers: {
            token: token
        }
    })
}
const goStudent = (token) => {
    return axios.get('api/base/student', {
        headers: {
            token: token
        }
    })
}

const goInsert = (token) => {
    return axios.post('/api/base/insert', {}, {
        headers:{
            token:token
        }
    })
}



const goUpdate = (token) => {
    return axios.put('api/base/update', {}, {
        headers:{
            token:token
        }
    })
}

const goDelete = (token) => {
    return axios.delete('api/base/delete', {
        headers: {
            token: token
        }
    })
}
const goSelect = (token) => {
    console.log(token);
    return axios.get('api/base/select', {
        headers: {
            token: token
        }
    })
}
export default {
    goAdmin,
    goTeacher,
    goStudent,
    goInsert,
    goDelete,
    goSelect,
    goUpdate
}