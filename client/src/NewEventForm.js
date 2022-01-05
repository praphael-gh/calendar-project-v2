import EventLister from "./EventLister"
import {useState} from 'react'

function NewEventForm({selectedDate}) {
    const [name, setName] = useState("")
    const [where, setWhere] = useState("")
    const [desc, setDesc] = useState("")
    const [priority, setPriority] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = {
            name: name,
            where: where,
            description: desc,
            priority: priority,
            date: selectedDate
        }
        fetch('http://localhost:4000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(formData)
        }).then(resp => resp.json())
        .then((newEvent) =>
        (newEvent))
    }


    return (
        <>
        <h1>Add Your Event:</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name of Event?"/><br/>
            <input type="text" placeholder="Where is it?"/><br/>
            <input type="text" placeholder="What are you doing?" /><br/>
            <input type="integer" placeholder="Priority 1 - 10?" /><br/>
            <button type="submit">Create Event</button>
        </form>
        <div className="eventlist">
        </div>
        </>
    )
}

export default NewEventForm;