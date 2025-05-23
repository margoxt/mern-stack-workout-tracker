//Import link to enable navigation of multiple pages
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';

const Navbar = () =>{
    const {logout} = useLogout();
    const {user} = useAuthContext();

    const handleClick = () =>{
       logout() //Deletes item from local storage token, update global state to null
    }

    return(
        <header>
            <div className="container">
                <Link to="/">
                <h1>Workout Buddy</h1>
                </Link>
                <nav>
                    {user && (                                                      //Check if user exists, by checking the value of user
                        <div>
                            <span>{user.email}</span>                               {/*When logged in it should show the email next to the button */}
                            <button onClick={handleClick}>Log out</button>
                        </div>
                    )}
                    {!user && (                                                      //If the user does not exist, show login and signup
                        <div>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Navbar;