import axios from 'axios'

export const getTodos = () => {
    const URL = 'http://localhost:3001/todos/'
    return axios.get(URL)
}

export const getTodo = id => {
    const URL = `http://localhost:3001/todos/${id}`
    return axios.get(URL)
}

export const deleteTodo = id => {
    const URL = `http://localhost:3001/todos/${id}`
    return axios.delete(URL)
}

export const createTodo = createdTodo => {
    const URL = 'http://localhost:3001/todos/'
    return axios.post(URL, createdTodo)
}

export const updateTodo = (id, updatedTodo) => {
    const URL = `http://localhost:3001/todos/${id}`
    return axios.put(URL, updatedTodo)
}