import { useState, useEffect } from 'react'
import './Home.css'
import Sidebar from './Sidebar'
import SelectedDay from './SelectedDay'


function Home({user}) {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [eventList, setEventList] = useState([])
    const [selectedDayID, setSelectedDayID] = useState(null)
    const [prio, setPrio] = useState({value:""})

    useEffect(() => {
        let date = selectedDate.toDateString()
        fetch(`/days/${date}`)
          .then((res) => res.json())
          .then((data) => {
            setSelectedDayID(data.id)
            setEventList(...eventList, data.events);
          })
      }, [selectedDate, ]);

      function handleDeleteEvent(id) {
        fetch(`/events/${id}`, {
          method: "DELETE",
        }).then((r) => {
          if (r.ok) {
            setEventList((events) =>
              events.filter((event) => event.id !== id)
            );
          }
        });
      }

      function handleEventChange (e) {
        e.preventDefault()
        console.log(e.target.value)
        const formData = {
          priority: prio.value
        }
        fetch(`/events/${e.target.id}`, {
          method: 'PATCH',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(formData)
        }).then((r) => r.json()
        );
      }


    return (
        <div className='home'>
          <div id='selected-day'>
            <SelectedDay selectedDate={selectedDate} eventList={eventList} selectedDayID={selectedDayID} setEventList={setEventList} handleDeleteEvent={handleDeleteEvent} handleEventChange={handleEventChange} prio={prio} setPrio={setPrio} user={user}/>
          </div>
            <Sidebar setSelectedDate={setSelectedDate} selectedDate={selectedDate} setEventList={setEventList} />
        </div>
    )
}

export default Home;