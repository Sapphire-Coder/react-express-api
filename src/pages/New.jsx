import { useNavigate } from "react-router-dom"
import { createTodo } from "../services/todos-api"

export default function New() {

    const navigate = useNavigate()

    const newTodo = e => {
        e.preventDefault()
        const todo = {description: e.target.description.value, complete: false}
        createTodo(todo)
        navigate('/')
    }

    return (
        <div>
            <form onSubmit = {newTodo}>
                <input type = 'text' name = 'description' />
                <input type = 'submit' />
            </form>
        </div>
    )
}