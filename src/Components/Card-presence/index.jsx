import './style.css'

export function CardPresence({user, dateTime}) {
    return (
        <div className="Card-presence">
            <strong>{user}</strong>
            <strong>{dateTime}</strong>
        </div>
    )
}