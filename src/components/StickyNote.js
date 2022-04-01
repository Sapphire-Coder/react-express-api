export default function StickyNote(props) {
    return (
        <div>
            <a href = {`/${props.id}`}><h2>{props.description}</h2></a>
        </div>
    )
}