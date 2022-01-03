import Sidebar from "./Sidebar";
import "./App.css"
import EventList from "./EventList";
import { useState } from "react";

function App() {
  const [selectedDate, setSelectedDate] = useState((new Date()).toLocaleDateString("en-US"))

  const dateForEventList = (p) => {
    setSelectedDate(p)
  }

  return (
    <div className="App">
      <header className="App-header"> 
        <Sidebar eventDate={dateForEventList} />
        <EventList selectedDate={selectedDate} />
      </header>
    </div>
  );
}

export default App;
