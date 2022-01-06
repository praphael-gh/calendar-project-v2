
import { useState } from 'react'
import { Routes,Route } from "react-router-dom";
import "./App.css"
import NavBar from "./NavBar";
import Home from "./Home";
import EventLister from "./EventLister";
import LogIn from "./LogIn";

function App() {
  const [user, setUser] = useState()

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);


  return (
    <div className="App">
      <header className="App-header"> 
      <NavBar />
        <Routes>
          <Route path ='/login'
          element={}
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
