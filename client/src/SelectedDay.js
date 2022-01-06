import NewEventForm from "./NewEventForm";
import React, {useState} from 'react'


function SelectedDay({selectedDate, eventList, selectedDayID, setEventList, handleDeleteEvent, handleEventChange, prio, setPrio}) {

    const events = eventList.map((d) => {
        // console.log(d)
        return (
            <React.Fragment key={d.name}>
            <div className='event_cards'>
                <p><b>Name:</b> {d.name}</p>
                <p><b>Where:</b> {d.where}</p>
                <p><b>Description:</b> {d.description}</p>
                <p><b>Priority:</b> {d.priority}</p>
                <button onClick={() => handleDeleteEvent(d.id)}>Delete Event</button>
                <form id={d.id} onSubmit={handleEventChange}>
                    <button type="submit" >Change Priority</button>
                    <input type='text' placeholder='0 - 10' onChange={(e) => setPrio({value: e.target.value})} value={prio.value} />
                </form>
                
            </div>
            </React.Fragment>
            
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