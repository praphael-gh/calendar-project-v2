import NewEventForm from "./NewEventForm";


function SelectedDay({selectedDate}) {

    return(
        <div className="event_list">
            <NewEventForm selectedDate={selectedDate}/>
            <h1>
                {selectedDate.toDateString()}
            </h1>
        </div>
    )    
}

export default SelectedDay;