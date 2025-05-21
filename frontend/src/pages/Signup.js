import { useState } from "react"
import { useSignUp } from "../hooks/useSignup"

const Signup = () =>{
    //Placeholder for states
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = useSignUp()

    const handleSubmit = async(e) =>{
        e.preventDefault()  //Prevent reloading of page
        await signup(email, password)
    }

    return(
        <form className = "signup" onSubmit={handleSubmit}>
            <h3>Sign Up</h3>

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

            <button disabled={isLoading}>Sign Up</button>          {/*Disable the Signup button when isLoading is true */}
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Signup;