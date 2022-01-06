import { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import SelectedDay from './SelectedDay'


function Home() {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [eventList, setEventList] = useState([])
    const [dayInstance, setDayInstance] = useState([])

    useEffect(() => {
        let date = selectedDate.toDateString()
        fetch(`http://localhost:4000/days/${date}`)
          .then((res) => res.json())
          .then((json) => {
            console.log(json)
            setEventList(...eventList, json.events)
            setDayInstance(json)
        });
      }, [selectedDate]);


    return (
        <>
            <SelectedDay selectedDate={selectedDate} eventList={eventList} dayInstance={dayInstance}/>
            <Sidebar setSelectedDate={setSelectedDate} selectedDate={selectedDate} setEventList={setEventList}/>
        </>
    )
}

export default Home;