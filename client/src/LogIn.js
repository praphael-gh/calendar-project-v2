const LogIn = () => {
    return (
        <>
        <h2>Log In</h2>
        <div className="Login">
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password"/>
            <button type="submit">Log In</button>
        </div>
        <h2>Create an Account:</h2>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Username"/>
            <input type="text" placeholder="Password"/>
            <input type="text" placeholder="Confirm Password"/>
            <button type="submit">Create Account</button>
        </>
        
    )
}

export default LogIn;