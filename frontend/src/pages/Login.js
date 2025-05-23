import { useState } from "react"
import { useLogin } from "../hooks/useLogin"

const Login = () =>{
    //Placeholder for states
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()

    const handleSubmit = async(e) =>{
        e.preventDefault()  //Prevent reloading of page
        await login(email, password)
    }

    return(
        <form className = "login" onSubmit={handleSubmit}>
            <h3>Login</h3>

            <label>Email Address:</label>
            <input 
                type="email"
                onChange={(e) => setEmail(e.target.value) }     //Change the value of the email state. Target = the input
                value ={email}
            />

            <label>Password:</label>
            <input 
                type="password"
                onChange={(e) => setPassword(e.target.value) }     //Change the value of the email state. Target = the input
                value ={password}
            />

            <button>Log in</button>
        </form>
    )
}

export default Login;