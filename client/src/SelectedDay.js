
function SelectedDay({selectedDate}) {


    return(
        <div className="event_list">
            <h1>
                {selectedDate.toDateString()}
                {/* {eventCards} */}
            </h1>
        </div>
    )
}

export default SelectedDay;