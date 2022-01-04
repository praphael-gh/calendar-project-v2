
function SelectedDay({selectedDate}) {


    return(
        <div className="event_list">
            {/* <button>Add Event</button> */}
            <h1>
                {selectedDate.toDateString()}
                {/* <EventList /> */}
                {/* {eventCards} */}
            </h1>
        </div>
    )
}

export default SelectedDay;