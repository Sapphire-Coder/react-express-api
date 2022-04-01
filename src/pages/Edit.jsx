import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { updateTodo, getTodo } from "../services/todos-api"

export default function Edit() {

    const navigate = useNavigate()
    const { id } = useParams()
    const [data, setData] = useState({})

    useEffect(() => {
        getTodo(id).then(res => setData(res.data))
    }, [])

    const updTodo = e => {
        e.preventDefault()
        const todo = {description: e.target.description.value, complete: false}
        updateTodo(id, todo)
        navigate(`/${id}`)
    }

    return (
        <div>
            <form onSubmit = {updTodo}>
                <input type = 'text' name = 'description' defaultValue = {data.description} />
                <input type = 'submit' />
            </form>
        </div>
    )
}