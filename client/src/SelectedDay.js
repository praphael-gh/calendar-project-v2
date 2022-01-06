import NewEventForm from "./NewEventForm";


function SelectedDay({selectedDate, eventList, selectedDayID, setEventList, handleDeleteEvent}) {

    const events = eventList.map((d) => {
        return(
            <>
            <div className='event_cards'>
                <p><b>Name:</b> {d.name}</p>
                <p><b>Where:</b> {d.where}</p>
                <p><b>Description:</b> {d.description}</p>
                <button onClick={() => handleDeleteEvent(d.id)}>Delete Event</button>
            </div>
            </>
            
        )
    })

    

    return(
        <div className="event_list">
            <h1>
                {selectedDate.toDateString()}
            </h1>
            <div className="event_container">
                {events}
            </div>
            <NewEventForm selectedDate={selectedDayID} setEventList={setEventList} eventList={eventList}/>
        </div>
    )    
}

export default SelectedDay;