import { useState } from 'react'
import Sidebar from './Sidebar'
import SelectedDay from './SelectedDay'

function Home() {
    const [selectedDate, setSelectedDate] = useState(new Date())

    return (
        <>
            <Sidebar setSelectedDate={setSelectedDate} selectedDate={selectedDate} />
            <SelectedDay selectedDate={selectedDate} />
        </>
    )
}

export default Home;