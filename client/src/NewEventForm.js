import {useState} from 'react'

function NewEventForm({selectedDate, eventList, setEventList, user}) {
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
            user_id: user.id,
            day_id: selectedDate
        }
        fetch('http://localhost:3000/events', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        }).then(resp => resp.json())
        .then((data) => {
            setEventList([...eventList, data])
        })
    }


    return (
        <>
        <h1>Add Your Event:</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name of Event?" onChange={(e) => setName(e.target.value)}/><br/>
            <input type="text" placeholder="Where is it?" onChange={(e) => setWhere(e.target.value)}/>
            <br/>
            <input type="text" placeholder="What are you doing?" onChange={(e) => setDesc(e.target.value)}/>
            <br/>
            <input type="integer" placeholder="Priority 1 - 10?" onChange={(e) => setPriority(e.target.value)}/>
            <br/>
            <button type="submit">Create Event</button>
        </form>
        <div className="eventlist">
        </div>
        </>
    )
}

export default NewEventForm;