import { useState, useEffect } from 'react'
import "./EventLister.css"

function EventLister() {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/events")
        .then(resp => resp.json())
        .then((json) => {
            setEvents(json);
        });
    }, [])

    return (
        <div className='event_container'>
            {events.map((date_event) => {
                return(

                        <div className='event_cards'>
                                <p><b>Name:</b> {date_event.name}</p>
                                <p><b>Where:</b> {date_event.where}</p>
                                <p><b>Description:</b> {date_event.description}</p>
                                <p><b>Date:</b> {date_event.day.date}</p>
                        </div>

                )
                })}
        </div>
    )
}

export default EventLister;