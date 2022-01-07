
import { useState, useEffect } from 'react'
import { Routes,Route } from "react-router-dom";
import "./App.css"
import NavBar from "./NavBar";
import Home from "./Home";
import EventLister from "./EventLister";
import LogIn from "./LogIn";
import About from './About';

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
      <div className="App">
      
      <div className='app_navbar'>
        <NavBar onLogout={setUser}/>
      </div>
        <Routes>
          <Route path='/logout'
          element={
            <LogIn />
          } 
          />
            <Route path='/event-list'
          element={
            <EventLister user={user}/>
          } 
          />
        
          <Route path='/about'
          element={
            <About />
          } 
          />
          <Route exact path='/' 
          element={
            <div className='home_route'>
              <h1>Welcome, {user.username}!</h1>
              <Home user={user}/>
            </div>
          }
          />
        </Routes>
      </div>
    );
  } else {
    return (
      <>
      <h1>Welcome to Calendlister 📅</h1>
      <LogIn onLogin={setUser} />
      </>
    );
  }

}

export default App;
