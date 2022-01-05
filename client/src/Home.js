import { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import SelectedDay from './SelectedDay'

function Home() {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [eventList, setEventList] = useState([])

    useEffect(() => {
        let date = selectedDate.toDateString()
        fetch(`http://localhost:4000/days/${date}`)
          .then((res) => res.json())
          .then((json) => {
            setEventList(json);
        });
      }, [selectedDate]);


    return (
        <>
            
            <SelectedDay selectedDate={selectedDate} />
            <Sidebar setSelectedDate={setSelectedDate} selectedDate={selectedDate} />
        </>
    )
}

export default Home;