import { useState } from 'react'

const LogIn = () => {
    const [username, setUsername] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username }),
        })
          .then((r) => r.json())
          .then((user) => onLogin(user));
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
            <form>
                <input type="text" placeholder="Username"/>
            {/* <input type="text" placeholder="Password"/> */}
            {/* <input type="text" placeholder="Confirm Password"/> */}
                <button type="submit">Create Account</button>
            </form>
            
        </>
        
    )
}

export default LogIn;