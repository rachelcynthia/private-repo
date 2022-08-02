import React, { useState } from "react"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = () => {

    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return (
        <>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={email} onChange={handleEmailChange} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    );
}

export default Login;