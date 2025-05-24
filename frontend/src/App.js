import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

//Pages & Components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const {user} = useAuthContext()         //Logged in or Out

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className="pages">
          <Routes>
            <Route                                                         // Needs 2 different props
              path="/"                                                     // one slash means the default or the whole page
              element={user ? <Home/>: <Navigate to="/login"/>}            // element refers to what we want to render
            />
            <Route
              path="/login"
              element={!user ? <Login/>: <Navigate to="/"/>}
            />
            <Route
              path="/signup"
              element={!user ? <Signup/>: <Navigate to="/"/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;



/*Notes:
- Install react-router-dom so we can have multiple pages to this application
- npm install react-router-dom 
*/