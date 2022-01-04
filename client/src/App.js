
import { useState, useEffect } from "react";
import { Routes,Route } from "react-router-dom";
import "./App.css"
import NavBar from "./NavBar";
import Home from "./Home";
import NewEventForm from "./NewEventForm";
import EventLister from "./EventLister";




function App() {
  const [events, setEvents] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/events")
        .then(resp => resp.json())
        .then(setEvents)
    }, [])

  // function fetchSelectedDay() {
  //   fetch("localhost:3000/")
  //     .then((res) => res.json())
  //     .then((json) => setData(json));
  // }

  return (
    <div className="App">
      <header className="App-header"> 
      <NavBar />
        <Routes>
          <Route path ='/neweventform'
          element={
            <>
            <NewEventForm events={events}/>
            <EventLister />
            </>
          
          }
          />
          
          <Route path='/event-list'
          element={
            <EventLister />
          } 
          />

          <Route exact path='/' 
          element={
            <Home />
          }
          />
          
        </Routes>
      </header>
    </div>
  );
}

export default App;
