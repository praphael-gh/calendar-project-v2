import "./App.css"
import Sidebar from "./Sidebar";
import SelectedDay from "./SelectedDay";
import { useState, useEffect } from "react";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [eventList, setEventList] = useState(null)

  
  useEffect(() => {
    let date = selectedDate.toDateString()
    fetch(`http://localhost:4000/days/${date}`)
      .then((res) => res.json())
      .then((json) => {
        setEventList(json);
      });
  }, [selectedDate]);
  

  return (
    <div className="App">
      <header className="App-header"> 
        <Sidebar setSelectedDate={setSelectedDate} selectedDate={selectedDate} />
        <SelectedDay selectedDate={selectedDate} />
      </header>
    </div>
  );
}

export default App;
