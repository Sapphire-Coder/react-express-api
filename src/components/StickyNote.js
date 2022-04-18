export default function StickyNote(props) {

    const { todo } = props

    return (
        todo.complete == true ? (
            <div>
                <h2><a href = {`/${todo.id}`} className = 'completed'>{todo.description}</a></h2>
            </div>
        ) : (
            <div>
                <h2><a href = {`/${todo.id}`} className = 'notCompleted'>{todo.description}</a></h2>
            </div>
        )
    )
}