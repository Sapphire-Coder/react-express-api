import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { deleteTodo, getTodo } from "../services/todos-api"

export default function Show() {

    const navigate = useNavigate()
    const { id } = useParams()
    const [data, setData] = useState({})

    useEffect(() => {
        getTodo(id).then(res => setData(res.data))
    }, [])

    const delTodo = () => {
        deleteTodo(id)
        navigate('/')
    }

    return (
        <div>
            <h2>{data.description}</h2>
            <button onClick = {delTodo}>Delete</button>
            <Link to = {`/${id}/edit`}>Edit</Link>
        </div>
    )
}