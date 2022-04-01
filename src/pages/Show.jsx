import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getTodo } from "../services/todos-api"


export default function Show() {

    const { id } = useParams()

    const [data, setData] = useState({})

    useEffect(() => {
        getTodo(id).then(res => setData(res.data))
    }, [])

    return (
        <div>
            <h2>{data.description}</h2>
        </div>
    )
}