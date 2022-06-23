import './style.css'

export function CardAbsence({user, dateTime}) {
    return (
        <div className="Card-absence">
            <strong>{user}</strong>
            <strong>{dateTime}</strong>
        </div>
    )
}