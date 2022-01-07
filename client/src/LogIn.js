import { useState } from 'react'
import './LogIn.css'

const LogIn = ({onLogin}) => {
    const [username, setUsername] = useState("")
    const [newUsername, setNewUsername] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json',
          },
          body: JSON.stringify({ username }),
        })
        .then((r) => {
            if (r.ok) {
              r.json().then((user) => onLogin(user));
            }
          });
      }

      const handleNewUserSubmit = (event) => {
        event.preventDefault()
        const formData = {
            username: newUsername
        }
        fetch('/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        }).then(resp => resp.json())
        .then((data) => {
            setNewUsername('')
        })
    }

    return (
    
        <div className='login_page'>
        <h2>Log In</h2>
            <div className="login">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <button type="submit">Log In</button>
                </form>
            </div>
        <h2>Create an Account:</h2>
            <div className='create_account'> 
                <form onSubmit={handleNewUserSubmit}>
                    <input type="text" placeholder="Username" value={newUsername} onChange={(e) => setNewUsername(e.target.value)}/>
                    <button type="submit">Create Account</button>
                </form>
            </div>
        </div>
    )
}

export default LogIn;