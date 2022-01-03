import "./App.css"
import Sidebar from "./Sidebar";
import SelectedDay from "./SelectedDay";
import { useState } from "react";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [eventList, setEventList] = useState(null)

  // function fetchSelectedDay() {
  //   fetch("localhost:3000/")
  //     .then((res) => res.json())
  //     .then((json) => setData(json));
  // }

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
