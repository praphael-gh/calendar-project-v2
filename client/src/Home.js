import { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import SelectedDay from './SelectedDay'


function Home() {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [eventList, setEventList] = useState([])
    const [selectedDayID, setSelectedDayID] = useState(null)

    useEffect(() => {
        let date = selectedDate.toDateString()
        fetch(`http://localhost:3000/days/${date}`)
          .then((res) => res.json())
          .then((data) => {
            setSelectedDayID(data.id)
            setEventList(...eventList, data.events);
          })
      }, [selectedDate]);

      function handleDeleteEvent(id) {
        fetch(`http://localhost:3000/events/${id}`, {
          method: "DELETE",
        }).then((r) => {
          if (r.ok) {
            setEventList((events) =>
              events.filter((event) => event.id !== id)
            );
          }
        });
      }


    return (
        <>
            
            <SelectedDay selectedDate={selectedDate} eventList={eventList} selectedDayID={selectedDayID} setEventList={setEventList} handleDeleteEvent={handleDeleteEvent}/>
            <Sidebar setSelectedDate={setSelectedDate} selectedDate={selectedDate} setEventList={setEventList} />
        </>
    )
}

export default Home;