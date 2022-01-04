import EventLister from "./EventLister"

function NewEventForm({events}) {

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = {}
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
        <form>
            <input type="text" placeholder="Name of Event?"/>
            <input type="text" placeholder="Where is it?"/>
            <input type="text" placeholder="What are you doing?" />
            <input type="text" placeholder="When? (YYYY/MM/DD)" />
            <input type="integer" placeholder="Priority 1 - 10?" />
            <button>Create Event</button>
        </form>
        <div className="eventlist">
        {/* <EventLister /> */}
        </div>
        </>
    )
}

export default NewEventForm;