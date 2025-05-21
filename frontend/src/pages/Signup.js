import { useState } from "react"

const Signup = () =>{
    //Placeholder for states
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async(e) =>{
        e.preventDefault()  //Prevent reloading of page
        console.log(email, password)
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
                value ={email}
            />

            <button>Sign Up</button>
        </form>
    )
}

export default Signup;