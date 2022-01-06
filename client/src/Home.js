import { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import SelectedDay from './SelectedDay'

function Home() {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [eventList, setEventList] = useState([])
    const [selectedDayID, setSelectedDayID] = useState(null)

    useEffect(() => {
        let date = selectedDate.toDateString()
        fetch(`http://localhost:4000/days/${date}`)
          .then((res) => res.json())
          .then((data) => {
            setSelectedDayID(data.id)
            setEventList(...eventList, data.events);
          })
      }, [selectedDate]);


    return (
        <>
            
            <SelectedDay selectedDate={selectedDate} eventList={eventList} selectedDayID={selectedDayID} setEventList={setEventList}/>
            <Sidebar setSelectedDate={setSelectedDate} selectedDate={selectedDate} setEventList={setEventList} />
        </>
    )
}

export default Home;