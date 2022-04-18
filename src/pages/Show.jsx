import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
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
            <label>Complete: </label>
            <input type = 'checkbox' checked = {data.complete} /> <br />
            <button onClick = {delTodo}>Delete</button> <br/>
            <button onClick={() => navigate(`/${id}/edit`)}>Edit</button>
        </div>
    )
}