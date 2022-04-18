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
            <div id = 'container'>
            {
                data.map((e, i) => {
                    return (
                        <StickyNote todo = {e} key = {i}/>
                    )
                })
            }
            </div>
        </div>
    )
}