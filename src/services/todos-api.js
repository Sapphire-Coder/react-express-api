import axios from 'axios'

export const getTodos = () => {
    const URL = 'http://localhost:3001/todos/'
    return axios.get(URL)
}

export const getTodo = id => {
    const URL = `http://localhost:3001/todos/${id}`
    return axios.get(URL)
}