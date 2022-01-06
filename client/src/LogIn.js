import { useState } from 'react'

const LogIn = ({onLogin}) => {
    const [username, setUsername] = useState("")
    const [newUserame, setNewUsername] = useState("")

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
            username: newUserame
        }
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        }).then(resp => resp.json())
        .then((data) => {
            setNewUsername('')
        })
    }

    return (
        <>
        
        <h2>Log In</h2>
        <div className="login">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            {/* <input type="text" placeholder="Password"/> */}
                <button type="submit">Log In</button>
            </form>
            
        </div>
        <h2>Create an Account:</h2>
        <div className='create_account'>

        </div>
            <form onSubmit={handleNewUserSubmit}>
                <input type="text" placeholder="Username" value={newUserame} onChange={(e) => setNewUsername(e.target.value)}/>
            {/* <input type="text" placeholder="Password"/> */}
            {/* <input type="text" placeholder="Confirm Password"/> */}
                <button type="submit">Create Account</button>
            </form>
            
        </>
        
    )
}

export default LogIn;