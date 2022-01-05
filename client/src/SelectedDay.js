import NewEventForm from "./NewEventForm";


function SelectedDay({selectedDate, eventList}) {

    const events = eventList.map((d) => {
        return(
            <>
            <div className='event_cards'>
                <p><b>Name:</b> {d.name}</p>
                <p><b>Where:</b> {d.where}</p>
                <p><b>Description:</b> {d.description}</p>
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
            <NewEventForm selectedDate={selectedDate}/>
        </div>
    )    
}

export default SelectedDay;