import { useEffect, useState } from 'react'
import StickyNote from '../components/StickyNote'
import { getTodos } from '../services/todos-api'


export default function Home() {

    const [data, setData] = useState([])

    useEffect(() => {
        getTodos().then(res => setData(res.data))
    }, [])

    return (
        <div>
            <h1>To Do List</h1>
            <div>
            {
                data.map((e, i) => {
                    return (
                        <StickyNote description = {e.description} id = {e._id} key = {i} />
                    )
                })
            }
            </div>
        </div>
    )
}