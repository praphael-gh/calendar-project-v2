import { useState } from 'react'
import Sidebar from './Sidebar'
import SelectedDay from './SelectedDay'

function Home() {
    const [selectedDate, setSelectedDate] = useState(new Date())

    return (
        <>
            
            <SelectedDay selectedDate={selectedDate} />
            <Sidebar setSelectedDate={setSelectedDate} selectedDate={selectedDate} />
        </>
    )
}

export default Home;