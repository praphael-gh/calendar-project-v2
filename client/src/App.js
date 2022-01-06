
import { useState, useEffect } from 'react'
import { Routes,Route } from "react-router-dom";
import "./App.css"
import NavBar from "./NavBar";
import Home from "./Home";
import EventLister from "./EventLister";
import LogIn from "./LogIn";

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (user) {
    return (
      <>
      <h2>Welcome, {user.username}!</h2>
      <div className="App">
      <NavBar onLogout={setUser}/>
        <Routes>
          <Route path='/logout'
          element={
            <LogIn />
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
      </div>
      </>
    );
  } else {
    return (
      <>
      <LogIn onLogin={setUser} />
      </>
    );
  }

}

export default App;
