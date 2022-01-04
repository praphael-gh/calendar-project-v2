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
            <input />
            <input />
        </form>
        <div className="eventlist">
        <EventLister />
        </div>
        </>
    )
}

export default NewEventForm;