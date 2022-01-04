import { useState, useEffect } from 'react'
import "./EventLister.css"

function EventLister() {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/events")
        .then(resp => resp.json())
        .then(setEvents)
    }, [])

    return (
        <div className='event_container'>
            {events.map((date_event) => {
                return(
                    <div className='event_container'>
                        <div className='event_cards'>
                                <p><b>Name:</b> {date_event.name}</p>
                                <p><b>Country:</b> {date_event.country}</p>
                                <p><b>Location:</b> {date_event.location}</p>
                        </div>
                    </div>
                    
                )
                })}
        </div>
    )
}

export default EventLister;