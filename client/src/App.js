
import { useState, useEffect } from "react";
import { Routes,Route } from "react-router-dom";
import "./App.css"
import NavBar from "./NavBar";
import Home from "./Home";
import NewEventForm from "./NewEventForm";
import EventLister from "./EventLister";
import LogIn from "./LogIn";


function App() {
  const [events, setEvents] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/events")
        .then(resp => resp.json())
        .then(setEvents)
    }, [])

  
  // useEffect(() => {
  //   let date = selectedDate.toDateString()
  //   fetch(`http://localhost:4000/days/${date}`)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setEventList(json);
  //     });
  // }, [selectedDate]);
  

  return (
    <div className="App">
      <header className="App-header"> 
      <NavBar />
        <Routes>
          <Route path ='/login'
          element={<LogIn />
          }
          />

          <Route path ='/new-event'
          element={<NewEventForm events={events}/>
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
